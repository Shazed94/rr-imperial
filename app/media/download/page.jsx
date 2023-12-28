"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { Button, Input } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-4 lg:p-8 mb-6 lg:mb-12">
          <div className="relative mb-6 lg:mb-12">
            <img src="/img/media/download.png" />
          </div>

          <h6 className="text-f14 mb-2 ">
            Please fill in the details to download our brochures
          </h6>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-6 ">
              <Input
                type="text"
                placeholder="First Name*"
                className="!bg-gray-200 text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Input
                type="text"
                placeholder="Last Name*"
                className="!bg-gray-200 text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Input
                type="email"
                placeholder="Email Address*"
                className="!bg-gray-200 text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Input
                type="text"
                placeholder="Contact Number*"
                className="!bg-gray-200 text-gray-900 h-[60px] shadow-sm border-none placeholder:text-gray-500 focus:border-none focus:shadow-sm"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="col-span-12">
              <div className="w-full lg:w-1/2 ms-auto">
                <Button variant="filled" className="bg-[#E71D1D]" fullWidth>
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default page;
