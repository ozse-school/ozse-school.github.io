import React from "react";
import { Link } from "react-router-dom";

// Placeholder organizing committee for the 2027 edition.
// The 2026 committee is preserved in `src/Archive2026/ArchiveTeam.jsx`.
function Team({ id }) {
  const placeholders = [1, 2, 3];

  return (
    <div id={id} className="flex flex-col justify-center items-center px-4 py-8">
      <div className="mb-8 text-left w-full max-w-6xl">
        <p className="text-3xl sm:text-4xl font-bold">OzSE 2027 Organizing Committee</p>
      </div>

      <div className="w-full max-w-6xl mb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-5">
          <p className="text-gray-700">
            The OzSE 2027 organizing committee will be announced soon.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {placeholders.map((n) => (
          <div
            key={n}
            className="bg-white p-4 flex flex-col items-center text-center w-full rounded-lg shadow-sm border border-dashed border-gray-300"
          >
            <div className="w-full max-w-[120px] aspect-square rounded-xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">To be announced</h3>
            <p className="text-sm text-gray-500 mt-2">Organizing Committee</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        See the{" "}
        <Link to="/archive/2026" className="text-blue-600 hover:underline">
          2026 organizing committee
        </Link>
        .
      </p>
    </div>
  );
}

export default Team;
