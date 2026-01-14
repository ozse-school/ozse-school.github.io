import React from "react";
import Hero from "./HomePage/Hero";
import Venue from "./HomePage/Venue";
import Supporters from "./HomePage/Supporters";
import Content from "./HomePage/Content.jsx";
import SpeakersSection from "./Speaker.jsx";
import Program from "./HomePage/Program.jsx";
import Team from "./HomePage/Team.jsx";

// import Agenda from "./HomePage/Agenda";
// import RegisterBanner from "./HomePage/RegisterBanner";
// import ContactUs from "./HomePage/ContactUs";

function HomePage() {
  return (
    <div>
      <Hero id="hero" />
      {/* <Agenda id="agenda" /> */}
      {/* <RegisterBanner id="register" /> */}
      <Content id="content" />
      <Venue id="venue" />
      <SpeakersSection id="speaker" />
      <Program id="program" />
      <Supporters id="support" />
      <Team id="team" />
      {/* <ContactUs id="contact" /> */}
    </div>
  );
}

export default HomePage;
