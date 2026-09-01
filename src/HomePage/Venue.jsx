import React from "react";

function Venue({ id }) {
  const address = "RMIT University, 124 La Trobe St, Melbourne VIC 3000";

  // Function to open map app based on device
  const openMapApp = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      window.open(`maps://maps.apple.com/?daddr=${encodeURIComponent(address)}`, "_blank");
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, "_blank");
    }
  };

  // Function to open map app with public transport directions
  const openMapAppPublicTransport = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      window.open(`maps://maps.apple.com/?daddr=${encodeURIComponent(address)}&dirflg=r`, "_blank");
    } else {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=transit`, "_blank");
    }
  };

  return (
    <div
      className="text-left p-12 space-y-8 px-4 sm:px-0 flex flex-col items-center justify-center"
      id={id}
    >
      <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-8 sm:px-0 w-full max-w-6xl">
        <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-4 sm:px-0">
          <h1 className="text-left text-3xl lg:px-0 md:px-4 sm:text-4xl font-bold">Venue</h1>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-center px-2 sm:px-0 mb-6">
            <p className="text-xl sm:text-2xl font-bold">RMIT University, City Campus</p>
            <p className="text-gray-600 mt-1">124 La Trobe Street, Melbourne VIC 3000</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
              <a
                className="underline text-blue-600 hover:text-blue-800"
                href="https://maps.app.goo.gl/?q=RMIT+University+Melbourne"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Map
              </a>
              <button
                onClick={openMapApp}
                className="px-4 py-2 bg-[#000F46] text-white rounded-full font-semibold hover:bg-[#000F46]/90 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get Directions
              </button>
            </div>
          </div>

          {/* Exact room placeholder */}
          <div className="w-full max-w-3xl bg-blue-50 border border-blue-100 rounded-lg p-5 mb-6 text-center">
            <p className="text-gray-700">
              OzSE 2027 will be held at RMIT University's City Campus in the heart
              of Melbourne. The exact building and room will be confirmed closer to
              the event.
            </p>
          </div>

          <div className="w-full flex justify-center text-center">
            <div className="w-full lg:max-w-[800px] h-[300px] sm:h-[450px]">
              <iframe
                title="RMIT University City Campus map"
                src="https://maps.google.com/maps?q=RMIT%20University%20City%20Campus%20Melbourne&output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Getting There */}
        <div className="w-full mt-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-0">Getting There</h2>
            <button
              onClick={openMapAppPublicTransport}
              className="px-4 py-2 bg-[#000F46] text-white rounded-full font-semibold hover:bg-[#000F46]/90 transition-colors flex items-center gap-2 self-start sm:self-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
              Get Public Transport Directions
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Train */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">🚂</span> Train
              </h3>
              <p className="text-gray-700">
                RMIT's City Campus is a short walk from <strong>Melbourne Central</strong> and
                <strong> Flinders Street</strong> stations, both connected to Melbourne's
                metropolitan train network.
              </p>
            </div>

            {/* Trams */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">🚃</span> Trams
              </h3>
              <p className="text-gray-700">
                Trams run along <strong>Swanston Street</strong> and <strong>La Trobe Street</strong>,
                stopping right by the campus. The city centre is also within the
                Free Tram Zone.
              </p>
            </div>

            {/* Walking */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">🚶</span> Walking
              </h3>
              <p className="text-gray-700">
                The campus is centrally located in Melbourne's CBD, within easy
                walking distance of accommodation, dining, and public transport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venue;
