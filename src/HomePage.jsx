import React from "react";
import Hero from "./HomePage/Hero";
import Agenda from "./HomePage/Agenda";
import RegisterBanner from "./HomePage/RegisterBanner";
import Venue from "./HomePage/Venue";
import Supporters from "./HomePage/Supporters";
import ContactUs from "./HomePage/ContactUs";

function HomePage() {
  return (
    <div>
        <Hero />
        <Agenda />
        <RegisterBanner />
        <Venue />
        <Supporters />
        <ContactUs />
    </div>
  );
}

export default HomePage;