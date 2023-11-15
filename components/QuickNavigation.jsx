"use client";
import gsap from "gsap";
import { useState } from "react";

const QuickNavigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    if (!isSearchOpen) {
      gsap.to("#search-icon", { x: "-200px", duration: 0.5 });
      gsap.to("#search-input", { x: "-200px", opacity: 1, duration: 0.5 });
      setIsSearchOpen(true);
    } else {
      gsap.to("#search-icon", { x: "0px", duration: 0.5 });
      gsap.to("#search-input", { x: "0px", opacity: 0, duration: 0.5 });
      setIsSearchOpen(false);
    }
  };
  return (
    <>
      <div className="fixed top-[25rem] right-0">
        <div className="relative  h-60">
          <div className="group relative -right-16">
            <img
              src={"/svg/triangle.svg"}
              alt=""
              className="relative right-[36px] scale-[60%] group-hover:scale-[70%] transition"
            />
            <img
              src={"/svg/quick_menu.svg"}
              alt=""
              className="absolute top-11 right-[70px] scale-[60%] group-hover:scale-[70%] transition z-10"
            />
          </div>
          <div className="group relative -top-[18px]">
            <img
              src={"/svg/triangle_2.svg"}
              alt=""
              className="absolute -right-7 scale-[60%] group-hover:scale-[70%] transition"
            />
            <img
              src={"/svg/quick_list.svg"}
              alt=""
              className="absolute scale-[60%] top-10 right-1 group-hover:scale-[70%] transition z-10"
            />
          </div>
          <div
            id="search-icon"
            className="group absolute top-[76px] -right-[37px]"
            onClick={handleSearchClick}
          >
            <img
              src={"/svg/triangle_3.svg"}
              alt=""
              className="w-[125px] h-[90px] group-hover:scale-[110%] transition"
            />
            <img
              src={"/svg/quick_search.svg"}
              alt=""
              className="absolute top-[24px] right-[65px] scale-[60%] group-hover:scale-[65%] transition z-10"
            />
          </div>
          <input
            id="search-input"
            type="text"
            placeholder="Search"
            className="absolute top-[41%] -right-[220px] h-[45px] bg-[#fefefe] placeholder:text-gray-500 focus-within:outline-none ps-5"
            style={{ opacity: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default QuickNavigation;
