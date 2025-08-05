import React, { useState } from "react";
function SearchModal({ isModalOpen, setIsModalOpen }) {
  const handelCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`search-modal ${!isModalOpen ? "invisible" : ""}`}>
      <h2 className="text-3xl">What are you looking for ?</h2>
      <section className="flex gap-10 mt-10">
        <div className="flex gap-14  items-center w-full h-12 px-8 py-5 border-1 bg-main-background border-Foundation /Violet/violet-100 rounded-2xl">
          <input type="text" className=" w-full" placeholder="Search Here..." />
          <img
            src="/public/assets/inner-search-icon.svg"
            className=" w-5 h-5"
            alt="search icon"
          />
        </div>

        <button className="btn green-btn">Search</button>
      </section>
      <img
        src="/public/assets/cross-icon.svg"
        alt="cross icon"
        className="cross"
        onClick={handelCloseClick}
      />
    </div>
  );
}

export default SearchModal;
