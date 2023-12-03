"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
// import { DownloadIcon } from "@/components/LottieComponents";
import MediaMaster from "@/components/Media/MediaMaster";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowForward } from "react-icons/md";

const NewsDetails = ({ params }) => {
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-4 lg:p-8 mb-12" id="">
          <div className="relative h-[200px] lg:h-[450px] mb-8">
            <Image
              src="/img/media/news-details.png"
              alt=""
              fill
              className="object-fill"
            />
          </div>

          <div className="bg-[#E62020] text-white px-4 lg:px-8 py-1 mb-8 flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <h2 className="text-f20 lg:text-f25">
              RR Kabel launches new display centre in Tongi
            </h2>
            <span className="">Date: 23-11-2023</span>
          </div>
          <div className="mb-12">
            <p className="text-[#6D6E71] font-bold mb-5">
              RR Kable has inaugurated a display center in Tongi, Gazipur, at
              Ashraf Shetu Shopping Complex.
            </p>
            <p className="text-[#6D6E71]">
              The display center aims to improve and prompt the standard of
              supply and service of International Quality Cables, said a press
              release.
            </p>
            <p className="text-[#6D6E71]">
              Director and CEO of the company Mahboob Hossain Mirdah, Director
              ANM Manzoor Murshed, Director Ahmed Ashfaqur Rahman, Director AM
              Ahsanul Bari, and Director Raghib Hassan were present during the
              inauguration.
            </p>
            <p className="text-[#6D6E71]">
              Md Shohel Rana, in-charge of the Tongi display centre, was also
              present, along with local traders and electricians.
            </p>
            <p className="text-[#6D6E71]">
              Speaking on the occasion, Director and CEO Mahabub Hossain Mirdah
              said, &quot;Beware of fake cables. This is because a counterfeit
              cable is capable of causing many types of accidents, causing
              damage to the country, and its resources.&quot;
            </p>
          </div>
          <div className="flex justify-center">
            <button className="flex justify-center items-center border-2 border-[#E6E7E8] rounded-lg px-5 py-2">
              <img src="/svg/link_icon.svg" className="w-8 h-8 me-4" />
              <span className="text-f20 text-[#939598]">Source Link</span>
            </button>
          </div>
          {/* <DownloadIcon/> */}
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default NewsDetails;
