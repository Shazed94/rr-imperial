"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import Image from "next/image";
import Parse from "html-react-parser";
import { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import { single_Blog_Front } from "@/utility/api";

const BlogDetails = ({ params }) => {
  const [singleBlog, setSingleBlog] = useState([]);
  const fetchAllMedia = () => {
    single_Blog_Front(params.id).then((res) => {
      setSingleBlog(res.data?.singleBlog);
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
          <div className="relative h-[200px] lg:h-[450px] mb-8">
            <Image
              src={`${BACKEND_BASE_URL}/${singleBlog?.image}`}
              alt=""
              fill
              className="object-fill"
            />
          </div>

          <h2 className="bg-[#E62020] text-white text-f20 lg:text-f25 px-4 lg:px-8 py-1 mb-4 lg:mb-8">
            {singleBlog?.title}
          </h2>
          <div className="mb-12">
            <div className="text-[#6D6E71] mt-2">
              {Parse(`${singleBlog?.description}`)}
            </div>
          </div>
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default BlogDetails;
