import React, { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-[#000F46]" : "bg-transparent"
      } text-white flex justify-between items-center px-8 py-4`}
    >
      <div className="text-xl font-bold">LOGO</div>

      <div className="space-x-6 text-sm font-medium">
        <a href="#about" className="hover:underline">About</a>
        <a href="#agenda" className="hover:underline">Agenda</a>
        <a href="#register" className="hover:underline">Register</a>
        <a href="#supporter" className="hover:underline">Supporter</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
