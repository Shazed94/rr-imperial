import { SearchBoxButton } from "@/components/ButtonComponents";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { RRShramik } from "@/components/LottieComponents";
import QuickNavigation from "@/components/QuickNavigation";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const page = () => {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Header />

        <div className="container">
          <div className=" mb-12">
            <RRShramik />
          </div>

          <div className="px-4 lg:px-0 mb-20">
            <h3 className="text-[#D46A29] text-f28 lg:text-f38 font-bold text-center mb-5">
              RR SHRAMIK PRODUCTS
            </h3>
            <div className="px-4 lg:px-12 mb-10 text-center">
              <p className="text-f16 text-[#000] font-normal">
                This category includes all the Copper wires and other Copper
                wire related products that are necessary for industrial products
                manufacturing.
              </p>
            </div>
            <div className="container mb-10">
            <SearchBoxButton />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
              <Link
                 href="/rr-shramik-products/category"
                data-aos="fade-right-150"
                data-aos-delay="600"
                className="group rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/1.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10  text-center uppercase text-f16 font-bold">
                  SUPER ENAMELLED COPPER WIRE <br />{" "}
                  <small>* H Class (1800 C)</small>
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </Link>
              <Link
                href="/rr-shramik-products/category"
                data-aos="fade-right-150"
                data-aos-delay="400"
                className="group rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/2.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  SUPER ENAMELLED COPPER WIRE <br />{" "}
                  <small>* 1-1+ Class (2000 C)</small>
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </Link>
              <Link
                href="/rr-shramik-products/category"
                data-aos="fade-right-150"
                data-aos-delay="200"
                className="group rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/3.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Bare Copper Strips
                  <br /> / Bus Bars
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </Link>
              <Link
                href="/rr-shramik-products/category"
                data-aos="fade-right-150"
                className="group rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/4.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Bunched Paper Covered
                  <br /> Copper Strips
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-[repeat(1,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,320px))] place-content-center gap-8 mx-auto">
              <Link
               href="/rr-shramik-products/category"
                data-aos="fade-left-150"
                data-aos-delay="400"
                className=" group rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/5.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Paper Covered Copper Strips
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </Link>
              <Link
                href="/rr-shramik-products/category"
                data-aos="fade-left-150"
                data-aos-delay="200"
                className="group rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/6.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Cotton Braided Copper Strips
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </Link>
              <Link
                href="/rr-shramik-products/category"
                data-aos="fade-left-150"
                className="group rounded-[20px] overflow-hidden border-2 border-[#D46A29] relative"
              >
                <Image
                  src={"/img/rr-shramik/7.webp"}
                  alt=""
                  className="w-full h-full object-cover"
                  width={250}
                  height={250}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#D46A29] text-white group-hover:text-[#D46A29] z-10 text-center uppercase text-f16 font-bold">
                  Copper Rod
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <QuickNavigation />
    </div>
  );
};

export default page;
