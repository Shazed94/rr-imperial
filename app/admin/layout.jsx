"use client";
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  FaProductHunt,
  FaBookReader,
  FaVideo,
  FaUsers,
  FaUser,
} from "react-icons/fa";
import {
  AiFillContacts,
  AiOutlineDashboard,
  AiOutlineFilePdf,
} from "react-icons/ai";
import { IoChevronDownOutline } from "react-icons/io5";
import { BsSliders, BsCalculator, BsLightbulb } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { CgEventbrite } from "react-icons/cg";
import { HiOfficeBuilding } from "react-icons/hi";
import { ImExit } from "react-icons/im";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { admin_logout } from "@/utility/api";
import toast from "react-hot-toast";

const Layout = (props) => {
  const path = usePathname();
  const router = useRouter();
  // start: Sidebar
  const sidebar_toggle = useRef();
  const sidebarRef = useRef();
  const sidebarMenuRef = useRef();
  const rightbar = useRef();

  const handletoggle = () => {
    // sidebarRef.current.classList.toggle("-translate-x-[180px]");
    sidebarRef.current.classList.toggle("active");
    sidebar_toggle.current.classList.toggle("-rotate-180");
    rightbar.current.classList.toggle("active");
    const textItems = sidebarMenuRef.current.querySelectorAll(
      ".sidebar_content span"
    );
    if (sidebarRef.current.classList.contains("w-64")) {
      sidebarRef.current.classList.remove("w-64");
      sidebarRef.current.classList.add("w-20");

      textItems.forEach((text) => {
        text.classList.add("hidden");
        text.classList.remove("block");
      });
    } else {
      sidebarRef.current.classList.remove("w-20");
      sidebarRef.current.classList.add("w-64");
      textItems.forEach((text) => {
        text.classList.remove("hidden");
        text.classList.add("block");
      });
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
  const logoutAdmin = async () => {
    admin_logout().then((res) => {
      if (res.data?.status == 200) {
        deleteCookie("admin_access_token");
        toast.success(res.data.message);
        router.replace("/login");
      }
    });
  };
  let fetchPermissions = localStorage.getItem("user_permission_info");
  return (
    <div className="">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        id="sidebar"
        className="fixed left-0 top-0 w-64 h-full bg-[#a62a2a] border-white border-r-2 z-50 sidebar-menu transition-all duration-500 group/sidebar"
      >
        <div className="h-full ">
          <div className="topbar flex justify-between items-center bg-[#c33030] text-white py-[20px] px-8 border-b-2 border-white mb-[2px] group-[.w-20]/sidebar:py-[9px]">
            <Link
              href="/"
              target="_blank"
              className="logo group-[.w-20]/sidebar:opacity-0 group-[.w-20]/sidebar:w-0 transition-all duration-500"
            >
              {" "}
              RR Imperial{" "}
            </Link>
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
                  href="/admin/dashboard"
                  className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 px-8 py-2 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center ${
                    path == "/admin/dashboard" && "bg-[#E71D1D]"
                  }`}
                >
                  <AiOutlineDashboard className="text-f22 me-4 group-[.w-20]/sidebar:me-0" />
                  <span className="text-base font-bold ">Dashboard</span>
                  {/* <AiOutlineDashboard className="text-xl ms-4 opacity-0 group-[.active]/sidebar:opacity-100 transition-all duration-500" /> */}
                </Link>
              </li>

              {/* <li className="mb-1 group">
                <div
                  href="#"
                  className="flex justify-between items-center px-8 py-2 group-[.w-20]/sidebar:px-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                >
                  <div className="flex items-center">
                    <MdManageAccounts className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Role Management</span>
                  </div>
                  <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                </div>
                <ul className="py-3 hidden group-[.selected]:block select-none user-none">
                  <Link
                    href="/admin/role"
                    className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${
                      path == "/admin/role" && "bg-[#E71D1D]"
                    }`}
                  >
                    <MdAdminPanelSettings className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span>Role</span>
                  </Link>

                  <Link
                    href="/admin/log-history"
                    className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${
                      path == "/admin/log-history" && "bg-[#E71D1D] text-white"
                    }`}
                  >
                    <FaHistory className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-gray-300 flex items-center hover:text-gray-100">
                      Log History
                    </span>
                  </Link>
                </ul>
              </li> */}
              {getCookie("user_type") == "1" &&
              getCookie("admin_staff") == "0" ? (
                <>
                  <li className="mb-1 group">
                    <div
                      href="#"
                      className="flex justify-between items-center px-8 py-2 group-[.w-20]/sidebar:px-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                    >
                      <div className="flex items-center">
                        <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                        <span className="text-base font-bold">Products</span>
                      </div>
                      <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                    </div>
                    <ul className="py-3 hidden group-[.selected]:block select-none user-none">
                      <Link
                        href="/admin/products/product-category"
                        className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${
                          path == "/admin/products/product-category" &&
                          "bg-[#E71D1D]"
                        }`}
                      >
                        <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                        <span>Product Category</span>
                      </Link>
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
                        className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${
                          path == "/admin/products/all-products" &&
                          "bg-[#E71D1D] text-white"
                        }`}
                      >
                        <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                        <span className="text-gray-300 flex items-center hover:text-gray-100">
                          All Products
                        </span>
                      </Link>
                    </ul>
                  </li>
                  <Link
                    href="/admin/sliders"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/sliders" && "bg-[#ED2027]"
                    }`}
                  >
                    <BsSliders className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Slider Elements</span>
                  </Link>
                  <Link
                    href="/admin/calculator"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:text-gray-100 hover:bg-[#EA3C3C] group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/calculator" && "bg-[#E71D1D]"
                    }`}
                  >
                    <BsCalculator className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Calculator</span>
                  </Link>
                  <Link
                    href="/admin/price-list"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:text-gray-100 hover:bg-[#EA3C3C] group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/price-list" && "bg-[#E71D1D]"
                    }`}
                  >
                    <AiOutlineFilePdf className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold"> Price List PDF</span>
                  </Link>
                  <Link
                    href="/admin/news"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/news" && "bg-[#E71D1D]"
                    }`}
                  >
                    <BiNews className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">News</span>
                  </Link>
                  <Link
                    href="/admin/blogs"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/blogs" && "bg-[#E71D1D]"
                    }`}
                  >
                    <FaBookReader className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Blogs</span>
                  </Link>
                  <Link
                    href="/admin/events"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/events" && "bg-[#E71D1D]"
                    }`}
                  >
                    <CgEventbrite className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Events</span>
                  </Link>
                  <Link
                    href="/admin/videos"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/videos" && "bg-[#E71D1D]"
                    }`}
                  >
                    <FaVideo className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Videos</span>
                  </Link>
                  <Link
                    href="/admin/career"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/career" && "bg-[#E71D1D]"
                    }`}
                  >
                    <BsLightbulb className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Career</span>
                  </Link>
                  <Link
                    href="/admin/contact"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/contact" && "bg-[#E71D1D]"
                    }`}
                  >
                    <AiFillContacts className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Contact</span>
                  </Link>
                  <Link
                    href="/admin/regional-offices"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/regional-offices" && "bg-[#E71D1D]"
                    }`}
                  >
                    <HiOfficeBuilding className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">
                      Regional Offices
                    </span>
                  </Link>
                  <Link
                    href="/admin/download-user"
                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                      path == "/admin/download-user" && "bg-[#E71D1D]"
                    }`}
                  >
                    <FaUsers className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Download User</span>
                  </Link>
                </>
              ) : (
                <>
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "2" && (
                        <li key={index} className="mb-1 group">
                          <div
                            href="#"
                            className="flex justify-between items-center px-8 py-2 group-[.w-20]/sidebar:px-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                          >
                            <div className="flex items-center">
                              <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                              <span className="text-base font-bold">
                                Products
                              </span>
                            </div>
                            <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                          </div>
                          <ul className="py-3 hidden group-[.selected]:block select-none user-none">
                            <Link
                              href="/admin/products/product-category"
                              className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${
                                path == "/admin/products/product-category" &&
                                "bg-[#E71D1D]"
                              }`}
                            >
                              <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                              <span>Product Category</span>
                            </Link>
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
                              className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${
                                path == "/admin/products/all-products" &&
                                "bg-[#E71D1D] text-white"
                              }`}
                            >
                              <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                              <span className="text-gray-300 flex items-center hover:text-gray-100">
                                All Products
                              </span>
                            </Link>
                          </ul>
                        </li>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "3" && (
                        <Link
                          key={index}
                          href="/admin/sliders"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/sliders" && "bg-[#ED2027]"
                          }`}
                        >
                          <BsSliders className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">
                            Slider Elements
                          </span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "4" && (
                        <Link
                          key={index}
                          href="/admin/calculator"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:text-gray-100 hover:bg-[#EA3C3C] group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/calculator" && "bg-[#E71D1D]"
                          }`}
                        >
                          <BsCalculator className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">
                            Calculator
                          </span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "5" && (
                        <Link
                          key={index}
                          href="/admin/price-list"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:text-gray-100 hover:bg-[#EA3C3C] group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/price-list" && "bg-[#E71D1D]"
                          }`}
                        >
                          <AiOutlineFilePdf className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">
                            {" "}
                            Price List PDF
                          </span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "6" && (
                        <Link
                          key={index}
                          href="/admin/news"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/news" && "bg-[#E71D1D]"
                          }`}
                        >
                          <BiNews className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">News</span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "7" && (
                        <Link
                          key={index}
                          href="/admin/blogs"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/blogs" && "bg-[#E71D1D]"
                          }`}
                        >
                          <FaBookReader className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">Blogs</span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "8" && (
                        <Link
                          key={index}
                          href="/admin/events"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/events" && "bg-[#E71D1D]"
                          }`}
                        >
                          <CgEventbrite className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">Events</span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "9" && (
                        <Link
                          key={index}
                          href="/admin/videos"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/videos" && "bg-[#E71D1D]"
                          }`}
                        >
                          <FaVideo className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">Videos</span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "10" && (
                        <Link
                          key={index}
                          href="/admin/career"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/career" && "bg-[#E71D1D]"
                          }`}
                        >
                          <BsLightbulb className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">Career</span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "11" && (
                        <Link
                          key={index}
                          href="/admin/contact"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/contact" && "bg-[#E71D1D]"
                          }`}
                        >
                          <AiFillContacts className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">Contact</span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "12" && (
                        <Link
                          key={index}
                          href="/admin/regional-offices"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/regional-offices" && "bg-[#E71D1D]"
                          }`}
                        >
                          <HiOfficeBuilding className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">
                            Regional Offices
                          </span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "13" && (
                        <Link
                          key={index}
                          href="/admin/download-user"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/download-user" && "bg-[#E71D1D]"
                          }`}
                        >
                          <FaUsers className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">
                            Download User
                          </span>
                        </Link>
                      )
                  )}
                  {JSON.parse(fetchPermissions)?.map(
                    (data, index) =>
                      data?.permission_id == "14" && (
                        <Link
                          key={index}
                          href="/admin/users"
                          className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${
                            path == "/admin/users" && "bg-[#ED2027]"
                          }`}
                        >
                          <FaUser className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-base font-bold">Users</span>
                        </Link>
                      )
                  )}
                </>
              )}

              <li
                className="flex items-center px-8 py-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer"
                onClick={logoutAdmin}
              >
                <ImExit className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
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

export default Layout;
