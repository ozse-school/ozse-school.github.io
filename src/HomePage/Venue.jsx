import React from "react";

function Venue({ id }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-12 space-y-8 px-4 sm:px-0"
      id={id}
    >
      <p className="text-3xl sm:text-4xl font-bold">Venue</p>

      <div className="w-full max-w-[600px] h-[300px] sm:h-[450px]">
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

      <div className="text-center px-2 sm:px-0">
        <p className="text-2xl sm:text-3xl font-bold">Melbourne Connect</p>
        {/* <p className="text-sm sm:text-base mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p> */}
        <a
          className="underline text-blue-300 hover:text-blue-500 block mt-2"
          href="https://maps.app.goo.gl/bXN81M6b6rNDD6nCA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Map
        </a>
      </div>
    </div>
  );
}

export default Venue;
