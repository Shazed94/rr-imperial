"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { all_Media_Front } from "@/utility/api";
import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Parse from "html-react-parser";

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
        <div className="bg-white p-4 lg:p-8 mv-6 lg:mb-12" id="">
          {allVideos?.map((data, i) => (
            <div key={data.id}>
              <div className="flex flex-col lg:flex-row gap-10">
                <div
                  className={`w-full lg:w-1/2 flex flex-col justify-center ${
                    (i + 1) % 2 == 1 ? "order-1" : "order-2"
                  }`}
                >
                  <h4 className="text-f25 text-[#414042] mb-2">{data.title}</h4>
                  <div className="mt-2">{Parse(`${data?.description}`)}</div>
                </div>
                <div
                  className={`w-full lg:w-1/2 ${
                    (i + 1) % 2 == 1 ? "order-2" : "order-1"
                  }`}
                >
                  <div className="relative">
                    <iframe
                      width="100%"
                      height="300"
                      src={`https://www.youtube.com/embed/${data.videoLink}`}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen=""
                      className="relative z-10"
                    ></iframe>
                    <div className="absolute -top-[14px] -left-[12px] w-full h-full bg-[#ED1C24] z-0"></div>
                  </div>
                </div>
              </div>
              <hr className="h-[3px] bg-[#E6E7E8] my-10" />
            </div>
          ))}
          
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
