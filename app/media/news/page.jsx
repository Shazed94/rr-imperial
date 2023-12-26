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
        <div className="bg-white p-4 lg:p-8 mb-12" id="">
          {allNews?.map((news, i) => (
            <div key={i} className="flex gap-10 mb-10">
              <div
                className={`w-1/2 flex flex-col justify-center ${
                  (i + 1) % 2 == 1 ? "order-1" : "order-2"
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
                className={`w-1/2 ${(i + 1) % 2 == 1 ? "order-2" : "order-1"}`}
              >
                <img src={`${BACKEND_BASE_URL}/${news.image}`} alt="" />
              </div>
            </div>
          ))}
          <div className="flex justify-center my-4 lg:my-10 pt-10">
            {/* <Button variant="outlined" size="lg">
              Load More
            </Button> */}

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

            {/* <LoadMoreButton
              currentPageNum={currentPageNum}
              lastPageNumber={lastPageNumber}
              allNews={allNews}
            /> */}
          </div>
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default News;
