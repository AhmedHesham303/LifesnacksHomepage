import React from "react";
import ReactDOM from "react-dom/client";
import SearchModal from "./SearchModal";

const navItems = [
  {
    name: "About us",
    href: "#about",
  },
  {
    name: "Our Brands",
    href: "#our",
  },
  {
    name: "New Arrivals",
    href: "#new",
  },
  {
    name: "Shop",
    href: "#shop",
  },
  {
    name: "Recipes",
    href: "#recipes",
  },
  {
    name: "Find us",
    href: "#find",
  },
  {
    name: "Search",
  },
];
function Nav() {
  console.log("Nav component loaded");
  return (
    <>
      <nav className="bg-main-background w-full h-18 flex items-center justify-center px-20 py-6 gap-16 text-primary text-xs sticky">
        <img src="../assets/logo.png" alt="Logo image" />
        <div className="flex gap-4 items-center ">
          {navItems.map((navItem, key) =>
            navItem.name === "Search" ? (
              <img
                src="/public/assets/search-icon.png"
                alt="search-icon"
                className="w-4
              h-4 hover:cursor-pointer"
              />
            ) : (
              <div className="flex items-center gap-1" key={key}>
                <a href={navItem.href}>{navItem.name}</a>
                {(navItem.name === "About us" ||
                  navItem.name === "Our Brands") && (
                  <a href={navItem.name}>
                    <img
                      src="/public/assets/down-arrow.png"
                      alt="down-arrow-ixon"
                      className="w-4
              h-4 "
                    />
                  </a>
                )}
              </div>
            )
          )}
        </div>
        <div className="flex gap-5">
          <button className="btn ">Careers</button>
          <button className="btn green-btn">Contact Us</button>
        </div>
      </nav>
      <SearchModal />
    </>
  );
}

export default Nav;
