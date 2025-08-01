import React from "react";

function Hero({id}) {
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
          <p className="text-lg md:text-2xl mb-4">
            09 - 10 February 2026, Melbourne Connect.
          </p>
          <button className="mt-8 px-6 py-3 rounded-full bg-transperent border-2 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors">
            Register Now
          </button>
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
