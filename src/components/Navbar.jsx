import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export const scrollToCenter = (id, setIsOpen) => {
  const element = document.getElementById(id);
  if (!element) return;

  const elementRect = element.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const middleScreen = window.innerHeight / 2;
  const elementMiddle = elementRect.height / 2;

  const scrollTo = absoluteElementTop - middleScreen + elementMiddle;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });

  setIsOpen(false);
};

export const scrollToTop = (id, setIsOpen) => {
  const element = document.getElementById(id);
  if (!element) return;

  const elementRect = element.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const navbarHeight = 80; // Approximate navbar height with padding

  const scrollTo = absoluteElementTop - navbarHeight;

  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });

  setIsOpen(false);
};

function MainPageMenu(setIsOpen) {
  return [
    { id: "hero", label: "Home" },
    { id: "speaker", label: "Speakers" },
    { id: "program", label: "Program" },
    { id: "venue", label: "Venue & Parking" },
    { id: "support", label: "Supporters" },
    { id: "team", label: "Organizers" },
    { id: "history", label: "History", to: "/history" },
  ].map(({ id, label, to }) => {
      if(to === undefined) {
        return <button
            key={id}
            onClick={() => (id === "program" || id === "hero" || id === "speaker" || id === "venue") ? scrollToTop(id, setIsOpen) : scrollToCenter(id, setIsOpen)}
            className="px-3 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
        >
          {label}
        </button>
      }
      else{
        return <Link
            key={id}
            to={to}
            onClick={() => setIsOpen(false)}
            className="text-center px-3 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
        >{label}</Link>
      }
  })
}

function OtherPageMenu(setIsOpen) {
  return [
    { id: "home", label: "Home", to: "/" },
    { id: "speaker", label: "Speakers", to: "/#speaker" },
    { id: "program", label: "Program", to: "/#program" },
    { id: "venue", label: "Venue & Parking", to: "/#venue" },
    { id: "support", label: "Supporters", to: "/#support" },
    { id: "team", label: "Organizers", to: "/#team" },
    { id: "history", label: "History", to: "/history" },
  ].map(({ id, label, to }) => (
      <Link
          key={id}
          to={to}
          onClick={() => setIsOpen(false)}
          className="text-center px-3 py-2 hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded"
      >{label}</Link>
  ))
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();

  const { hash} = useLocation()

  useEffect(() => {
    if(hash) {

      const id = hash.replace("/^#/", '').replace("#", '')
      if (id === "program" || id === "hero" || id === "speaker" || id === "venue") {
        scrollToTop(id, setIsOpen);
      } else {
        scrollToCenter(id, setIsOpen);
      }
    }
  }, [hash])


  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 shadow-md transition-colors duration-300 ${
        isTop ? "md:bg-transparent bg-[#000F46] text-white" : "bg-[#000F46] text-white"
      } ${location.pathname !== "/" && "!bg-[#000F46]"}`}
    >
      <div className="flex items-center justify-center max-w-6xl mx-auto relative">
        <button
          className="md:hidden absolute left-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:flex md:space-x-6 md:items-center">
          { location.pathname === "/" ? MainPageMenu(setIsOpen) : OtherPageMenu(setIsOpen) }
          <Link
              to={'https://bookings.events.unimelb.edu.au/event/2dd5ba88-f9ff-4181-9fbd-736af910a5a3/home'}
              className="px-6 py-3 text-sm text-center rounded-full bg-blue-800 border-2 border-blue-400 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors"
          >
            Registration
          </Link>
          <a
              href={'https://www.linkedin.com/company/ozse2026/'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm text-center rounded-full bg-[#0077b5] border-2 border-[#0077b5] text-white font-semibold hover:bg-white hover:text-[#0077b5] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Follow Us
          </a>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden fixed top-10 left-0 w-full ${
          isTop ? "md:bg-transparent bg-[#000F46]" : "bg-[#000F46]/95 backdrop-blur-sm"
        } shadow-lg transform transition-transform duration-300 ease-in-out origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
      >
        <div className="flex flex-col px-4 py-3 space-y-2">
          { location.pathname === "/" ? MainPageMenu(setIsOpen) : OtherPageMenu(setIsOpen) }
          <Link
              to={'https://bookings.events.unimelb.edu.au/event/2dd5ba88-f9ff-4181-9fbd-736af910a5a3/home'}
              className="px-6 py-3 text-sm text-center rounded-full bg-blue-800 border-2 border-blue-400 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors"
          >
            Registration
          </Link>
          <a
              href={'https://www.linkedin.com/company/ozse2026/'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-sm text-center rounded-full bg-[#0077b5] border-2 border-[#0077b5] text-white font-semibold hover:bg-white hover:text-[#0077b5] transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Follow Us
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
