import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Supporters({ id }) {
  const supporters = [
    { Name: "SigSoft", image: `/sponsor/01-acm-sigsoft.png` },
    { Name: "University OF Melbourne", image: `/sponsor/02-the-university-of-melbourne.png` },
    { Name: "Monash University", image: `/sponsor/03-monash-university.png` },
  ];

  const mobileSettings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="bg-white py-8 mb-12 max-w-6xl mx-auto text-center" id={id}>
      <h2 className="text-left text-4xl font-bold mb-8 md:px-12 lg:px-0 px-4">Supporters</h2>

      <div className="hidden md:grid grid-cols-3 gap-6 mb-8 flex justify-center items-center">
        {supporters.map((supporter, i) => (
          <div key={i} className="flex flex-col items-center">
            <img src={supporter.image} alt={supporter.Name} className="w-3/4 object-cover" />
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
