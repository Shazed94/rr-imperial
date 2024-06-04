"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { all_Media_Front } from "@/utility/api";
import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Parse from "html-react-parser";
import ReactPlayer from "react-player";

const Videos = () => {
  const [allVideos, setVideos] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState();
  const [lastPageNumber, setLastPageNumber] = useState();
  const fetchAllMedia = () => {
    all_Media_Front("1").then((res) => {
      setVideos(res.data?.allVideos?.data);
      setCurrentPageNum(res.data?.allVideos?.current_page);
      setLastPageNumber(res.data?.allVideos?.last_page);
    });
  };

  const loadMoreVideos = () => {
    if (currentPageNum != lastPageNumber) {
      var pageNum = currentPageNum + 1;
    }
    all_Media_Front(pageNum).then((res) => {
      setVideos([...allVideos, ...res.data?.allVideos?.data]);
      setCurrentPageNum(pageNum);
    });
  };

  useEffect(() => {
    fetchAllMedia();
  }, []);
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-8 mb-12" id="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {allVideos?.map((data, i) => (
              <div
                key={i}
                onClick={() => {
                  handleOpen();
                  setEmbedLink(tvCommercial.videoLink);
                }}
                className="group bg-[#E6E7E8] rounded-2xl p-3 cursor-pointer hover:scale-105 hover:bg-[#ED1D24] transition-all"
              >
                <div className="relative w-full h-56">
                  {/* <iframe
                      width="100%"
                      height="220"
                      src={`https://www.youtube.com/embed/${data.videoLink}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                      className="relative z-10"
                    ></iframe> */}
                  <ReactPlayer
                    url={`${data.videoLink}`}
                    width="100%"
                    height="220px"
                    controls={true}
                  />
                </div>

                <div className=" p-4 flex flex-col justify-between ">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      {data.title}
                    </h4>
                  </div>
                  <h4 className="text-[#414042] group-hover:text-white text-f25 font-bold">
                    {Parse(`${data?.description}`)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-5 lg:my-10 pt-5 lg:pt-10">
            {currentPageNum != lastPageNumber && (
              <div className="text-center">
                <Button
                  variant="outlined"
                  size="lg"
                  onClick={() => loadMoreVideos()}
                >
                  Load More
                </Button>
              </div>
            )}
          </div>
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default Videos;
