import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { RRShramikLottie } from "@/components/LottieComponents";
import QuickNavigation from "@/components/QuickNavigation";
import RRShramikProductsComponent from "@/components/RRShramikProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "RR Shramik: Super Enamelled Copper Wire",
  description: "RR Shramik is the first and only super-enamelled copper wire manufacturer in Bangladesh. The company uses 100% imported LME (London Metal Exchange) registered grade “A” copper cathode to manufacture H+ Class (200 Degree) super-enamelled copper wire.",
  keywords:"high-temperature copper wires, electrical copper strips, super enamelled wires, copper wire solutions, durable copper wires"
};


const page = () => {
  return (
    <div>
      <div className="overflow-x-hidden">
        <Header />

        <div className="container">
          <div className=" mb-12">
            <RRShramikLottie />
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
              manufacture  H+ Class (200 Degree) super-enamelled copper wire. RR
              Shramik has been an electrical wire manufacturer with a strong
              presence in the international market for a long time.
            </p>
          </div>

          <RRShramikProductsComponent />

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
                    High-temperature resistance (up to 200 Degree)
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
