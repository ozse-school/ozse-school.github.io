import React from "react";

function RegisterBanner({id}) {
  return (
    <div className="bg-[#000F46] text-white text-center px-6 py-16 sm:p-32 max-h-[468px] w-full space-y-6" id={id}>
      <p className="text-3xl sm:text-5xl font-bold">Join us</p>
      <p className="text-base sm:text-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <button className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors">
        Register
      </button>
    </div>
  );
}

export default RegisterBanner;
