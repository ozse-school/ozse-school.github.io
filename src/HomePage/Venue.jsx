import React from "react";

function Venue() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-8">
        <p className="text-4xl font-bold">
            Venue
        </p>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.5715981671797!2d144.96438840000002!3d-37.8000784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64354a5744ae3%3A0xddc00c0dca7ffa97!2sMelbourne%20Connect!5e0!3m2!1sen!2sth!4v1748279277186!5m2!1sen!2sth" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        
        </div>
        <div className="text-center">
            <p className="text-3xl font-bold"> Melborne Connect </p>
            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <a className="underline" href="https://maps.app.goo.gl/bXN81M6b6rNDD6nCA"> Google Map </a>
        </div>

    </div>
  );
}

export default Venue;