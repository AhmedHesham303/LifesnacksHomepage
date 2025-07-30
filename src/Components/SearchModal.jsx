import React from "react";
function SearchModal() {
  return (
    <div className="search-modal">
      <h2 className="text-3xl">What are you looking for ?</h2>
      <section className="flex gap-10 mt-10">
        <div className="flex gap-14  items-center w-full h-12 px-8 py-5 border-1 bg-main-background border-main-background rounded-2xl">
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
      />
    </div>
  );
}

export default SearchModal;
