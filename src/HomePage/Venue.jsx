import React from "react";

function Venue({ id }) {
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
            <a
                className="underline text-blue-300 hover:text-blue-500 block mt-2"
                href="https://maps.app.goo.gl/bXN81M6b6rNDD6nCA"
                target="_blank"
                rel="noopener noreferrer"
            >
              Google Map
            </a>
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
      </div>
    </div>
  );
}

export default Venue;
