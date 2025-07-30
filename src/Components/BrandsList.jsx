import React from "react";
function BrandsList() {
  return (
    <>
      <h2 className="text-6xl text-center mt-25 mb-16">Our Brands</h2>
      <ul className="flex gap-16 justify-center mb-25">
        <li className="flex flex-col gap-6  items-center">
          <div className={`bg-[#C2273E] brand animate-dissolve`}>
            <img src="/public/assets/ScrunchLogo.png" alt="Scrunch Logo" />
          </div>
          <button className="btn green-btn">Learn more</button>
        </li>
        <li className="flex flex-col gap-6  items-center">
          <div className={`bg-[#E8FC5F]  brand animate-dissolve`}>
            <img src="/public/assets/wunderlogo.png" alt="wunder logo" />
          </div>
          <button className="btn green-btn">Learn more</button>
        </li>
        <li className="flex flex-col gap-6 items-center">
          <div className={`bg-[#E8FC5F]  brand animate-dissolve`}>
            <img
              src="/public/assets/BakeAtHome-Logo.png"
              alt="BakeAtHome Logo"
            />
          </div>
          <button className="btn green-btn">Learn more</button>
        </li>
      </ul>
    </>
  );
}

export default BrandsList;
