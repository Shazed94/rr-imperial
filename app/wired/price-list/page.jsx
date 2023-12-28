"use client";
import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
import { DownloadCloud } from "@/components/SvgComponents";
import WiredMaster from "@/components/Wired/WiredMaster";
import { all_Pricelist_Front } from "@/utility/api";
import React, { useEffect, useState } from "react";

const PriceList = () => {
  const [allPricelist, setAllPricelist] = useState([]);
  const fetchAllPricelist = () => {
    all_Pricelist_Front().then((res) => {
      setAllPricelist(res.data?.price_list);
    });
  };
  console.log(allPricelist[0]);
  useEffect(() => {
    fetchAllPricelist();
  }, []);
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
              <span className="text-[#939598] text-f20 absolute left-0 lg:left-auto lg:right-0 top-20 lg:top-6">
                Download Price List
              </span>
            </div>

            <a
              target="_blank"
              href={`${BACKEND_BASE_URL}${allPricelist[0]?.cable_price_list}`}
              download
              className="flex flex-between items-center bg-[#E6E7E8] px-10 py-1 cursor-pointer hover:bg-[#E71D1D] group transition-colors"
            >
              <div className="text-[#939598] flex-1 group-hover:text-white ">
                Price List 11-07-21
              </div>
              <div>
                <DownloadCloud
                  fill="#939598"
                  className={"w-10 h-10 group-hover:fill-white"}
                />
              </div>
            </a>
          </div>
          <div className="lg:mb-20">
            <div className="flex justify-between relative mb-16 lg:mb-12">
              <div className="after:inline-block after:absolute after:bottom-[6px] after:right-[0px] after:w-[calc(100%-270px)] after:h-[2px] after:bg-[#D46A29] relative flex-1">
                <img src="/img/brand/rr-shramik-logo.png" alt="" />
              </div>
              <span className="text-[#939598] text-f20 absolute left-0 lg:left-auto lg:right-0 top-16 lg:top-0">
                Download Price List
              </span>
            </div>
            <a
              target="_blank"
              href={`${BACKEND_BASE_URL}${allPricelist[0]?.shramik_price_list}`}
              download
              className="flex flex-between items-center bg-[#E6E7E8] px-10 py-1 cursor-pointer hover:bg-[#D46A29] group transition-colors"
            >
              <div className="text-[#939598] flex-1 group-hover:text-white">
                Price List 11-07-21
              </div>
              <div>
                <DownloadCloud
                  fill="#939598"
                  className={"w-10 h-10 group-hover:fill-white"}
                />
              </div>
            </a>
          </div>
        </div>
      </WiredMaster>
      <Footer />
    </div>
  );
};

export default PriceList;
