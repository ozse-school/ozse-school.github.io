import React from "react";
import Hero from "./HomePage/Hero";
import Venue from "./HomePage/Venue";
import Supporters from "./HomePage/Supporters";
import Team from "./HomePage/Team";
import Content from "./HomePage/Content.jsx";

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
      <Supporters id="support" />
      <Team id="team" />
      {/* <ContactUs id="contact" /> */}
    </div>
  );
}

export default HomePage;
