import React from "react";

function Hero({id}) {
  // Function to open map app based on device
  const openMapApp = () => {
    const address = "Melbourne Connect, 700 Swanston St, Carlton VIC 3053";
    
    // Detect if user is on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Try Apple Maps first, fallback to Google Maps if not available
      window.open(`maps://maps.apple.com/?daddr=${encodeURIComponent(address)}`, '_blank');
    } else {
      // Use Google Maps for Android and other devices
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
    }
  };

  return (
    <div
      className="text-white lg:h-screen pt-28 flex flex-col items-center justify-center px-4 pb-12 bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.4), #000F46),
          url('/hero-section.jpg')
        `,
      }}
      id={id}
    >
      <div className="max-w-4xl text-start rounded">
        <p className="text-4xl md:text-6xl font-bold mb-4"> Australian Summer School in Software Engineering (OzSE) </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <p className="text-lg md:text-2xl">
              9 - 10 February 2026, Melbourne Connect, Level-M, Forum 1.
            </p>
            <button
              onClick={openMapApp}
              className="px-4 py-2 bg-white text-[#000F46] rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 text-sm md:text-base whitespace-nowrap"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </button>
          </div>
          {/*<button className="mt-8 px-6 py-3 rounded-full bg-transperent border-2 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors">*/}
          {/*  Register Now*/}
          {/*</button>*/}
      </div>

      <div
          className="flex flex-col p-12 space-y-8 px-4 sm:px-0"
      >
        <p className="text-3xl sm:text-4xl font-bold">About Event</p>

        <div className="w-full max-w-6xl">
          <p>
            Artificial Intelligence (AI), particularly generative AI techniques, is increasingly used in software engineering practices and embedded in software systems across industry and government, enabling the automation and support of various decision-making. The global AI market is projected to grow substantially annually. Significant investments—including Australia’s A$33.7 million in AI-driven solutions— have been made to harness AI for national and industrial advancement.
          </p>
          <br />
          <p>
            The rapid rise of AI-embedded software has widened the gap between academia and industry and highlighted a shortage of software engineers skilled in AI. Addressing this challenge requires closer collaboration between academia and industry to share knowledge, tackle shared issues, and train the next generation to build responsible, reliable software in the AI era.
          </p>
          <br />

        </div>
      </div>
    </div>
  );
}

export default Hero;
