"use client";
import { LoadMoreButton } from "@/components/ButtonComponents";
import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { all_Media_Front } from "@/utility/api";
import { Button } from "@material-tailwind/react";
import Parse from "html-react-parser";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";

const News = () => {
  const [allNews, setNews] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState();
  const [lastPageNumber, setLastPageNumber] = useState();
  const fetchAllMedia = () => {
    all_Media_Front("1").then((res) => {
      setNews(res.data?.allNews?.data);
      setCurrentPageNum(res.data?.allNews?.current_page);
      setLastPageNumber(res.data?.allNews?.last_page);
    });
  };

  const loadMoreNews = () => {
    if (currentPageNum != lastPageNumber) {
      var pageNum = currentPageNum + 1;
    }
    all_Media_Front(pageNum).then((res) => {
      setNews([...allNews, ...res.data?.allNews?.data]);
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
        {/* <div className="bg-white p-4 lg:p-8 mb-12" id="">
          {allNews?.map((news, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-10 mb-10">
              <div
                className={`w-full lg:w-1/2 flex flex-col justify-center ${
                  (i + 1) % 2 == 1 ? "order-2 lg:order-1" : "order-2 lg:order-2"
                }`}
              >
                <h4 className="text-f25 text-[#414042] mb-2">{news?.title}</h4>
                <div className="mt-2">
                  {Parse(`${news?.description.slice(0, 400)}`)}
                </div>

                <Link
                  href={`news/${news.id}`}
                  className="flex items-center text-f20 text-[#E62020] gap-2"
                >
                  Read More <MdArrowForward />
                </Link>
              </div>
              <div
                className={`w-full lg:w-1/2 ${
                  (i + 1) % 2 == 1 ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <img src={`${BACKEND_BASE_URL}/${news.image}`} alt="" />
              </div>
            </div>
          ))}
          <div className="flex justify-center my-4 lg:my-10 pt-10">
            {currentPageNum != lastPageNumber && (
              <div className="text-center">
                <Button
                  variant="outlined"
                  size="lg"
                  onClick={() => loadMoreNews()}
                >
                  Load More
                </Button>
              </div>
            )}
          </div>
        </div> */}

        <div className="bg-white p-4 lg:p-8 mb-6 lg:mb-12" id="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 mb-8">
          {allNews?.map((news, i) => (
              <div
                key={i}
                className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 relative cursor-pointer hover:bg-[#ED1D24] transition-all"
              >
                <div className="w-full min-h-[15rem] object-cover">
                  <img
                    src={`${BACKEND_BASE_URL}/${news.image}`}
                    alt=""
                    className=" w-full h-full "
                  />
                </div>

                <div className="bg-white rounded-2xl p-4 flex flex-col justify-between z-20 h-64 absolute bottom-3 left-3 right-3">
                  <h4 className="text-[#414042] text-f20 font-bold mb-3">
                    {news?.title}
                  </h4>

                  <div className="mt-2 text-[#6D6E71]">
                    {Parse(`${news?.description.slice(0, 150)}...`)}
                  </div>

                  <Link
                    href={`news/${news.id}`}
                    className="flex items-center text-f20 text-[#E62020] gap-2"
                  >
                    Read More <MdArrowForward />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {currentPageNum != lastPageNumber && (
            <div className="text-center">
              <Button
                variant="outlined"
                size="lg"
                onClick={() => loadMoreNews()}
              >
                Load More
              </Button>
            </div>
          )}
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default News;
