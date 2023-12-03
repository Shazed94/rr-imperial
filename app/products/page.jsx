"use client";
import FeaturedCategory from "@/components/FeaturedCategory";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { ProductHome } from "@/components/LottieComponents";
import QuickNavigation from "@/components/QuickNavigation";
import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

const page = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      {/* <div className="container relative flex items-center bg-[url('/svg/product_category.svg')] bg-cover py-28">
        <h2 className="max-w-[400px] ms-14 text-f34 font-bold text-white leading-tight">
          Reliable <br /> Electrical Cables <br /> for Your Home <br /> and
          Business Needs
        </h2>
        <span className="absolute block h-0.5 right-10 left-16 bottom-20 bg-white"></span>
        <span className="absolute block h-0.5 right-10 left-16 bottom-16 bg-white"></span>
      </div> */}
      <div className="container">
        <ProductHome />
      </div>

      <div className="container max-w-5xl text-center py-6 lg:py-14">
        <h3 className="text-[#E62020] text-f28 lg:text-f38 font-bold uppercase mb-5">
          Product Categories
        </h3>
        <p className="text-black">
          This category includes all the wires and cables necessary for
          residential, commercial and public infrastructures.
        </p>
      </div>

      <div className="container px-4 lg:px-0">
        <div className="relative flex w-full">
          <Input
            type="email"
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
      </div>

      <div className="container pt-20">
        <FeaturedCategory />
      </div>
      <Footer />
      <QuickNavigation />
    </div>
  );
};

export default page;
