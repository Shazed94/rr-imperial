"use client";
import Link from "next/link";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
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
import { PiTelevision } from "react-icons/pi";
import { usePathname, useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { admin_logout } from "@/utility/api";
import toast from "react-hot-toast";

const Layout = (props) => {
  const [fetchPermissions, setFetchPermissions] = useState();

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

  useEffect(() => {
    let permissions;
    // Get the value from local storage if it exists
    permissions = JSON.parse(
      localStorage.getItem("user_permission_info") || ""
    );
    setFetchPermissions(permissions);
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

  return (
    <div className="">
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        id="sidebar"
        className="fixed left-0 top-0 w-64 h-full overflow-y-auto bg-[#a62a2a] border-white border-r-2 z-50 sidebar-menu transition-all duration-500 group/sidebar"
      >
        <div className="topbar flex justify-between items-center bg-[#c33030] text-white py-[20px] px-8 border-b-2 border-white mb-[2px] group-[.w-20]/sidebar:py-[9px]">
          <Link
            href="/"
            target="_blank"
            className="logo group-[.w-20]/sidebar:opacity-0 group-[.w-20]/sidebar:w-0 transition-all duration-500"
          >
            {" "}
            RR Imperial{" "}
          </Link>
          <span ref={sidebar_toggle}>
            <MdOutlineMenuOpen className="text-xl" onClick={handletoggle} />
          </span>
        </div>

        <div
          ref={sidebarMenuRef}
          className="sidebar_content list-none py-8 text-[#b5b4bf] transition-all mb-12"
        >
          <li className="mb-1 group">
            <Link

              href="/admin/dashboard"
              className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 px-8 py-2 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center ${path == "/admin/dashboard" && "bg-[#E71D1D]"
                }`}
            >
              <AiOutlineDashboard className="text-f22 me-4 group-[.w-20]/sidebar:me-0" />
              <span className="text-base font-bold ">Dashboard</span>
              {/* <AiOutlineDashboard className="text-xl ms-4 opacity-0 group-[.active]/sidebar:opacity-100 transition-all duration-500" /> */}
            </Link>
          </li>

          {getCookie("user_type") == "1" &&
            getCookie("admin_staff") == "0" ? (
            <>
              <ul className="mb-1 group">
                <div
                  href="#"
                  className="flex justify-between items-center px-8 py-2 group-[.w-20]/sidebar:px-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                >
                  <li className="flex items-center">
                    <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-base font-bold">Products</span>
                  </li>
                  <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                </div>
                <div className="py-3 hidden group-[.selected]:block select-none user-none">
                  <Link

                    href="/admin/products/product-category"
                    className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/products/product-category" &&
                      "bg-[#E71D1D]"
                      }`}
                  >
                    <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span>Product Category</span>
                  </Link>
                  <Link

                    href="/admin/products/all-products"
                    className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/products/all-products" &&
                      "bg-[#E71D1D] text-white"
                      }`}
                  >
                    <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                    <span className="text-gray-300 flex items-center hover:text-gray-100">
                      All Products
                    </span>
                  </Link>
                </div>
              </ul>
              <Link
                href="/admin/sliders"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/sliders" && "bg-[#ED2027]"
                  }`}
              >
                <BsSliders className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Slider Elements</span>
              </Link>
              <Link

                href="/admin/calculator"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:text-gray-100 hover:bg-[#EA3C3C] group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/calculator" && "bg-[#E71D1D]"
                  }`}
              >
                <BsCalculator className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Calculator</span>
              </Link>
              <Link

                href="/admin/price-list"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:text-gray-100 hover:bg-[#EA3C3C] group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/price-list" && "bg-[#E71D1D]"
                  }`}
              >
                <AiOutlineFilePdf className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold"> Price List PDF</span>
              </Link>
              <Link

                href="/admin/news"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/news" && "bg-[#E71D1D]"
                  }`}
              >
                <BiNews className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">News</span>
              </Link>
              <Link

                href="/admin/blogs"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/blogs" && "bg-[#E71D1D]"
                  }`}
              >
                <FaBookReader className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Blogs</span>
              </Link>
              <Link

                href="/admin/events"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/events" && "bg-[#E71D1D]"
                  }`}
              >
                <CgEventbrite className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Events</span>
              </Link>
              <Link

                href="/admin/tv-commercials"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/videos" && "bg-[#E71D1D]"
                  }`}
              >
                <FaVideo className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Tv Commercials</span>
              </Link>
              <Link

                href="/admin/videos"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/videos" && "bg-[#E71D1D]"
                  }`}
              >
                <FaVideo className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Videos</span>
              </Link>
              <Link

                href="/admin/career"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/career" && "bg-[#E71D1D]"
                  }`}
              >
                <BsLightbulb className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Career</span>
              </Link>
              <Link

                href="/admin/contact"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/contact" && "bg-[#E71D1D]"
                  }`}
              >
                <AiFillContacts className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Contact</span>
              </Link>
              <Link

                href="/admin/regional-offices"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/regional-offices" && "bg-[#E71D1D]"
                  }`}
              >
                <HiOfficeBuilding className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">
                  Regional Offices
                </span>
              </Link>
              <Link

                href="/admin/download-user"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/download-user" && "bg-[#E71D1D]"
                  }`}
              >
                <FaUsers className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Download User</span>
              </Link>
              <Link
                href="/admin/users"
                className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/users" && "bg-[#ED2027]"
                  }`}
              >
                <FaUser className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                <span className="text-base font-bold">Users</span>
              </Link>
            </>
          ) : (
            <>
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "2" && (
                    <div key={index} className="mb-1 group">
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
                      <div className="py-3 hidden group-[.selected]:block select-none user-none">
                        <Link
                          href="/admin/products/product-category"
                          className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/products/product-category" &&
                            "bg-[#E71D1D]"
                            }`}
                        >
                          <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span>Product Category</span>
                        </Link>

                        <Link
                          href="/admin/products/all-products"
                          className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/products/all-products" &&
                            "bg-[#E71D1D] text-white"
                            }`}
                        >
                          <FaProductHunt className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                          <span className="text-gray-300 flex items-center hover:text-gray-100">
                            All Products
                          </span>
                        </Link>
                      </div>
                    </div>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "3" && (
                    <Link

                      key={index}
                      href="/admin/sliders"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/sliders" && "bg-[#ED2027]"
                        }`}
                    >
                      <BsSliders className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">
                        Slider Elements
                      </span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "4" && (
                    <Link

                      key={index}
                      href="/admin/calculator"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:text-gray-100 hover:bg-[#EA3C3C] group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/calculator" && "bg-[#E71D1D]"
                        }`}
                    >
                      <BsCalculator className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">
                        Calculator
                      </span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "5" && (
                    <Link

                      key={index}
                      href="/admin/price-list"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:text-gray-100 hover:bg-[#EA3C3C] group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/price-list" && "bg-[#E71D1D]"
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
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "6" && (
                    <Link

                      key={index}
                      href="/admin/news"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/news" && "bg-[#E71D1D]"
                        }`}
                    >
                      <BiNews className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">News</span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "7" && (
                    <Link

                      key={index}
                      href="/admin/blogs"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/blogs" && "bg-[#E71D1D]"
                        }`}
                    >
                      <FaBookReader className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">Blogs</span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "8" && (
                    <Link

                      key={index}
                      href="/admin/events"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/events" && "bg-[#E71D1D]"
                        }`}
                    >
                      <CgEventbrite className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">Events</span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "9" && (
                    <Link

                      key={index}
                      href="/admin/videos"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/videos" && "bg-[#E71D1D]"
                        }`}
                    >
                      <FaVideo className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">Videos</span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "10" && (
                    <Link

                      key={index}
                      href="/admin/career"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/career" && "bg-[#E71D1D]"
                        }`}
                    >
                      <BsLightbulb className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">Career</span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "11" && (
                    <Link

                      key={index}
                      href="/admin/contact"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/contact" && "bg-[#E71D1D]"
                        }`}
                    >
                      <AiFillContacts className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">Contact</span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "12" && (
                    <Link

                      key={index}
                      href="/admin/regional-offices"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/regional-offices" && "bg-[#E71D1D]"
                        }`}
                    >
                      <HiOfficeBuilding className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">
                        Regional Offices
                      </span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "13" && (
                    <Link

                      key={index}
                      href="/admin/download-user"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/download-user" && "bg-[#E71D1D]"
                        }`}
                    >
                      <FaUsers className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                      <span className="text-base font-bold">
                        Download User
                      </span>
                    </Link>
                  )
              )}
              {fetchPermissions?.map(
                (data, index) =>
                  data?.permission_id == "14" && (
                    <Link

                      key={index}
                      href="/admin/users"
                      className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/users" && "bg-[#ED2027]"
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
      {/* Rightbar */}

      <div
        ref={rightbar}
        className="w-[calc(100%-256px)] ml-64 min-h-screen transition-all duration-500 rightbar_content"
      >
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
