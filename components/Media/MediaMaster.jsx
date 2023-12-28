"use client";
import Link from "next/link";
import QuickNavigation from "../QuickNavigation";
import {
  Blogs,
  Download,
  Events,
  News,
  TvCommercials,
  Videos,
} from "../SvgComponents";
import { usePathname } from "next/navigation";
import { MediaHome } from "../LottieComponents";
import { useEffect, useState } from "react";
import { all_News_Front } from "@/utility/api";

const MediaMaster = (props) => {
  const pathname = usePathname();
  const filteredPathname = pathname.split("/");
  // const [media, setMedia] = useState([]);
  // const fetchAllMedia = () => {
  //   all_News_Front().then((res) => {
  //     setMedia(res.data?.allNews);
  //   });
  // };

  // useEffect(() => {
  //   fetchAllMedia();
  // }, []);
  return (
    <>
      <section className="container">
        <div className="relative" data-aos="zoom-in">
          {/* <img src="/img/who-we-are/who-we-are-cover.png" alt="" className="" /> */}
          <MediaHome />
          {/* <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="absolute right-14 bottom-20 text-right max-w-[550px] text-white text-f38 font-bold"
          >
            Wiring <br /> Your Future with <br />
            Innovative and <br />
            SUSTAINABLE SOLUTIONS
          </h2> */}
        </div>
        <h2 className="text-f38 text-[#ED1D24] font-bold text-center py-8">
          Media
        </h2>
      </section>
      <main className="bg-[#E6E7E8]">
        <section className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 text-white pt-5">
            <Link
              href="/media/news"
              id="news"
              scroll={false}
              className={`flex flex-col items-center hover:bg-white transition rounded-tl-lg rounded-tr-lg px-2 ${
                filteredPathname[2] == "news"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {filteredPathname[2] == "news" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <News fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC]">
                    News
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <News fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    News
                  </span>
                </>
              )}
            </Link>
            <Link
              href="/media/events"
              id="events"
              scroll={false}
              className={`flex flex-col items-center hover:bg-white transition rounded-tl-lg rounded-tr-lg px-2 ${
                filteredPathname[2] == "events"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {filteredPathname[2] == "events" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Events fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC]">
                    Events
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Events fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Events
                  </span>
                </>
              )}
            </Link>
            <Link
              href="/media/blogs"
              id="blogs"
              scroll={false}
              className={`flex flex-col items-center hover:bg-white transition rounded-tl-lg rounded-tr-lg px-2 ${
                filteredPathname[2] == "blogs"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {filteredPathname[2] == "blogs" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Blogs fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC]">
                    Blogs
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Blogs fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Blogs
                  </span>
                </>
              )}
            </Link>
            <Link
              href="/media/tv-commercials"
              id="tvCommercials"
              scroll={false}
              className={`flex flex-col items-center hover:bg-white transition rounded-tl-lg rounded-tr-lg px-2 ${
                filteredPathname[2] == "tv-commercials"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {filteredPathname[2] == "tv-commercials" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <TvCommercials fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC]">
                    Tv Commercials
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <TvCommercials fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Tv Commercials
                  </span>
                </>
              )}
            </Link>
            {/* <Link
              href="/media/download"
              id="download"
              scroll={false}
              className={`flex flex-col items-center hover:bg-white transition rounded-tl-lg rounded-tr-lg px-2 ${
                filteredPathname[2] == "download"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {filteredPathname[2] == "download" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Download fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC]">
                    Downloads
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Download fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Downloads
                  </span>
                </>
              )}
            </Link> */}
            <Link
              href="/media/videos"
              id="videos"
              scroll={false}
              className={`flex flex-col items-center hover:bg-white transition rounded-tl-lg rounded-tr-lg px-2 ${
                filteredPathname[2] == "videos"
                  ? "text-[#ED1D24] bg-white"
                  : "text-[#939598]"
              }  text-f16 font-normal group`}
            >
              {filteredPathname[2] == "videos" ? (
                <>
                  <div className="mt-2 p-3 z-10">
                    <Videos fill="#ED1D24" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center px-1 pt-3 pb-1 border-[#A7A9AC]">
                    Videos
                  </span>
                </>
              ) : (
                <>
                  <div className="border-2 mt-2 p-3 border-[#A7A9AC] rounded-full bg-[#E6E7E8] group-hover:bg-white transition z-10">
                    <Videos fill="#939598" className={"w-10 h-10"} />
                  </div>
                  <span className="w-32 text-center border-2 rounded-lg px-1 pt-[23px] pb-1 border-[#A7A9AC] relative -top-4 min-h-[68px]">
                    Videos
                  </span>
                </>
              )}
            </Link>
          </div>
          <QuickNavigation />
          <div className={``}>{props.children}</div>
        </section>
      </main>
    </>
  );
};

export default MediaMaster;
