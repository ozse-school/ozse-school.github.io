import React from "react";
import Hero from "./HomePage/Hero";
import Venue from "./HomePage/Venue";
import Supporters from "./HomePage/Supporters";
import Content from "./HomePage/Content.jsx";
import SpeakersSection from "./HomePage/Speakers.jsx";
import Program from "./HomePage/Program.jsx";
import Team from "./HomePage/Team.jsx";

function HomePage() {
  return (
    <div>
      <Hero id="hero" />
      <Content id="content" />
      <SpeakersSection id="speaker" />
      <Program id="program" />
      <Venue id="venue" />
      <Supporters id="support" />
      <Team id="team" />
    </div>
  );
}

export default HomePage;
