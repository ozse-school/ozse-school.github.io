import React, { useState, useEffect, useCallback } from "react";

// Auto-load all images from the src/assets/gallery directory
// Supported formats: jpg, jpeg, png, gif, webp (case-insensitive)
const imageModules = import.meta.glob('/src/assets/gallery/*.{jpg,jpeg,png,gif,webp,JPG,JPEG,PNG,GIF,WEBP}', { eager: true, query: '?url', import: 'default' });

// Convert the imported modules to gallery image objects
const galleryImages = Object.entries(imageModules).map(([path, url]) => {
  // Extract filename from path (e.g., "/src/assets/gallery/photo1.jpg" -> "photo1.jpg")
  const filename = path.split('/').pop();
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');

  return {
    src: url,
    alt: nameWithoutExt.replace(/[-_]/g, ' '), // Convert filename to readable alt text
    caption: '', // Optional: can be customized per image
    filename: filename
  };
});

function PhotoGallery({ id }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const hasImages = galleryImages.length > 0;

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    if (!hasImages || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [hasImages, isPaused]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  const handleDownload = async (imageSrc, imageName) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = imageName || "photo.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(imageSrc, "_blank");
    }
  };

  // Placeholder content when no images
  if (!hasImages) {
    return (
      <div
        className="text-left p-12 space-y-8 px-4 sm:px-0 flex flex-col items-center justify-center bg-[#000F46]"
        id={id}
      >
        <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-8 sm:px-0 w-full max-w-6xl">
          <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-8 sm:px-0">
            <h1 className="text-left text-3xl lg:px-0 md:px-4 sm:text-4xl font-bold text-white">
              📸 Photo Gallery
            </h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center py-16">
            <div className="text-center text-white/80">
              <svg
                className="w-24 h-24 mx-auto mb-4 text-white/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xl font-medium">Photos coming soon!</p>
              <p className="text-sm mt-2 text-white/60">
                Event photos will be available after the event.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentImage = galleryImages[currentIndex];

  return (
    <div
      className="text-left p-12 space-y-8 px-4 sm:px-0 flex flex-col items-center justify-center bg-[#000F46]"
      id={id}
    >
      <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-8 sm:px-0 w-full max-w-6xl">
        <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-8 sm:px-0">
          <h1 className="text-left text-3xl lg:px-0 md:px-4 sm:text-4xl font-bold text-white">
            📸 Photo Gallery
          </h1>
        </div>

        {/* Gallery Container */}
        <div
          className="relative w-full max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Image Container */}
          <div className="relative aspect-[16/10] bg-black/20 rounded-xl overflow-hidden shadow-2xl">
            {/* Loading placeholder */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                <div className="animate-pulse text-white/60">Loading...</div>
              </div>
            )}

            {/* Image */}
            <img
              src={currentImage.src}
              alt={currentImage.alt || `Gallery photo ${currentIndex + 1}`}
              className={`w-full h-full object-contain transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"
                }`}
              onLoad={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />

            {/* Caption Overlay */}
            {currentImage.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
                <p className="text-white text-sm sm:text-base text-center">
                  {currentImage.caption}
                </p>
              </div>
            )}

            {/* Download Button */}
            <button
              onClick={() =>
                handleDownload(
                  currentImage.src,
                  currentImage.src.split("/").pop()
                )
              }
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#000F46] p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              title="Download photo"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#000F46] p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous photo"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#000F46] p-3 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next photo"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Photo Counter */}
            <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/60"
                  }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <span className="text-white/60 text-sm">
              {isPaused ? "⏸ Paused" : "▶ Auto-playing"} • Hover to pause
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
