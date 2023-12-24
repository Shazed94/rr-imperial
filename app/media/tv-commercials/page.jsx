"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { all_Media_Front } from "@/utility/api";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import moment from "moment";
import Parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import YouTube from "react-youtube";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Image from "next/image";

const TvCommercials = () => {
  const [allTvCommercials, setAllTvCommercials] = useState([]);
  const [open, setOpen] = useState(false);
  const [embedLink, setEmbedLink] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allTvCommercials?.length / productsPerPage);
  const paginatedProducts = allTvCommercials?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    all_Media_Front().then((res) => {
      setAllTvCommercials(res.data?.allTvCommercials);
    });
  }, []);

  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-8 mb-12" id="">
          <div className="grid grid-cols-3 gap-10">
            {allTvCommercials?.map((tvCommercial, i) => (
              <div
                key={i}
                onClick={() => {
                  handleOpen();
                  setEmbedLink(tvCommercial.videoLink);
                }}
                className="group bg-[#E6E7E8] rounded-2xl p-3 cursor-pointer hover:scale-105 hover:bg-[#ED1D24] transition-all"
              >
                <div className="relative w-full h-56">
                  <Image
                    className="img-thumbnail"
                    fill
                    src={`${BACKEND_BASE_URL}${tvCommercial?.thumbnail}`}
                    alt="Thumbnail"
                  />
                </div>

                <div className=" p-4 flex flex-col justify-between ">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      {tvCommercial?.title}
                    </h4>
                    <h6 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      {moment(tvCommercial.created_at).format("Y")}
                    </h6>
                  </div>
                  <h4 className="text-[#414042] group-hover:text-white text-f25 font-bold">
                    {Parse(`${tvCommercial?.description?.slice(0, 100)}`)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="flex justify-center items-center gap-4 my-10">
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
          </div> */}
        </div>
      </MediaMaster>
      <Footer />
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader></DialogHeader>
        <DialogBody className="max-h-[65vh] overflow-auto">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${embedLink}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default TvCommercials;
