import React from "react";
function OurStory() {
  return (
    <section className="py-25 bg-third-background flex gap-30 px-50">
      <img
        src="/public/assets/OurStory.png"
        alt="our story img"
        className="rounded-4xl"
      />
      <aside className="flex flex-col gap-6">
        <h3>Our Story</h3>
        <h2 className="text-6xl">Life Snacks</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Cursus et pretium tortor
          semper elit sed. Felis odio adipiscing vel cursus tortor diam cursus.
          Et enim sed augue feugiat nunc quis. Lectus posuere elit nec mauris
          nisl. Egestas neque mauris nisl laoreet bibendum facilisis pulvinar
          nam nulla. Amet in neque neque malesuada amet in. Magna nulla turpis
          in molestie. Enim purus sit neque aenean lacus etiam sed.
        </p>
        <button className="btn green-btn w-1/2">Learn more</button>
      </aside>
    </section>
  );
}

export default OurStory;
