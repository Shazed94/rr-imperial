"use client";
import Header from "@/components/Header/Header";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import Footer from "@/components/Footer/Footer";
import ProductsMaster from "@/components/Products/ProductsMaster";
import { useRouter, useSearchParams } from "next/navigation";

const ProductCategory = ({ params }) => {
  let paramName = params.productCategory.replace(/-/g, " ");
  return (
    <div>
      <Header />
      <div className="container relative flex items-center bg-[url('/svg/product_category.svg')] bg-cover py-28">
        <h2 className="max-w-[400px] ms-14 text-f34 font-tahoma-bold text-white leading-tight">
          Reliable <br /> Electrical Cables <br /> for Your Home <br /> and
          Business Needs
        </h2>
        <span className="absolute block h-0.5 right-10 left-16 bottom-20 bg-white"></span>
        <span className="absolute block h-0.5 right-10 left-16 bottom-16 bg-white"></span>
      </div>
      <div className="container max-w-5xl text-center py-14">
        <h3 className="text-[#E62020] text-f38 font-tahoma-bold uppercase ">
          {paramName}
        </h3>
      </div>
      <div className="container ">
        <div className="relative flex w-full ">
          <Input
            type="email"
            className="ps-56 py-6 rounded-2xl !bg-[#F2F5F6] placeholder:text-gray-500 focus:!border focus:!border-[#cdcdcd] focus:!border-t focus-within:outline-none"
            labelProps={{
              className: "hidden",
            }}
            placeholder="Inpur Search Keywords Here"
          />
          <Button
            size="md"
            color="gray"
            className="!absolute left-1 top-1 h-[42px] shadow-none bg-white text-[#6D6E71] rounded-s-lg"
            // containerProps={{
            //   className: "w-20",
            // }}
          >
            Select Category{" "}
            <MdOutlineArrowDropDown className="inline ms-3" size={20} />
          </Button>
        </div>
      </div>
      <div className="container flex flex-wrap justify-between py-12">
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
              params.productCategory === "house-wire-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            }  hover:bg-[#E62020] transition-colors `}
          >
            HOUSE WIRE CABLES
          </button>
        </Link>

        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
              params.productCategory === "low-voltage-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            LOW VOLTAGE CABLES
          </button>
        </Link>

        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
              params.productCategory === "medium-voltage-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            MEDIUM VOLTAGE CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
              params.productCategory === "high-voltage-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            HIGH VOLTAGE CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
              params.productCategory === "fire-survival-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            FIRE SURVIVAL CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
              params.productCategory === "communication-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            COMMUNICATION CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-2 py-3 font-tahoma-regular rounded-xl text-white ${
              params.productCategory === "instrumation-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            INSTRUMENTATION CABLES
          </button>
        </Link>
        <Link href="#">
          <button
            className={`w-40 px-4 py-3 font-tahoma-regular text- rounded-xl text-white ${
              params.productCategory === "overhead-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors`}
          >
            OVERHEAD CABLES
          </button>
        </Link>
      </div>
      <ProductsMaster>
        <div className="">
          <div className="grid grid-cols-3 gap-4 mb-14">
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 my-3 text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>
            <Link href={`${params.productCategory}/details`}>
              <div className="bg-[#F2F5F6] rounded-3xl overflow-hidden">
                <div className="p-6 h-40">
                  <img src={"/svg/wire.svg"} alt="" className="w-full" />
                </div>
                <hr className="bg-white h-[3px]" />
                <div className="px-6 my-3 text-center">
                  NYY Flexible or YY Flexible
                </div>
              </div>
            </Link>

          </div>

          <div className="flex justify-center items-center gap-4 mb-14">
            <div className="w-10 h-10 bg-[#E62020] flex justify-center items-center text-white">
              1
            </div>
            <div className="w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]">
              2
            </div>
            <div className="w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]">
              3
            </div>
            <div className="w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]">
              4
            </div>
          </div>
        </div>
      </ProductsMaster>

      <Footer />
    </div>
  );
};

export default ProductCategory;
