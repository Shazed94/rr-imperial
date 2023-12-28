"use client";
import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { all_Media_Front } from "@/utility/api";
import { Button } from "@material-tailwind/react";
import Parse from "html-react-parser";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";

const Blogs = () => {
  const [allBlogs, setBlogs] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState();
  const [lastPageNumber, setLastPageNumber] = useState();
  const fetchAllMedia = () => {
    all_Media_Front("1").then((res) => {
      setBlogs(res.data?.allBlogs?.data);
      setCurrentPageNum(res.data?.allBlogs?.current_page);
      setLastPageNumber(res.data?.allBlogs?.last_page);
    });
  };

  const loadMoreBlogs = () => {
    if (currentPageNum != lastPageNumber) {
      var pageNum = currentPageNum + 1;
    }
    all_Media_Front(pageNum).then((res) => {
      setBlogs([...allBlogs, ...res.data?.allBlogs?.data]);
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
        <div className="bg-white p-4 lg:p-8 mb-6 lg:mb-12" id="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10 mb-8">
            {allBlogs?.map((blog) => (
              <div
                key={blog.id}
                className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative"
              >
                <div className="w-full min-h-[15rem] object-cover">
                  <img
                    src={`${BACKEND_BASE_URL}${blog.image}`}
                    alt=""
                    className=" w-full h-full "
                  />
                </div>

                <div className="bg-white rounded-2xl p-4 flex flex-col justify-between z-20 h-64 absolute bottom-3 left-3 right-3">
                  <h4 className="text-[#414042] text-f20 font-bold mb-3">
                    {blog?.title}
                  </h4>

                  <div className="mt-2 text-[#6D6E71]">
                    {Parse(`${blog?.description.slice(0, 150)}...`)}
                  </div>

                  <Link
                    href={`blogs/${blog.id}`}
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
                onClick={() => loadMoreBlogs()}
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

export default Blogs;
