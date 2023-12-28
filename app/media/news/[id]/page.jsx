"use client";
import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
// import { DownloadIcon } from "@/components/LottieComponents";
import MediaMaster from "@/components/Media/MediaMaster";
import { single_News_Front } from "@/utility/api";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Parse from "html-react-parser";
import moment from "moment";

const NewsDetails = ({ params }) => {
  const [singleNews, setSingleNews] = useState([]);
  const fetchAllMedia = () => {
    single_News_Front(params.id).then((res) => {
      setSingleNews(res.data?.singleNews);
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
          <div className="relative h-[200px] lg:h-[550px] mb-8">
            <Image
              src={`${BACKEND_BASE_URL}/${singleNews.image}`}
              alt=""
              fill
              className="object-fill"
            />
          </div>

          <div className="bg-[#E62020] text-white px-4 lg:px-8 py-1 mb-8 flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <h2 className="text-f20 lg:text-f25">{singleNews?.title}</h2>
            <span className="">
              {moment(singleNews.created_at).format("DD-MM-Y")}
            </span>
          </div>
          <div className="mt-2 mb-12">{Parse(`${singleNews.description}`)}</div>
          <div className="flex justify-center">
            <a
              href={singleNews?.src_link}
              target="_blank"
              className="flex justify-center items-center border-2 border-[#E6E7E8] rounded-lg px-5 py-2"
            >
              <img src="/svg/link_icon.svg" className="w-8 h-8 me-4" />
              <span className="text-f20 text-[#939598]">Source Link</span>
            </a>
          </div>
          {/* <DownloadIcon/> */}
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default NewsDetails;
