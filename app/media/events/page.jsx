"use client";
import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
import MediaMaster from "@/components/Media/MediaMaster";
import { all_Media_Front } from "@/utility/api";
import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Parse from "html-react-parser";
import moment from "moment";

const Events = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [allEventsYears, setAllEventsYears] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  // const totalPages = Math.ceil(productInfo?.length / productsPerPage);
  // const paginatedProducts = productInfo?.slice(
  //   (currentPage - 1) * productsPerPage,
  //   currentPage * productsPerPage
  // );

  const handleChangePage = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // const [currentPageNum, setCurrentPageNum] = useState();
  // const [lastPageNumber, setLastPageNumber] = useState();
  const fetchAllMedia = () => {
    all_Media_Front("1").then((res) => {
      setAllEventsYears(res.data?.allEventYears);
      // setCurrentPageNum(res.data?.allEvents?.current_page);
      // setLastPageNumber(res.data?.allEvents?.last_page);
    });
  };

  // const loadMoreEvents = () => {
  //   if (currentPageNum != lastPageNumber) {
  //     var pageNum = currentPageNum + 1;
  //   }
  //   all_Media_Front(pageNum).then((res) => {
  //     setAllEvents([...allEvents, ...res.data?.allEvents?.data]);
  //     setCurrentPageNum(pageNum);
  //   });
  // };
  const result = allEventsYears?.map((eventYearInfo) => {
    return eventYearInfo?.event_info?.map((event) => event);
  });
  console.log(result);
  useEffect(() => {
    fetchAllMedia();

    // const totalPages = Math.ceil(productInfo?.length / productsPerPage);
  }, []);
  return (
    <div>
      <Header />
      <MediaMaster>
        <div className="bg-white p-4 lg:p-8 mb-6 lg:mb-12" id="">
          <Tabs value={6} className="">
            <>
              <TabsHeader
                className="bg-[#D1D3D4] pb-2 rounded-none flex items-center"
                indicatorProps={{
                  className: "bg-[#ED1D24] shadow-none rounded-none",
                }}
              >
                {allEventsYears?.map((eventYear) => (
                  <Tab
                    key={eventYear.id}
                    value={eventYear?.id}
                    className="shadow-none text-white py-3"
                  >
                    {eventYear?.year}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody
                animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                {allEventsYears?.map((eventYearInfo) => (
                  <TabPanel
                    key={eventYearInfo.id}
                    value={eventYearInfo?.id}
                    className="pt-4 px-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10"
                  >
                    {eventYearInfo?.event_info?.map((event) => (
                      <div key={event.id} className="">
                        <Link key={event.id} href={`events/${event.id}`}>
                          <div className="group bg-[#E6E7E8] rounded-2xl h-full p-3 hover:scale-105 hover:bg-[#ED1D24] transition-all">
                            <img
                              src={`${BACKEND_BASE_URL}/${event?.image}`}
                              alt=""
                              className="w-full"
                            />
                            <div className="p-4 flex flex-col justify-between ">
                              <div className="flex items-center gap-4 mb-3">
                                <div className="bg-[#ED1D24] group-hover:bg-white text-white group-hover:text-[#ED1D24] rounded-md flex flex-col justify-center items-center px-3 py-1 leading-tight">
                                  <span>
                                    {moment(event.created_at).format("MMM")}
                                  </span>
                                  <span>
                                    {moment(event.created_at).format("DD")}
                                  </span>
                                </div>
                                <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold truncate">
                                  {event.title}
                                </h4>
                              </div>
                              <div className="mt-2 text-f16 text-[#6D6E71] group-hover:text-white">
                                {Parse(`${event?.description.slice(0, 200)}`)}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabsBody>
            </>
          </Tabs>
          {/* <div className="flex justify-center gap-4">
            <button
              disabled={currentPage == 1}
              className="disabled:text-gray-300"
              onClick={() => handleChangePage(currentPage - 1)}
            >
              Previous Page
            </button>

            {Array.from({ length: totalPages }).map((_, index) => (
              <>
                <button
                  key={index + 1}
                  className={
                    index + 1 === currentPage
                      ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white"
                      : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]"
                  }
                  onClick={() => handleChangePage(index + 1)}
                >
                  {index + 1}
                </button>
              </>
            ))}

            <button
              disabled={currentPage === totalPages}
              className="disabled:text-gray-300"
              onClick={() => handleChangePage(currentPage + 1)}
            >
              Next Page
            </button>
          </div> */}
        </div>
      </MediaMaster>
      <Footer />
    </div>
  );
};

export default Events;
