import React from "react";
import Hero from "./HomePage/Hero";
import Agenda from "./HomePage/Agenda";
import RegisterBanner from "./HomePage/RegisterBanner";
import Venue from "./HomePage/Venue";
import Supporters from "./HomePage/Supporters";
import ContactUs from "./HomePage/ContactUs";
import Team from "./HomePage/Team";
import Content from "./HomePage/Content.jsx";

function HomePage() {
  return (
    <div>
      <Hero id="hero" />
      {/* <Agenda id="agenda" /> */}
      {/* <RegisterBanner id="register" /> */}
      <Content id="content" />
      <Venue id="venue" />
      <Supporters id="support" />
      <Team id="team" />
      {/* <ContactUs id="contact" /> */}
    </div>
  );
}

export default HomePage;
