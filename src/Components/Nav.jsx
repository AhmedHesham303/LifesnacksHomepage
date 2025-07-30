import React from "react";
import ReactDOM from "react-dom/client";

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
    <nav className="bg-Foundation-Grey w-full h-22 flex items-center justify-center px-20 py-6 gap-16 text-Foundation-Violet text-sm ">
      <img src="../assets/logo.png" alt="Logo image" />
      <div className="flex gap-4 items-center ">
        {navItems.map((navItem, key) =>
          navItem.name === "Search" ? (
            <img
              src="/public/assets/search-icon.png"
              alt="search-icon"
              className="w-6
              h-6 hover:cursor-pointer"
            />
          ) : (
            <div className="flex items-center gap-1">
              <a key={key} href={navItem.href}>
                {navItem.name}
              </a>
              {(navItem.name === "About us" ||
                navItem.name === "Our Brands") && (
                <a href={navItem.name}>
                  <img
                    src="/public/assets/down-arrow.png"
                    alt="down-arrow-ixon"
                    className="w-6
              h-6 "
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
  );
}

export default Nav;
