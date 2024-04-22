'use client'
import Link from "next/link";
import { MdOutlineEventAvailable, MdOutlineMapsHomeWork } from "react-icons/md";
import {
    FaProductHunt,
    FaBookReader,
    FaVideo,
    FaUsers,
    FaUser,
} from "react-icons/fa";
import {
    AiFillContacts,
    AiOutlineFilePdf,
} from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoChevronDownOutline } from "react-icons/io5";
import { BsSliders, BsCalculator, BsLightbulb } from "react-icons/bs";
import { BiNews } from "react-icons/bi";
import { CgEventbrite, CgLogIn } from "react-icons/cg";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { getCookie } from "cookies-next";
import { FiActivity } from "react-icons/fi";

const LinkwithCookies = ({ path, fetchPermissions }) => {
    return (
        <div>
            {getCookie("user_type") == "1" && getCookie("admin_staff") == "0" ? (
                <div>
                    <div className="mb-1 group">
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
                    </div>

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

                    <div className="mb-1 group">
                        <div
                            href="#"
                            className="flex justify-between items-center px-8 py-2 group-[.w-20]/sidebar:px-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                        >
                            <li className="flex items-center">
                                <CgEventbrite className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                <span className="text-base font-bold">Events</span>
                            </li>
                            <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                        </div>
                        <div className="py-3 hidden group-[.selected]:block select-none user-none">
                            <Link
                                href="/admin/events"
                                className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/events" && "bg-[#E71D1D]"
                                    }`}
                            >
                                <MdOutlineEventAvailable className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                <span>All Events</span>
                            </Link>
                            <Link
                                href="/admin/event-years"
                                className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/event-years" && "bg-[#E71D1D] text-white"
                                    }`}
                            >
                                <SlCalender className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                <span className="text-gray-300 flex items-center hover:text-gray-100">
                                    Event Years
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* <Link
            href="/admin/events"
            className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/events" && "bg-[#E71D1D]"
              }`}
          >
            <CgEventbrite className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
            <span className="text-base font-bold">Events</span>
          </Link> */}
                    <Link
                        href="/admin/tv-commercials"
                        className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/tv-commercials" && "bg-[#E71D1D]"
                            }`}
                    >
                        <FaVideo className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                        <span className="text-base font-bold">Tv Commercials</span>
                    </Link>
                    <Link
                        href="/admin/tv-media"
                        className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/tv-medias" && "bg-[#E71D1D]"
                            }`}
                    >
                        <FaVideo className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                        <span className="text-base font-bold">Tv Media</span>
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
                    <ul className="mb-1 group">
                        <div
                            href="#"
                            className="flex justify-between items-center px-8 py-2 group-[.w-20]/sidebar:px-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                        >
                            <li className="flex items-center">
                                <CgEventbrite className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                <span className="text-base font-bold">Regional Offices</span>
                            </li>
                            <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                        </div>
                        <div className="py-3 hidden group-[.selected]:block select-none user-none">
                            <Link
                                href="/admin/divisions"
                                className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/divisions" && "bg-[#E71D1D]"
                                    }`}
                            >
                                <MdOutlineMapsHomeWork className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                <span>All Divisions</span>
                            </Link>
                            <Link
                                href="/admin/regional-offices"
                                className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/regional-offices" && "bg-[#E71D1D] text-white"
                                    }`}
                            >
                                <HiOutlineOfficeBuilding className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                <span className="text-gray-300 flex items-center hover:text-gray-100">
                                    Regional Offices
                                </span>
                            </Link>
                        </div>
                    </ul>
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
                    <Link
                        href="/admin/users-login-activity"
                        className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/users-login-activity" && "bg-[#ED2027]"
                            }`}
                    >
                        <FiActivity className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                        <span className="text-base font-bold">
                            Users Login Activity
                        </span>
                    </Link>
                </div>
            ) : (
                <div>
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
                                            <span className="text-base font-bold">Products</span>
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
                                    <span className="text-base font-bold">Calculator</span>
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
                                <ul className="mb-1 group" key={index}>
                                    <div
                                        href="#"
                                        className="flex justify-between items-center px-8 py-2 group-[.w-20]/sidebar:px-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                                    >
                                        <li className="flex items-center">
                                            <CgEventbrite className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                            <span className="text-base font-bold">Events</span>
                                        </li>
                                        <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                                    </div>
                                    <div className="py-3 hidden group-[.selected]:block select-none user-none">
                                        <Link
                                            href="/admin/events"
                                            className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/events" && "bg-[#E71D1D]"
                                                }`}
                                        >
                                            <MdOutlineEventAvailable className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                            <span>All Events</span>
                                        </Link>
                                        <Link
                                            href="/admin/event-years"
                                            className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/event-years" && "bg-[#E71D1D] text-white"
                                                }`}
                                        >
                                            <SlCalender className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                            <span className="text-gray-300 flex items-center hover:text-gray-100">
                                                Event Years
                                            </span>
                                        </Link>
                                    </div>
                                </ul>
                            )
                    )}
                    {fetchPermissions?.map(
                        (data, index) =>
                            data?.permission_id == "15" && (
                                <Link
                                    key={index}
                                    href="/admin/tv-commercials"
                                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/tv-commercials" && "bg-[#E71D1D]"
                                        }`}
                                >
                                    <FaVideo className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                    <span className="text-base font-bold">
                                        Tv Commercials
                                    </span>
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
                                // <Link
                                //   key={index}
                                //   href="/admin/regional-offices"
                                //   className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/regional-offices" && "bg-[#E71D1D]"
                                //     }`}
                                // >
                                //   <HiOfficeBuilding className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                //   <span className="text-base font-bold">
                                //     Regional Offices
                                //   </span>
                                // </Link>
                                <ul className="mb-1 group" key={index}>
                                    <div
                                        href="#"
                                        className="flex justify-between items-center px-8 py-2 group-[.w-20]/sidebar:px-2 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.active]:bg-[#222338] group-[.active]:text-white group-[.selected]:text-gray-50 cursor-pointer sidebar-dropdown-toggle"
                                    >
                                        <li className="flex items-center">
                                            <CgEventbrite className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                            <span className="text-base font-bold">Regional Offices</span>
                                        </li>
                                        <IoChevronDownOutline className="ms-auto group-[.selected]:rotate-180" />
                                    </div>
                                    <div className="py-3 hidden group-[.selected]:block select-none user-none">
                                        <Link
                                            href="/admin/divisions"
                                            className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/divisions" && "bg-[#E71D1D]"
                                                }`}
                                        >
                                            <MdOutlineEventAvailable className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                            <span>All Divisions</span>
                                        </Link>
                                        <Link
                                            href="/admin/regional-offices"
                                            className={`text-gray-300 flex items-center hover:text-gray-100 hover:bg-[#EA3C3C] mb-2 gap-4 px-8 py-2 ${path == "/admin/regional-offices" && "bg-[#E71D1D] text-white"
                                                }`}
                                        >
                                            <SlCalender className="me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                            <span className="text-gray-300 flex items-center hover:text-gray-100">
                                                Regional Offices
                                            </span>
                                        </Link>
                                    </div>
                                </ul>
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
                                    <span className="text-base font-bold">Download User</span>
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
                    {fetchPermissions?.map(
                        (data, index) =>
                            data?.permission_id == "16" && (
                                <Link
                                    key={index}
                                    href="/admin/users-login-activity"
                                    className={`flex items-center px-8 py-2 mb-1 text-gray-300 hover:bg-[#EA3C3C] hover:text-gray-100 group-[.w-20]/sidebar:px-2 group-[.w-20]/sidebar:justify-center group-[.selected]:text-gray-50 cursor-pointer transition-colors duration-300 ${path == "/admin/users-login-activity" && "bg-[#ED2027]"
                                        }`}
                                >
                                    <FiActivity className=" me-4 text-f22 group-[.w-20]/sidebar:me-0" />
                                    <span className="text-base font-bold">
                                        Users Login Activity
                                    </span>
                                </Link>
                            )
                    )}
                </div>
            )}
        </div>
    )
}

export default LinkwithCookies