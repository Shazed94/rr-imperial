"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { all_Media_Front } from "@/utility/api";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import moment from "moment";
import Parse from "html-react-parser";
import React, { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Image from "next/image";
import ReactPlayer from "react-player";

const TvMedias = () => {
  const [allTvMedias, setAllTvMedias] = useState([]);
  const [open, setOpen] = useState(false);
  const [embedLink, setEmbedLink] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allTvMedias?.length / productsPerPage);
  const paginatedProducts = allTvMedias?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const handleOpen = () => setOpen(!open);
  useEffect(() => {
    all_Media_Front("1").then((res) => {
      setAllTvMedias(res.data?.allTvMedias?.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-8 mb-12" id="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {allTvMedias?.map((tvMedia, i) => (
              <div
                key={i}
                onClick={() => {
                  handleOpen();
                  setEmbedLink(tvMedia.videoLink);
                }}
                className="group bg-[#E6E7E8] rounded-2xl p-3 cursor-pointer hover:scale-105 hover:bg-[#ED1D24] transition-all"
              >
                <div className="relative w-full h-56">
                  <Image
                    className="img-thumbnail"
                    fill
                    src={`${BACKEND_BASE_URL}${tvMedia?.thumbnail}`}
                    alt="Thumbnail"
                  />
                </div>

                <div className=" p-4 flex flex-col justify-between ">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      {tvMedia?.title}
                    </h4>
                    <h6 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      {moment(tvMedia.created_at).format("Y")}
                    </h6>
                  </div>
                  <h4 className="text-[#414042] group-hover:text-white text-f25 font-bold">
                    {Parse(`${tvMedia?.description?.slice(0, 100)}`)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MediaMaster>
      <Footer />
      <Dialog
        open={open}
        size="lg"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader></DialogHeader>
        <DialogBody className=" overflow-auto">
          {/* <iframe
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${embedLink}?autoplay=1`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe> */}
          <ReactPlayer
            url={`${embedLink}`}
            width="100%"
            height="600px"
            controls={true}
            playing={true} // Autoplay enabled
            muted={true}
          />
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default TvMedias;
