import React from "react";
function PartnersList() {
  return (
    <section className="py-16 px-25 relative">
      <h2 className="mb-14 text-3xl text-center">Our Partners</h2>
      <ul className="flex justify-center gap-10 items-center">
        <li>
          <img src="/public/assets/partner1.png" alt="partner 1" />
        </li>
        <li>
          <img src="/public/assets/partner1.png" alt="partner 1" />
        </li>
        <li>
          <img src="/public/assets/partner1.png" alt="partner 1" />
        </li>
        <li>
          <img src="/public/assets/partner1.png" alt="partner 1" />
        </li>
        <li>
          <img src="/public/assets/partner1.png" alt="partner 1" />
        </li>
        <li>
          <img src="/public/assets/partner1.png" alt="partner 1" />
        </li>
        <li>
          <img src="/public/assets/partner1.png" alt="partner 1" />
        </li>
      </ul>
      <img
        src="/public/assets/left-black-arrow.svg"
        alt="left arrow"
        className="left-arrow "
      />
      <img
        src="/public/assets/right-black-arrow.svg"
        alt="right arrow"
        className="right-arrow "
      />
    </section>
  );
}

export default PartnersList;
