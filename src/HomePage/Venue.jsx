import React from "react";

function Venue({ id }) {
  // Function to open map app based on device
  const openMapApp = () => {
    const address = "Melbourne Connect, 700 Swanston St, Carlton VIC 3053";
    
    // Detect if user is on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Try Apple Maps first, fallback to Google Maps if not available
      window.open(`maps://maps.apple.com/?daddr=${encodeURIComponent(address)}`, '_blank');
    } else {
      // Use Google Maps for Android and other devices
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
    }
  };

  // Function to open map app with public transport directions
  const openMapAppPublicTransport = () => {
    const address = "Melbourne Connect, 700 Swanston St, Carlton VIC 3053";
    
    // Detect if user is on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Apple Maps with public transport (dirflg=r for transit)
      window.open(`maps://maps.apple.com/?daddr=${encodeURIComponent(address)}&dirflg=r`, '_blank');
    } else {
      // Google Maps with transit mode
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=transit`, '_blank');
    }
  };

  // Function to open map app with walking directions
  const openMapAppWalking = () => {
    const address = "Melbourne Connect, 700 Swanston St, Carlton VIC 3053";
    
    // Detect if user is on iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
      // Apple Maps with walking directions (dirflg=w for walking)
      window.open(`maps://maps.apple.com/?daddr=${encodeURIComponent(address)}&dirflg=w`, '_blank');
    } else {
      // Google Maps with walking mode
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}&travelmode=walking`, '_blank');
    }
  };

  return (
    <div
      className="text-left p-12 space-y-8 px-4 sm:px-0 flex flex-col items-center justify-center"
      id={id}
    >
      <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-8 sm:px-0 w-full max-w-6xl">
        <div className="flex flex-col pt-12 lg:px-0 md:px-4 space-y-8 sm:px-0">
          <h1 className="text-left text-3xl lg:px-0 md:px-4 sm:text-4xl font-bold">Venue</h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-center px-2 sm:px-0 mb-6">
            <p className="text-xl sm:text-2xl font-bold">Melbourne Connect</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
              <a
                  className="underline text-blue-300 hover:text-blue-500"
                  href="https://maps.app.goo.gl/bXN81M6b6rNDD6nCA"
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
          <div className="w-full flex lg:flex-row flex-col justify-center text-center">
            <div className="w-full lg:w-6/12 lg:p-1 md:px-8 lg:max-w-[600px] h-[300px] sm:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.5715981671797!2d144.96438840000002!3d-37.8000784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64354a5744ae3%3A0xddc00c0dca7ffa97!2sMelbourne%20Connect!5e0!3m2!1sen!2sth!4v1748279277186!5m2!1sen!2sth"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
            <img className="w-full lg:w-6/12 py-2 lg:p-1 md:px-8 lg:max-w-[600px] h-[300px] sm:h-[450px]" src="./melbourne-connect.jpg" alt="Melbourne Connect" />
          </div>
        </div>
        
        {/* How to Get to Melbourne Connect Section */}
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
            {/* Pedestrians */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">🚶</span>
                <button
                  onClick={openMapAppWalking}
                  className="px-3 py-1.5 bg-[#000F46] text-white rounded-lg font-semibold hover:bg-[#000F46]/90 transition-colors text-left"
                >
                  Pedestrians
                </button>
              </h3>
              <p className="text-gray-700">
                Pedestrian access is available from <strong>Swanston Street</strong> and <strong>Cardigan Street</strong>.
              </p>
            </div>
            
            {/* Trams */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">🚃</span>
                <a
                  href="https://yarratrams.com.au/route-guides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#000F46] text-white rounded-lg font-semibold hover:bg-[#000F46]/90 transition-colors inline-block"
                >
                  Trams
                </a>
              </h3>
              <p className="text-gray-700 mb-2">
                Trams run along Swanston Street. Get off at <strong>Melbourne Uni station</strong>.
              </p>
              <p className="text-gray-700 mb-2">
                Swanston Street tram numbers are: <strong>1, 3, 3a, 5, 6, 16, 64, 67 & 72</strong>.
              </p>
              <p className="text-gray-700">
                <strong>Melbourne Central Station</strong> and <strong>Flinders Street Station</strong> provide links to the outer suburbs of Melbourne.
              </p>
            </div>
            
            {/* Train */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="text-2xl mr-2">🚂</span>
                <a
                  href="https://www.metrotrains.com.au/timetables/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#000F46] text-white rounded-lg font-semibold hover:bg-[#000F46]/90 transition-colors inline-block"
                >
                  Train
                </a>
              </h3>
              <p className="text-gray-700">
                The closest train station is <strong>Parkville station</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Getting to the Forum Section */}
        <div className="w-full mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Inside the Building</h2>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700">
              The Forum is accessible via the <strong>Superfloor (mezzanine level)</strong>.
            </p>
          </div>
          <div className="w-full flex lg:flex-row flex-col gap-6 items-stretch">
            {/* Instructions */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-full">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Step-by-Step Directions</h3>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#000F46] text-white rounded-full flex items-center justify-center font-semibold mr-3">1</span>
                    <span>Enter Melbourne Connect at ground level through the <strong>revolving glass doors at 700 Swanston Street</strong>.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#000F46] text-white rounded-full flex items-center justify-center font-semibold mr-3">2</span>
                    <span>To reach the Superfloor, take the <strong>stairs</strong> or use the <strong>lifts on the right side of the foyer</strong> (press <strong>M</strong> on the lift call button).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#000F46] text-white rounded-full flex items-center justify-center font-semibold mr-3">3</span>
                    <span>At the top of the stairs or upon exiting the lifts, the venue is <strong>immediately to the right of the stairs</strong>.</span>
                  </li>
                </ol>
              </div>
            </div>
            
            {/* Forum Image */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 h-full flex flex-col">
                <img 
                  className="w-full h-full rounded-lg object-cover flex-1" 
                  src="./forum.jpg" 
                  alt="The Forum at Melbourne Connect - OzSE 2026 venue" 
                />
                <p className="text-sm text-gray-600 mt-3 text-center italic">The Forum - OzSE 2026 Venue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parking Section */}
        <div className="w-full mt-12" id="parking">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Parking</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4">🅿️</span>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cardigan House Parking</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Location:</strong> 96 Grattan St, Carlton VIC 3053
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Conveniently located near Melbourne Connect, this is the closest parking option to the venue.
                </p>
                <a
                  href="https://www.aceparking.com.au/find-parking/cardigan-house-96-grattan-street-carlton/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#000F46] hover:text-blue-600 font-semibold underline"
                >
                  View parking rates and more information
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Venue;
