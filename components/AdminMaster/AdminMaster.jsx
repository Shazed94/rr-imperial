"use client";
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FaChevronCircleRight,
  FaProductHunt,
  FaBookReader,
  FaVideo,
  FaUsers,
} from "react-icons/fa";
import {
  AiOutlineDashboard,
  AiFillContacts,
  AiOutlineFilePdf,
} from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import { BsSliders, BsCalculator, BsLightbulb } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { CgEventbrite } from "react-icons/cg";
import { HiOfficeBuilding } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import "./adminMaster.css";

const AdminMaster = (props) => {
  const myElementsRef = useRef(null);
  const [selectedElements, setSelectedElements] = useState([]);
  // start: Sidebar
  const sidebar_toggle = useRef();
  const sidebarRef = useRef();
  const sidebarMenuRef = useRef();
  const rightbar = useRef();

  const handletoggle = () => {
    // sidebarRef.current.classList.toggle("-translate-x-[180px]");
    sidebar_toggle.current.classList.toggle("-rotate-180");
    rightbar.current.classList.toggle("active");

    if (sidebarRef.current.classList.contains("w-64")) {
      sidebarRef.current.classList.remove("w-64");
      sidebarRef.current.classList.add("w-20");
    } else {
      sidebarRef.current.classList.remove("w-20");
      sidebarRef.current.classList.add("w-64");
    }
  };

  // Dropdown toggle
  useEffect(() => {
    const elements = sidebarMenuRef.current.querySelectorAll(
      ".sidebar-dropdown-toggle"
    );
    const handleClick = (e) => {
      const item = e.currentTarget;
      const parent = item.closest(".group");

      if (parent.classList.contains("selected")) {
        parent.classList.remove("selected");
      } else {
        elements.forEach((i) => {
          if (i !== item) {
            i.closest(".group").classList.remove("selected");
          }
        });
        parent.classList.add("selected");
      }
    };

    elements.forEach((item) => {
      item.addEventListener("click", handleClick);
    });

    // Cleanup the event listeners when the component unmounts
    return () => {
      elements.forEach((item) => {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  // end: Sidebar

  return (
    <div className="">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        id="sidebar"
        className="fixed left-0 top-0 w-64 h-full bg-[#a62a2a] border-white border-r-2 z-50 sidebar-menu transition-all duration-500"
      >
        <div className="h-full ">
          <div className="topbar flex justify-between items-center bg-[#c33030] text-white py-[20px] px-8 border-b-2 border-white mb-[2px]">
            <div className="logo"> RR Imperial </div>
            <div ref={sidebar_toggle}>
              <MdOutlineMenuOpen className="text-xl" onClick={handletoggle} />
            </div>
          </div>
          <div className="">
            <div
              ref={sidebarMenuRef}
              className="sidebar_content list-none py-8 text-[#b5b4bf] transition-all mb-12"
            >
              <li className="mb-1 group">
                <Link
                  href="#"
                  className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#E71D1D] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer "
                >
                  <AiOutlineDashboard className="text-xl me-4" />
                  <span className="text-base font-bold ">Dashboard</span>
                </Link>
              </li>
              <li className="mb-1 group">
                <div
                  href="#"
                  className="flex justify-between items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                >
                  <div className="flex items-center">
                    <FaProductHunt className="me-4" />
                    <span className="text-base font-bold">Products</span>
                  </div>
                  <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                </div>
                <ul className="pl-7 py-5 hidden group-[.selected]:block select-none user-none">
                  <li className="mb-4 flex items-center gap-4 ps-6">
                    <span>
                      <i className="fa-solid fa-circle-info"></i>
                    </span>
                    <Link
                      href="/admin/products/product-category"
                      className="text-gray-300 flex items-center hover:text-gray-100"
                    >
                      Product Category
                    </Link>
                  </li>
                  {/* <li className="mb-4 flex items-center gap-4 ps-6">
                    <span></span>
                    <Link
                      href="/admin/products/all-products"
                      className="text-gray-300 flex items-center hover:text-gray-100"
                    >
                      Table Design
                    </Link>
                  </li> */}
                  <Link
                    href="/admin/products/all-products"
                    className="mb-4 flex items-center gap-4 ps-6"
                  >
                    <span>
                      <i className="fa-solid fa-circle-info"></i>
                    </span>
                    <div className="text-gray-300 flex items-center hover:text-gray-100">
                      All Products
                    </div>
                  </Link>
                </ul>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <BsSliders className=" me-4" />
                <span className="text-base font-bold"> Slider Elements</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <BsCalculator className=" me-4" />
                <span className="text-base font-bold">Calculator</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <AiOutlineFilePdf className=" me-4" />
                <span className="text-base font-bold"> Price List PDF</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <BiNews className=" me-4" />
                <span className="text-base font-bold">News</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <FaBookReader className=" me-4" />
                <span className="text-base font-bold">Blogs</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <CgEventbrite className=" me-4" />
                <span className="text-base font-bold">Events</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <FaVideo className=" me-4" />
                <span className="text-base font-bold">Videos</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <BsLightbulb className=" me-4" />
                <span className="text-base font-bold">Career</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <HiOfficeBuilding className=" me-4" />
                <span className="text-base font-bold">Regional Offices</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <FaUsers className=" me-4" />
                <span className="text-base font-bold">Download User</span>
              </li>
              <li className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#222338] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white  group-[.selected]:text-gray-50 cursor-pointer">
                <ImExit className=" me-4" />
                <span className="text-base font-bold">Logout</span>
              </li>
            </div>
          </div>
        </div>
      </div>

      {/* Rightbar */}
      <div
        ref={rightbar}
        className="w-[calc(100%-256px)] ml-64 min-h-screen transition-all duration-500 rightbar_content"
      >
        {/* <div className="topbar fixed top-0 w-[calc(100%-256px)] transition-all duration-500 z-20">
          <div className="flex justify-between items-center bg-[#353058] py-[28px] px-8 ">
            <div className="flex justify-center items-center gap-6">
              <div className="">
                <button className="hover:brightness-125 transition-all duration-200">
                  <i className="fa-solid fa-filter me-4"></i>
                </button>
                <input
                  type="text"
                  placeholder="search here"
                  className="px-4 py-[16px] w-96 rounded-full text-[#9a97ac] bg-[#2e2c4c] focus:outline-none"
                />
              </div>
              <button className="flex items-center gap-3 text-[#9a97ac] border-[3px] border-[#7499ff] rounded-full px-8 py-3">
                <i className="fa-solid fa-magnifying-glass"></i> <span>Search</span>
              </button>
            </div>
            <div className="flex items-center justify-between ">
              <div className="flex items-center pe-40">
                <div className="flex items-center text-[#908ea0] pe-5 border-r-2 border-[#9a97ac]">
                  <button className="hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-plus me-3"></i>
                    <span className="font-bold">Add Contact</span>
                  </button>
                </div>
                <div className="flex items-center ps-5 space-x-4">
                  <button className="hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-user fa-lg"></i>
                  </button>
                  <button className="hover:brightness-125 transition-all duration-200">
                    <i className="fa-solid fa-message v"></i>
                  </button>
                  <button className="hover:brightness-125 transition-all duration-200">
                    <div className="relative">
                      <i className="fa-solid fa-bell fa-lg"></i>
                      <span className="absolute top-[2px] -right-[2px] w-[10px] h-[10px] rounded-full bg-[#fa72a3]"></span>
                    </div>
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-5 ">
                  <div className="img_wrapper w-12 h-12 ">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                      alt=""
                      className="w-full h-full  rounded-full object-cover "
                    />
                  </div>
                  <span className="text-[#9a97ac] border-r-2 border-[#9a97ac] font-bold pe-5">
                    Nenad Milosevic
                  </span>
                </div>
              </div>
              <button className="hover:brightness-125 transition-all duration-200">
                <i className="fa-solid fa-right-to-bracket ps-5"></i>
              </button>
            </div>
          </div>
        </div> */}
        {props.children}
      </div>
    </div>
  );
};

export default AdminMaster;
