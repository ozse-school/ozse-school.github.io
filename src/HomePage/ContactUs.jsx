import React from "react";

function ContactUs() {
  return (
    <div className="bg-[#000F46] p-8 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="md:w-1/2 space-y-4 p-4 md:p-24">
          <p className="text-4xl font-bold">Contact Us</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="md:w-1/2 w-full p-4 md:p-24">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-white text-black"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded bg-white text-black"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded bg-white text-black"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-[#000F46] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
