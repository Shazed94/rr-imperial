import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { DownloadCloud } from "@/components/SvgComponents";
import WiredMaster from "@/components/Wired/WiredMaster";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <WiredMaster>
        <div className="bg-white p-4 lg:p-8 py-12">
          <div className="mb-20">
            <div className="flex justify-between relative mb-16 lg:mb-12">
              <div className="after:inline-block after:absolute after:bottom-0 after:right-[0px] after:w-[calc(100%-220px)] after:h-[2px] after:bg-[#E71D1D] relative flex-1">
                <img src="/img/brand/rr-kabel-logo.png" alt="" />
              </div>
              <span className="text-[#939598] text-f20 absolute left-0 lg:right-0 top-20 lg:top-6">
                Download Price List
              </span>
            </div>
            <div className="flex flex-between items-center bg-[#E6E7E8] px-10 py-1 cursor-pointer hover:bg-[#E71D1D] group transition-colors">
              <div className="text-[#939598] flex-1 group-hover:text-white ">
                Price List 11-07-21
              </div>
              <div>
                <DownloadCloud
                  fill="#939598"
                  className={"w-10 h-10 group-hover:fill-white"}
                />
              </div>
            </div>
            <div className="flex flex-between items-center bg-white px-10 py-1 cursor-pointer hover:bg-[#E71D1D] group transition-colors">
              <div className="text-[#939598] flex-1 group-hover:text-white ">
                Price List 11-07-21
              </div>
              <div>
                <DownloadCloud
                  fill="#939598"
                  className={"w-10 h-10 group-hover:fill-white"}
                />
              </div>
            </div>
            <div className="flex flex-between items-center bg-[#E6E7E8] px-10 py-1 cursor-pointer hover:bg-[#E71D1D] group transition-colors">
              <div className="text-[#939598] flex-1 group-hover:text-white ">
                Price List 11-07-21
              </div>
              <div>
                <DownloadCloud
                  fill="#939598"
                  className={"w-10 h-10 group-hover:fill-white"}
                />
              </div>
            </div>
          </div>
          <div className="lg:mb-20">
            <div className="flex justify-between relative mb-16 lg:mb-12">
              <div className="after:inline-block after:absolute after:bottom-[6px] after:right-[0px] after:w-[calc(100%-270px)] after:h-[2px] after:bg-[#D46A29] relative flex-1">
                <img src="/img/brand/rr-shramik-logo.png" alt="" />
              </div>
              <span className="text-[#939598] text-f20 absolute left-0 lg:right-0 top-16 lg:top-6">
                Download Price List
              </span>
            </div>
            <div className="flex flex-between items-center bg-[#E6E7E8] px-10 py-1 cursor-pointer hover:bg-[#D46A29] group transition-colors">
              <div className="text-[#939598] flex-1 group-hover:text-white ">
                Price List 11-07-21
              </div>
              <div>
                <DownloadCloud
                  fill="#939598"
                  className={"w-10 h-10 group-hover:fill-white"}
                />
              </div>
            </div>
            <div className="flex flex-between items-center bg-white px-10 py-1 cursor-pointer hover:bg-[#D46A29] group transition-colors">
              <div className="text-[#939598] flex-1 group-hover:text-white ">
                Price List 11-07-21
              </div>
              <div>
                <DownloadCloud
                  fill="#939598"
                  className={"w-10 h-10 group-hover:fill-white"}
                />
              </div>
            </div>
            <div className="flex flex-between items-center bg-[#E6E7E8] px-10 py-1 cursor-pointer hover:bg-[#D46A29] group transition-colors">
              <div className="text-[#939598] flex-1 group-hover:text-white ">
                Price List 11-07-21
              </div>
              <div>
                <DownloadCloud
                  fill="#939598"
                  className={"w-10 h-10 group-hover:fill-white"}
                />
              </div>
            </div>
          </div>
        </div>
      </WiredMaster>
      <Footer />
    </div>
  );
};

export default page;
