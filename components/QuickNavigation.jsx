"use client";
import gsap from "gsap";
import { useState } from "react";
import { RRShramik } from "./SvgComponents";

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
      <div className="hidden lg:block fixed top-[33%] right-0 z-50">
        <div className="relative w-32 h-60">
          <a
            href="/pdf/rr_cable_price_list.pdf"
            className="group relative -right-2"
            download
          >
            <img
              src={"/svg/rr-kabel.svg"}
              width={120}
              height={80}
              alt=""
              className="relative scale-[100%] group-hover:scale-[110%] transition"
            />
        
          </a>
          <div className="group relative top-[24px] -right-2">
            <a href="/pdf/rr_shramik_price_list.pdf" download>
              <img
                src={"/svg/rr-shramik.svg"}
                width={120}
                height={80}
                alt=""
                className="relative scale-[100%] group-hover:scale-[110%] transition"
              />
            </a>
          </div>
          <div
            id="search-icon"
            className="group absolute top-[94px] -right-[10px]"
            onClick={handleSearchClick}
          >
            <img
              src={"/svg/triangle_3.svg"}
              alt=""
              className="w-[145px] h-[100px] scale-[114%] group-hover:scale-[125%] transition"
            />
            <img
              src={"/svg/quick_search.svg"}
              alt=""
              className="absolute top-[24px] right-[65px] scale-[80%] group-hover:scale-[85%] transition z-10"
            />
          </div>
          <input
            id="search-input"
            type="text"
            placeholder="Search"
            className="absolute top-[50%] -right-[205px] h-[46px] w-[244px] bg-[#fefefe] shadow-inner drop-shadow-xl placeholder:text-gray-500 focus-within:outline-none ps-5"
            style={{ opacity: 0 }}
          />
        </div>
      </div>
    </>
  );
};

export default QuickNavigation;
