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

function MainPageMenu(setIsOpen) {
  return [
    { id: "hero", label: "Home" },
    { id: "speaker", label: "Speakers" },
    { id: "support", label: "Supporters" },
    { id: "team", label: "Organizers" },
    { id: "history", label: "History", to: "/history" },
  ].map(({ id, label, to }) => {
      if(to === undefined) {
        return <button
            key={id}
            onClick={() => scrollToCenter(id, setIsOpen)}
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
      scrollToCenter(id, setIsOpen)
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
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="text-xl font-bold select-none"></div>

        <button
          className="md:hidden focus:outline-none"
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
          <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=z_NbDvQft0aRdlLFOMIqTX0nBKmpNzJImlI7rIncr7RUNzFOQlEwNTc4OElaSDNVREJXUUtaOVFaVy4u"
              className="px-6 py-3 text-sm text-center rounded-full bg-red-900 border-2 border-red-800 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors"
          >
            Apply for ECR & Spotlight
          </a>
          <Link
              to={'/registration'}
              className="px-6 py-3 text-sm text-center rounded-full bg-blue-800 border-2 border-blue-400 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors"
          >
            Registration
          </Link>
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
          <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=z_NbDvQft0aRdlLFOMIqTX0nBKmpNzJImlI7rIncr7RUNzFOQlEwNTc4OElaSDNVREJXUUtaOVFaVy4u"
              className="px-6 py-3 text-sm text-center rounded-full bg-red-900 border-2 border-red-800 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors"
          >
            Apply for ECR & Spotlight
          </a>
          <Link
              to={'/registration'}
              className="px-6 py-3 text-sm text-center rounded-full bg-blue-800 border-2 border-blue-400 text-white font-semibold hover:bg-white hover:text-[#000F46] transition-colors"
          >
            Registration
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
