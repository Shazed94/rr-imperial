"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-8 mb-12" id="">
          <div className="grid grid-cols-3 gap-10">
            <Link href="events/details">
              <div className="group bg-[#E6E7E8] rounded-2xl p-3 hover:scale-105 hover:bg-[#ED1D24] transition-all">
                <img src="/img/media/event.png" alt="" className="w-full" />
               
                <div className=" p-4 flex flex-col justify-between ">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      Main Focus
                    </h4>
                    <h6 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      2023
                    </h6>
                  </div>
                  <h4 className="text-[#414042] group-hover:text-white text-f25 font-bold">
                    Useful insights on cables used in industrial and...
                  </h4>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-4 my-10">
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
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default page;
