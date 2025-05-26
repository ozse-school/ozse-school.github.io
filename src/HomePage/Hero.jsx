import React from "react";

function Hero({id}) {
  return (
    <div
      className="text-white h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0, 0, 0, 0.4), #000F46),
          url('/hero-section.png')
        `,
      }}
      id={id}
    >
      <div className="max-w-4xl text-start rounded">
        <p className="text-4xl md:text-6xl font-bold mb-4"> Australian Summer School on Software Engineering (OzSE) </p>
          <p className="text-lg md:text-xl mb-4">
            February 2026, Melbourne Connect.        
          </p>
          <p> OzSE is designed to tackle these challenges by serving as a three-way connection hub that brings together graduate students, researchers, and industry leaders across Australasia. OzSE will serve as a platform to foster collaboration, focusing on practical and emerging issues in AI-embedded software engineering.</p>
          <button className="mt-8 px-6 py-3 rounded-full bg-transperent border-2 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors">
            Register Now
          </button>
      </div>
    </div>
  );
}

export default Hero;
