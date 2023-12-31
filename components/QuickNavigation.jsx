"use client";
import gsap from "gsap";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { IoSearchSharp } from "react-icons/io5";

const QuickNavigation = () => {
  const router = useRouter();
  const searchRef = useRef();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openSearchMobile, setOpenSearchMobile] = useState(false);

  const handleOpenSearchMobile = () => setOpenSearchMobile(!openSearchMobile);

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

  const getResult = (event) => {
    event.preventDefault();
    router.push(`/search/${searchRef.current.value}`);
  };
  const handleMobileSearch = () => {
    router.push(`/search/${searchRef.current.value}`);
  };

  const triggers = {
    onMouseUp: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
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

          <button
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
          </button>
          <form method="POST" onSubmit={(e) => getResult(e)}>
            <input
              required
              id="search-input"
              type="text"
              placeholder="Search"
              className="absolute top-[50%] -right-[205px] h-[46px] w-[244px] bg-[#fefefe] shadow-inner drop-shadow-xl placeholder:text-gray-500 focus-within:outline-none ps-5"
              style={{ opacity: 0 }}
              ref={searchRef}
            />
          </form>
        </div>
      </div>

      <div className="block lg:hidden fixed bottom-0 left-0 right-0 bg-[#E71D1D] border-t border-white text-4xl z-50">
        <div className="flex justify-between items-center px-4">
          <a
            href="/pdf/rr_cable_price_list.pdf"
            className="group relative -right-2 "
            download
          >
            <p className="text-white text-f18">Kabel Price List</p>
          </a>
          <div className="py-3 h-full px-2 border-r border-l border-white">
            <Image
              src={"/svg/quick_search.svg"}
              alt=""
              width={25}
              height={25}
              className="scale-[80%] group-hover:scale-[85%] transition z-10 "
              onClick={handleOpenSearchMobile}
            />
          </div>

          <Dialog
            open={openSearchMobile}
            handler={handleOpenSearchMobile}
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0.9, y: "500%" },
            }}
          >
            <DialogBody className="relative">
              <form method="POST" onSubmit={(e) => getResult(e)}>
                <input
                  required
                  id="search-input"
                  type="text"
                  placeholder="Search"
                  className="bg-[#fefefe] shadow-inner placeholder:text-gray-500 ps-5 w-full"
                  ref={searchRef}
                />
                <IoSearchSharp
                  className="absolute right-6 top-6 text-f26 "
                  onClick={handleMobileSearch}
                />
              </form>
            </DialogBody>
          </Dialog>

          <a href="/pdf/rr_shramik_price_list.pdf" download>
            <p className="text-white text-f18">Shramik Price List</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default QuickNavigation;
