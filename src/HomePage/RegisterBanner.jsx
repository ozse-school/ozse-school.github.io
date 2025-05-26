import React from "react";

function RegisterBanner() {
  return (
    <div className="bg-[#000F46] text-white text-center p-32 max-h-[468px] w-full space-y-6">
        <p className="text-5xl font-bold text-center"> Join us </p>
        <p className="text-xl"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
         <button className=" px-6 py-3 rounded-full bg-transperent border-2 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors">
            Register
          </button>
    </div>
  );
}

export default RegisterBanner;