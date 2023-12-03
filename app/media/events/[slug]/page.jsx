"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowForward } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-8 mb-12" id="">
          <div className="relative h-[450px] mb-8">
            <Image
              src="/img/media/event_details.png"
              alt=""
              fill
              className="object-fill"
            />
          </div>
          <div className="flex justify-between items-center bg-[#E62020] text-white px-4 py-1 mb-8">
            <h2 className=" text-f25 ">IEEMA RETREAT 2023</h2>
            <div className="flex flex-col justify-center text-right">
              <p>Venue: Head Office</p>
              <p>Date: Oct 18, 2023</p>
            </div>
          </div>

          <div className="mb-12">
            <p className="text-[#6D6E71] font-bold mb-5">
              RR Kabel present as platinum sponsor at the 2nd Edition of the.
              IEEMA RETREAT – MEP. CONSULTANTS MEET held at the Taj convention
              centre Goa. The Meets focus was on green, safe & sustainable
              buildings, current market trends & growth drivers, as well as new
              emerging trends & technologies and was set create a significant
              and meaningful change for the electrical industry.
            </p>
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 rounded-lg border border-[#ccc]">
              <div className="flex justify-center items-center gap-4">
                <img src="/svg/media/photo_link.svg" alt="" className="w-10" />
                <span>Photo Link</span>
              </div>
            </button>
          </div>
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default page;
