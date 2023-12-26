import FeaturedCategory from "@/components/FeaturedCategory";
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
          <Image
            src="/img/brand/rr-shramik-logo.png"
            alt="brand-logo"
            width={200}
            height={50}
            className="mx-auto mb-6"
          />
          <div className="px-4 lg:px-12 mb-6 lg:mb-14">
            <p className="text-f16 text-[#58595B] font-normal">
              RR Shramik is the first and only super-enamelled copper wire
              manufacturer in Bangladesh. The company uses 100% imported LME
              (London Metal Exchange) registered grade “A” copper cathode to
              manufacture H Class (180o c) super-enamelled copper wire. RR
              Shramik has been an electrical wire manufacturer with a strong
              presence in the international market for a long time.
            </p>
          </div>
          <div className=" mb-14">
            <h3 className="text-[#D46A29] text-f28 lg:text-f38 font-bold text-center mb-10">
              RR SHRAMIK PRODUCTS
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-4 px-4 lg:px-0 gap-8 mb-8">
              <Link
                href="#"
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
                href="#"
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
                href="#"
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
                href="#"
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
            <div className="grid grid-cols-[repeat(1,minmax(0,1fr))] lg:grid-cols-[repeat(3,minmax(0,320px))] place-content-center px-4 lg:px-0 gap-8 mx-auto">
              <Link
                href="#"
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
                href="#"
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
                href="#"
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
          <div className="bg-[#E6E7E8] py-20 px-4 lg:px-0">
            <h3 className="text-[#D46A29] text-f28 lg:text-f38 font-bold text-center mb-10">
              PRODUCT USP
            </h3>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-5">
                <div>
                  <Image
                    src="/img/brand/coil.png"
                    alt=""
                    width={150}
                    height={150}
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-f18 lg:text-f20 text-[#58595B] font-normal">
                    More suitable with secondary Vernis
                  </p>
                  <p className="text-f18 lg:text-f20 text-[#58595B] font-normal">
                    High abrasion resistance
                  </p>
                  <p className="text-f18 lg:text-f20 text-[#58595B] font-normal">
                    Reduces maintenance cost of machines
                  </p>
                  <p className="text-f18 lg:text-f20 text-[#58595B] font-normal">
                    Increases motor durability
                  </p>
                  <p className="text-f18 lg:text-f20 text-[#58595B] font-normal">
                    High-temperature resistance (up to 180o Celsius)
                  </p>
                </div>
              </div>
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
