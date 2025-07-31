import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./Nav";
import Hero from "./Hero";
import BrandsList from "./BrandsList";
import OurStory from "./OurStory";
import TestimonialsList from "./TestimonialsList";
import PartnersList from "./PartnersList";
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <BrandsList />
      <OurStory />
      <TestimonialsList />
      <PartnersList />
    </>
  );
}

export default App;
