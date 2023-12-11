"use client";
import Link from "next/link";
import AdminMaster from "@/components/AdminMaster/AdminMaster";
import {
  FaBookReader,
  FaProductHunt,
  FaVideo,
  FaWindowRestore,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { BiNews } from "react-icons/bi";
import { CgEventbrite } from "react-icons/cg";
import { BsLightbulb } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import {DashboardLinkButton} from "@/components/ButtonComponents";
import { read_card_counts } from "@/utility/api";

const AdminDashboard = () => {
  const [productCount, setProductCount] = useState([]);
  const [news, setNewsCount] = useState([]);
  const [Events, setEvents] = useState([]);
  const [videos, setVideos] = useState([]);
  const [slider, setSlider] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [careers, setCareers] = useState([]);

  const DashboardInfo = async () => {
    await read_card_counts().then((res) => {
      setProductCount(res.data.numOfProducts);
      setNewsCount(res.data.numOfNews);
      setEvents(res.data.numOfEvents);
      setVideos(res.data.numOfVideos);
      setSlider(res.data.numOfSliders);
      setBlogs(res.data.numOfBlogs);
      setContacts(res.data.numOfContacts);
      setCareers(res.data.numOfCareers);
    });
  };

  useEffect(() => {
    DashboardInfo();
  }, []);
  return (
    <div className="p-4">
      {/* <AdminMaster> */}
      <div className="bg-[#E71D1D] text-white rounded-lg px-4 py-3">
        <b>Dashboard</b>
      </div>
      <div className="content grid grid-cols-12 gap-8 pt-10 pb-12 text-[#b1b2b9] p-5">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-lg shadow-lg bg-gray-50 p-5 flex items-center gap-5">
          <FaProductHunt className="text-red-500 text-[70px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl text-gray-800">PRODUCTS</h1>
            <h1 className="font-medium text-4xl text-gray-800">
              {productCount}
            </h1>
            {/* <Link href="/products/all-products" className="px-4 py-3 rounded-lg hover:scale-105 transition-all bg-cyan-700 text-white w-[92px]">
              View All
            </Link> */}
            <DashboardLinkButton link={"products/all-products"} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-lg shadow-lg bg-gray-50 p-5 flex items-center gap-5">
          <FaWindowRestore className="text-red-500 text-[70px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl text-gray-800">SLIDER</h1>
            <h1 className="font-medium text-4xl text-gray-800">{slider}</h1>
            <DashboardLinkButton link={"sliders"} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-lg shadow-lg bg-gray-50 p-5 flex items-center gap-5">
          <BiNews className="text-red-500 text-[70px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl text-gray-800">NEWS</h1>
            <h1 className="font-medium text-4xl text-gray-800">{news}</h1>
            <DashboardLinkButton link={"news"} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-lg shadow-lg bg-gray-50 p-5 flex items-center gap-5">
          <FaBookReader className="text-red-500 text-[70px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl text-gray-800">BLOGS</h1>
            <h1 className="font-medium text-4xl text-gray-800">{blogs}</h1>
            <DashboardLinkButton link={"blogs"} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-lg shadow-lg bg-gray-50 p-5 flex items-center gap-5">
          <CgEventbrite className="text-red-500 text-[70px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl text-gray-800">EVENTS</h1>
            <h1 className="font-medium text-4xl text-gray-800">{Events}</h1>
            <DashboardLinkButton link={"events"} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-lg shadow-lg bg-gray-50 p-5 flex items-center gap-5">
          <FaVideo className="text-red-500 text-[70px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl text-gray-800">VIDEOS</h1>
            <h1 className="font-medium text-4xl text-gray-800">{videos}</h1>
            <DashboardLinkButton link={"videos"} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-lg shadow-lg bg-gray-50 p-5 flex items-center gap-5">
          <BsLightbulb className="text-red-500 text-[70px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl text-gray-800">CAREER</h1>
            <h1 className="font-medium text-4xl text-gray-800">{careers}</h1>
            <DashboardLinkButton link={"career"} />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-lg shadow-lg bg-gray-50 p-5 flex items-center gap-5">
          <MdContactPhone className="text-red-500 text-[70px]" />
          <div className="flex flex-col gap-2">
            <h1 className="font-medium text-2xl text-gray-800">CONTACT</h1>
            <h1 className="font-medium text-4xl text-gray-800">{contacts}</h1>
            <DashboardLinkButton link={"sliders"} />
          </div>
        </div>
      </div>
      {/* </AdminMaster> */}
    </div>
  );
};

export default AdminDashboard;
