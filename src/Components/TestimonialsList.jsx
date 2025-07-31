import React from "react";
import Testimonial from "./Testimonial";
function TestimonialsList() {
  return (
    <section className="bg-secondary-background py-25">
      <h3 className="text-center mb-6 text-white">Testimonials</h3>
      <h2 className="text-6xl text-center mb-12 text-white">
        What our customers say ?
      </h2>
      <ul className="flex justify-center gap-4 items-center">
        <li>
          <Testimonial />
        </li>
        <li>
          <Testimonial isSelected={true} />
        </li>
        <li>
          <Testimonial />
        </li>
      </ul>
    </section>
  );
}

export default TestimonialsList;
