import React from "react";
import { Link } from "react-router-dom";

// Placeholder program for the 2027 edition.
// The example rows below illustrate the format. The full 2026 program is
// preserved in `src/Archive2026/ArchiveProgram.jsx`.
const exampleSessions = [
  { time: "08:30-09:10", duration: "40", title: "Arrival & Check-in", speaker: "" },
  { time: "09:10-09:30", duration: "20", title: "Welcome & Opening Remarks", speaker: "OC Team" },
  { time: "09:30-10:15", duration: "45", title: "Keynote (example slot)", speaker: "To be announced" },
  { time: "10:15-10:45", duration: "30", title: "☕ Break", speaker: "" },
  { time: "10:45-12:30", duration: "105", title: "Talks & Spotlights (example slot)", speaker: "To be announced" },
  { time: "12:30-13:30", duration: "60", title: "🍽️ Lunch", speaker: "" },
  { time: "13:30-15:00", duration: "90", title: "Hands-on Session (example slot)", speaker: "To be announced" },
  { time: "15:00-15:30", duration: "30", title: "☕ Break", speaker: "" },
  { time: "15:30-17:00", duration: "90", title: "Talks & Closing (example slot)", speaker: "To be announced" },
];

function Program({ id }) {
  return (
    <div
      className="text-left p-12 space-y-8 px-4 sm:px-0 flex flex-col items-center justify-center"
      id={id}
    >
      <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-8 sm:px-0 w-full max-w-6xl">
        <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-4 sm:px-0">
          <h1 className="text-left text-3xl lg:px-0 md:px-4 sm:text-4xl font-bold">Program</h1>
        </div>

        {/* Coming soon notice */}
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 md:px-4">
          <p className="text-gray-700">
            The full OzSE 2027 program is being put together and will be published
            here closer to the event (18–19 February 2027). Below is an{" "}
            <strong>example day</strong> to illustrate the shape of the schedule.
          </p>
        </div>

        {/* Example day label */}
        <div className="flex gap-4 justify-center flex-wrap">
          <span className="rounded-full border-2 text-lg px-6 py-2 bg-[#000F46] text-white border-[#000F46]">
            Example Day — Program TBA
          </span>
        </div>

        {/* Example table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="text-left p-3 font-semibold text-sm md:text-base">Time</th>
                <th className="text-left p-3 font-semibold text-sm md:text-base">Duration</th>
                <th className="text-left p-3 font-semibold text-sm md:text-base">Title</th>
                <th className="text-left p-3 font-semibold text-sm md:text-base">Speaker</th>
              </tr>
            </thead>
            <tbody>
              {exampleSessions.map((session, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="p-3 text-sm md:text-base">
                    <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                      {session.time}
                    </span>
                  </td>
                  <td className="p-3 text-sm md:text-base">{session.duration} min</td>
                  <td className="p-3 text-sm md:text-base font-medium">{session.title}</td>
                  <td className="p-3 text-sm md:text-base text-gray-700">{session.speaker || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-gray-500">
          Looking for last year's sessions?{" "}
          <Link to="/archive/2026" className="text-blue-600 hover:underline">
            View the full OzSE 2026 program
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Program;
