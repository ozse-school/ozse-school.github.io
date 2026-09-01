import React from "react";
import { Link } from "react-router-dom";

// Placeholder speakers for the 2027 edition.
// Add confirmed speakers here as they are announced (see the 2026 archive
// component `src/Archive2026/ArchiveSpeakers.jsx` for the full data format).
const speakers = [
  {
    name: "Speaker to be announced",
    position: "Keynote Speaker",
    organization: "OzSE 2027",
    placeholder: true,
  },
];

function SpeakerPlaceholderCard({ speaker }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-dashed border-gray-300 p-6 flex flex-col items-center text-center">
      <div className="w-28 h-28 rounded-full bg-gray-100 flex items-center justify-center mb-4">
        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-700">{speaker.name}</h3>
      {speaker.position && <p className="text-sm text-gray-500 mt-1">{speaker.position}</p>}
      {speaker.organization && <p className="text-sm text-gray-500">{speaker.organization}</p>}
    </div>
  );
}

const SpeakersSection = ({ id }) => {
  return (
    <section
      id={id}
      className="pt-24 pb-6 bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-6xl w-full px-4">
          <p className="text-3xl sm:text-4xl font-bold text-left">Speakers</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our 2027 speaker line-up is being finalised. Check back soon — we'll
            announce world-renowned experts in software engineering and AI here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <SpeakerPlaceholderCard key={index} speaker={speaker} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Curious who joined us last year?{" "}
          <Link to="/archive/2026" className="text-blue-600 hover:underline">
            See the OzSE 2026 speakers
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default SpeakersSection;
