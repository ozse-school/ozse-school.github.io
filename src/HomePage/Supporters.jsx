import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Supporters() {
  const supporters = [
    { Name: "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation" },
    { Name: "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation" },
    { Name: "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation" },
    { Name: "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation" },
    { Name: "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation" },
    { Name: "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation" },
    { Name: "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation" },
    { Name: "OzSE Foundation", image: "https://placehold.co/280x280.png?text=OzSE+Foundation" },
  ];

  const mobileSettings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="bg-white p-8 max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Supporters</h2>

      <div className="hidden md:grid grid-cols-4 gap-6 mb-8">
        {supporters.map((supporter, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={supporter.image} alt={supporter.Name} className="w-full object-cover" />
          </div>
        ))}
      </div>

      <div className="md:hidden mb-8">
        <Slider {...mobileSettings}>
          {supporters.map((supporter, i) => (
            <div key={i} className="flex flex-col items-center p-2">
              <img
                src={supporter.image}
                alt={supporter.Name}
                className="w-full max-w-[200px] mx-auto object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      <button className="rounded-full bg-[#000F46] px-10 py-4 text-white hover:bg-[#00165e] transition">
        Support Us
      </button>
    </div>
  );
}

export default Supporters;
