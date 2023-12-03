"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { getAllMedia } from "@/utility/QuillScript";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";

const News = () => {
  const [media, setMedia] = useState([]);
  const fetchAllMedia = () => {
    axios.get(`https://server.rr-imperial.com/api/all-medias`).then((res) => {
      setMedia(res.data?.allNews);
    });
  };

  useEffect(() => {
    fetchAllMedia();
  }, []);

  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-4 lg:p-8 mb-12" id="">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <div className="w-full lg:w-1/2 flex flex-col justify-center order-1">
              <h4 className="text-f25 text-[#414042] mb-2">
                RR Kabel launches new display centre in Tongi
              </h4>
              <div className="mb-3">
                <p className="text-[#6D6E71]">
                  The display center aims to improve and prompt the standard of
                  supply and service of International Quality Cables, said a
                  press release.
                </p>
                <p className="text-[#6D6E71]">
                  Director and CEO of the company Mahboob Hossain Mirdah,
                  Director ANM Manzoor Murshed, Director Ahmed Ashfaqur Rahman,
                  Director AM Ahsanul..
                </p>
              </div>
              <span className="text-[#6D6E71] mb-2">Date: 23-11-2023</span>

              <Link
                href="news/details"
                className="flex items-center text-f20 text-[#E62020] gap-2"
              >
                Read More <MdArrowForward />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 order-2">
              <img src="/img/media/media1.png" alt="" />
            </div>
          </div>
          <hr className="h-[3px] bg-[#E6E7E8] my-10" />
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            <div className="w-full lg:w-1/2 flex flex-col justify-center order-2">
              <h4 className="text-f25 text-[#414042] mb-2">
                RR Kabel launches new display center
              </h4>
              <div className="mb-3">
                <p className="text-[#6D6E71]">
                  RR Kabel has inaugurated another display center at Kaptan
                  Bazar adjacent to Nawabpur of Dhaka to enhance the quality of
                  service and supply of international quality cable.
                </p>
                <p className="text-[#6D6E71]">
                  CEO of the company Mahbub Hossain Mirdah, Director ANM Manzoor
                  ...
                </p>
              </div>
              <span className="text-[#6D6E71] mb-2">Date: 23-11-2023</span>

              <Link
                href="news/details"
                className="flex items-center text-f20 text-[#E62020] gap-2"
              >
                Read More <MdArrowForward />
              </Link>
            </div>
            <div className="w-full lg:w-1/2 order-1">
              <img src="/img/media/media2.png" alt="" />
            </div>
          </div>
          <div className="flex justify-center my-4 lg:my-10 pt-10">
            <Button variant="outlined" size="lg">
              Load More
            </Button>
          </div>
          {/*  */}
          {/* {media.map((news, i) => (
            <div key={i} className="flex gap-10 mb-10">
              <div
                className={`w-1/2 flex flex-col justify-center ${
                  (i + 1) % 2 == 1 ? "order-1" : "order-2"
                }`}
              >
                <h4 className="text-f25 text-[#414042] mb-2">{news?.title}</h4>
                <div className="mb-1">
                  <p className="text-[#6D6E71]">
                    The display center aims to improve and prompt the standard
                    of supply and service of International Quality Cables, said
                    a press release.
                  </p>
                  <p className="text-[#6D6E71]">
                    Director and CEO of the company Mahboob Hossain Mirdah,
                    Director ANM Manzoor Murshed, Director Ahmed Ashfaqur
                    Rahman, Director AM Ahsanul..
                  </p>
                </div>

                <Link
                  href="#"
                  className="flex items-center text-f20 text-[#E62020] gap-2"
                >
                  Read More <MdArrowForward />
                </Link>
              </div>
              <div
                className={`w-1/2 ${(i + 1) % 2 == 1 ? "order-2" : "order-1"}`}
              >
                <img
                  src={`https://server.rr-imperial.com/${news.image}`}
                  alt=""
                />
              </div>
            </div>
          ))} */}
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default News;
