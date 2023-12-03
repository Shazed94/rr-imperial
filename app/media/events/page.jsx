"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Link from "next/link";
import React from "react";
import { MdArrowForward } from "react-icons/md";

const page = () => {
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-4 lg:p-8 mb-6 lg:mb-12" id="">
          <Tabs value="all" className="">
            <TabsHeader
              className="bg-[#D1D3D4] pb-2 rounded-none flex items-center"
              indicatorProps={{
                className: "bg-[#ED1D24] shadow-none rounded-none",
              }}
            >
              <Tab value="all" className="shadow-none text-white py-3">
                All
              </Tab>
              <Tab value="2020" className="shadow-none text-white py-3">
                2020
              </Tab>
              <Tab value="2021" className="shadow-none text-white py-3">
                2021
              </Tab>
              <Tab value="2022" className="shadow-none text-white py-3">
                2022
              </Tab>
              <Tab value="2023" className="shadow-none text-white py-3">
                2023
              </Tab>
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              <TabPanel value={"all"} className="pt-4 px-0">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
                  <Link href="events/details">
                    <div className="group bg-[#E6E7E8] rounded-2xl p-3 hover:scale-105 hover:bg-[#ED1D24] transition-all">
                      <img
                        src="/img/media/event.png"
                        alt=""
                        className="w-full"
                      />
                      <div className="p-4 flex flex-col justify-between ">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-[#ED1D24] group-hover:bg-white text-white group-hover:text-[#ED1D24] rounded-md flex flex-col justify-center items-center px-3 py-1 leading-tight ">
                            <span>Oct</span>
                            <span>07</span>
                          </div>
                          <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                            Useful insights on cables used in industrial and...
                          </h4>
                        </div>

                        <p className="text-[#6D6E71] group-hover:text-white">
                          Wires and cables are an indispensable part of the
                          electrical system. They ensure tran...
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link href="events/details">
                    <div className="group bg-[#E6E7E8] rounded-2xl p-3 hover:scale-105 hover:bg-[#ED1D24] transition-all">
                      <img
                        src="/img/media/event.png"
                        alt=""
                        className="w-full"
                      />
                      <div className=" p-4 flex flex-col justify-between ">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-[#ED1D24] group-hover:bg-white text-white group-hover:text-[#ED1D24] rounded-md flex flex-col justify-center items-center px-3 py-1 leading-tight ">
                            <span>Oct</span>
                            <span>07</span>
                          </div>
                          <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                            Useful insights on cables used in industrial and...
                          </h4>
                        </div>

                        <p className="text-[#6D6E71] group-hover:text-white">
                          Wires and cables are an indispensable part of the
                          electrical system. They ensure tran...
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link href="events/details">
                    <div className="group bg-[#E6E7E8] rounded-2xl p-3 hover:scale-105 hover:bg-[#ED1D24] transition-all">
                      <img
                        src="/img/media/event.png"
                        alt=""
                        className="w-full"
                      />
                      <div className=" p-4 flex flex-col justify-between ">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-[#ED1D24] group-hover:bg-white text-white group-hover:text-[#ED1D24] rounded-md flex flex-col justify-center items-center px-3 py-1 leading-tight ">
                            <span>Oct</span>
                            <span>07</span>
                          </div>
                          <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                            Useful insights on cables used in industrial and...
                          </h4>
                        </div>

                        <p className="text-[#6D6E71] group-hover:text-white">
                          Wires and cables are an indispensable part of the
                          electrical system. They ensure tran...
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link href="events/details">
                    <div className="group bg-[#E6E7E8] rounded-2xl p-3 hover:scale-105 hover:bg-[#ED1D24] transition-all">
                      <img
                        src="/img/media/event.png"
                        alt=""
                        className="w-full"
                      />
                      <div className=" p-4 flex flex-col justify-between ">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-[#ED1D24] group-hover:bg-white text-white group-hover:text-[#ED1D24] rounded-md flex flex-col justify-center items-center px-3 py-1 leading-tight ">
                            <span>Oct</span>
                            <span>07</span>
                          </div>
                          <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                            Useful insights on cables used in industrial and...
                          </h4>
                        </div>

                        <p className="text-[#6D6E71] group-hover:text-white">
                          Wires and cables are an indispensable part of the
                          electrical system. They ensure tran...
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link href="events/details">
                    <div className="group bg-[#E6E7E8] rounded-2xl p-3 hover:scale-105 hover:bg-[#ED1D24] transition-all">
                      <img
                        src="/img/media/event.png"
                        alt=""
                        className="w-full"
                      />
                      <div className=" p-4 flex flex-col justify-between ">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-[#ED1D24] group-hover:bg-white text-white group-hover:text-[#ED1D24] rounded-md flex flex-col justify-center items-center px-3 py-1 leading-tight ">
                            <span>Oct</span>
                            <span>07</span>
                          </div>
                          <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                            Useful insights on cables used in industrial and...
                          </h4>
                        </div>

                        <p className="text-[#6D6E71] group-hover:text-white">
                          Wires and cables are an indispensable part of the
                          electrical system. They ensure tran...
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link href="events/details">
                    <div className="group bg-[#E6E7E8] rounded-2xl p-3 hover:scale-105 hover:bg-[#ED1D24] transition-all">
                      <img
                        src="/img/media/event.png"
                        alt=""
                        className="w-full"
                      />
                      <div className=" p-4 flex flex-col justify-between ">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-[#ED1D24] group-hover:bg-white text-white group-hover:text-[#ED1D24] rounded-md flex flex-col justify-center items-center px-3 py-1 leading-tight ">
                            <span>Oct</span>
                            <span>07</span>
                          </div>
                          <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                            Useful insights on cables used in industrial and...
                          </h4>
                        </div>

                        <p className="text-[#6D6E71] group-hover:text-white">
                          Wires and cables are an indispensable part of the
                          electrical system. They ensure tran...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="flex justify-center items-center gap-4 my-10">
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
                </div>
              </TabPanel>
              <TabPanel value="2020">2020</TabPanel>
              <TabPanel value="2021">2021</TabPanel>
              <TabPanel value="2022">2022</TabPanel>
              <TabPanel value="2023">2023</TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default page;
