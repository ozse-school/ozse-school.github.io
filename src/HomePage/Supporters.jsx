import React from "react";

// Placeholder supporters for the 2027 edition.
// Add confirmed supporter logos here as they are confirmed. The 2026 supporter
// logos live in `public/sponsor/` if you want to reuse any of them.
function Supporters({ id }) {
  return (
    <div className="bg-white py-8 mb-12 max-w-6xl mx-auto text-center" id={id}>
      <h2 className="text-left text-4xl font-bold mb-8 md:px-12 lg:px-0 px-4">Supporters</h2>

      <div className="px-4 lg:px-0">
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 mb-8">
          <p className="text-gray-700 text-lg">
            Our 2027 supporters and sponsors will be announced soon.
          </p>
          <p className="text-gray-600 mt-2">
            Interested in supporting OzSE 2027? We'd love to hear from you.
          </p>
        </div>
      </div>

      <button className="rounded-full bg-[#000F46] px-10 py-4 text-white hover:bg-[#00165e] transition">
        Support Us
      </button>
    </div>
  );
}

export default Supporters;
