'use client'
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";

export function DashboardLinkButton({ link }) {
  return (
    <Link
      href={link}
      className="px-4 py-3 rounded-lg hover:scale-105 transition-all bg-cyan-700 text-white w-[92px]"
    >
      View All
    </Link>
  );
}

export function SearchBoxButton() {
  return (
    <div className="relative flex w-full">
      <Input
        type="text"
        className="ps-44 lg:ps-56 py-6 rounded-2xl !bg-[#F2F5F6]  placeholder:text-gray-500 focus:!border focus:!border-[#cdcdcd] focus:!border-t focus-within:outline-none"
        labelProps={{
          className: "hidden",
        }}
        placeholder="Inpur Search Keywords Here"
      />
      <Button
        size="md"
        color="gray"
        className="!absolute left-1 top-1 h-[42px] px-3 shadow-none bg-white text-[#6D6E71] rounded-s-lg"
        // containerProps={{
        //   className: "w-20",
        // }}
      >
        Select Category{" "}
        <MdOutlineArrowDropDown className="inline ms-3" size={20} />
      </Button>
    </div>
  );
}
