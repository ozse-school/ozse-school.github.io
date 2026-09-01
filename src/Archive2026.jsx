import React from "react";
import { Link } from "react-router-dom";
import ArchiveSpeakers from "./Archive2026/ArchiveSpeakers.jsx";
import ArchiveProgram from "./Archive2026/ArchiveProgram.jsx";
import ArchiveGallery from "./Archive2026/ArchiveGallery.jsx";
import ArchiveTeam from "./Archive2026/ArchiveTeam.jsx";

function Archive2026() {
  return (
    <div className="mt-12">
      {/* Archive banner */}
      <div className="bg-[#000F46] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="uppercase tracking-widest text-sm text-blue-200 mb-2">
            Archived Edition
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            OzSE 2026 — Australian Summer School in Software Engineering
          </h1>
          <p className="text-lg text-blue-100">
            9 – 10 February 2026, Melbourne Connect, University of Melbourne
          </p>
          <p className="mt-4 text-sm text-blue-200 max-w-3xl">
            This page preserves the full program, speakers, organizers, and
            photos from the 2026 edition of OzSE. For the upcoming event, see the{" "}
            <Link to="/" className="underline hover:text-white">
              current OzSE homepage
            </Link>
            .
          </p>
          <Link
            to="/history"
            className="inline-flex items-center gap-2 mt-6 text-sm text-blue-200 hover:text-white"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to History
          </Link>
        </div>
      </div>

      <ArchiveSpeakers id="archive-speakers" />
      <ArchiveProgram id="archive-program" />
      <ArchiveGallery id="archive-gallery" />
      <ArchiveTeam id="archive-team" />
    </div>
  );
}

export default Archive2026;
