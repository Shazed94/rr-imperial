"use client";

import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Parse from "html-react-parser";
import moment from "moment";
import { useEffect, useState } from "react";
import { MdArrowForward } from "react-icons/md";
import QuickNavigation from "@/components/QuickNavigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SearchAll = ({ params }) => {
  const [productSearchResult, setProductSearchResult] = useState([]);
  const [productCategorySearchResult, setProductCategorySearchResult] =
    useState([]);
  const [blogSearchResult, setBlogSearchResult] = useState([]);
  const [newsSearchResult, setNewsSearchResult] = useState([]);
  const [videosSearchResult, setVideosSearchResult] = useState([]);
  const [eventsSearchResult, setEventsSearchResult] = useState([]);
  const [tvcommercialsSearchResult, setTvcommercialsSearchResult] = useState(
    []
  );
  const [regionalOfficesSearchResult, setRegionalOfficesSearchResult] =
    useState([]);

  const [loading, setLoading] = useState([]);
  const [visiblePages, setVisiblePages] = useState(4);

  // Product Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(productSearchResult?.length / productsPerPage);
  const paginatedProducts = productSearchResult?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  console.log(totalPages);
  const handleChangePage = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
    if (page > currentPage + visiblePages / 3) {
      setVisiblePages(Math.min(totalPages - page + 1, visiblePages + 4));
    } else if (page < currentPage - visiblePages / 2) {
      setVisiblePages(Math.max(page - 1, 4));
    }
  };

  // Product Category Pagination
  const [currentPageCategory, setCurrentPageCategory] = useState(1);
  const productsPerPageCategory = 8;
  const totalPagesCategory = Math.ceil(
    productCategorySearchResult?.length / productsPerPageCategory
  );
  const paginatedProductsCategory = productCategorySearchResult?.slice(
    (currentPageCategory - 1) * productsPerPageCategory,
    currentPageCategory * productsPerPageCategory
  );
  const handleChangePageCategory = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPagesCategory) {
      setCurrentPageCategory(page);
    }
  };

  // Blog Pagination
  const [currentPageBlog, setCurrentPageBlog] = useState(1);
  const productsPerPageBlog = 8;
  const totalPagesBlog = Math.ceil(
    blogSearchResult?.length / productsPerPageBlog
  );
  const paginatedProductsBlog = blogSearchResult?.slice(
    (currentPageBlog - 1) * productsPerPageBlog,
    currentPageBlog * productsPerPageBlog
  );
  const handleChangePageBlog = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPagesBlog) {
      setCurrentPageBlog(page);
    }
  };

  // News Pagination
  const [currentPageNews, setCurrentPageNews] = useState(1);
  const productsPerPageNews = 8;
  const totalPagesNews = Math.ceil(
    newsSearchResult?.length / productsPerPageNews
  );
  const paginatedProductsNews = newsSearchResult?.slice(
    (currentPageNews - 1) * productsPerPageNews,
    currentPageNews * productsPerPageNews
  );
  const handleChangePageNews = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPagesNews) {
      setCurrentPageNews(page);
    }
  };

  // Videos Pagination
  const [currentPageVideos, setCurrentPageVideos] = useState(1);
  const productsPerPageVideos = 2;
  const totalPagesVideos = Math.ceil(
    videosSearchResult?.length / productsPerPageVideos
  );
  const paginatedProductsVideos = videosSearchResult?.slice(
    (currentPageVideos - 1) * productsPerPageVideos,
    currentPageVideos * productsPerPageVideos
  );
  const handleChangePageVideos = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPagesVideos) {
      setCurrentPageVideos(page);
    }
  };

  // Events Pagination
  const [currentPageEvents, setCurrentPageEvents] = useState(1);
  const productsPerPageEvents = 8;
  const totalPagesEvents = Math.ceil(
    eventsSearchResult?.length / productsPerPageEvents
  );
  const paginatedProductsEvents = eventsSearchResult?.slice(
    (currentPageEvents - 1) * productsPerPageEvents,
    currentPageEvents * productsPerPageEvents
  );
  const handleChangePageEvents = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPagesEvents) {
      setCurrentPageEvents(page);
    }
  };

  // TvCommercials Pagination
  const [currentPageTvCommercial, setCurrentPageTvCommercial] = useState(1);
  const productsPerPageTvCommercial = 8;
  const totalPagesTvCommercial = Math.ceil(
    tvcommercialsSearchResult?.length / productsPerPageTvCommercial
  );
  const paginatedProductsTvCommercial = tvcommercialsSearchResult?.slice(
    (currentPageTvCommercial - 1) * productsPerPageTvCommercial,
    currentPageTvCommercial * productsPerPageTvCommercial
  );
  const handleChangePageTvCommercial = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPagesTvCommercial) {
      setCurrentPageTvCommercial(page);
    }
  };

  // RegionalOffice Pagination
  const [currentPageRegionalOffice, setCurrentPageRegionalOffice] = useState(1);
  const productsPerPageRegionalOffice = 2;
  const totalPagesRegionalOffice = Math.ceil(
    regionalOfficesSearchResult?.length / productsPerPageRegionalOffice
  );
  const paginatedProductsRegionalOffice = regionalOfficesSearchResult?.slice(
    (currentPageRegionalOffice - 1) * productsPerPageRegionalOffice,
    currentPageRegionalOffice * productsPerPageRegionalOffice
  );

  const handleChangePageRegionalOffice = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPagesRegionalOffice) {
      setCurrentPageRegionalOffice(page);
    }
  };

  const renderAllCategories = async () => {
    setLoading(true);
    await axios
      .get(`${BACKEND_BASE_URL}/api/search-whole-site/${params.result}`)
      .then((res) => {
        setLoading(false);
        setProductSearchResult(res.data?.product_search_result);
        setProductCategorySearchResult(
          res.data?.product_category_search_result
        );
        setBlogSearchResult(res.data?.blog_search_result);
        setNewsSearchResult(res.data?.news_search_result);
        setVideosSearchResult(res.data?.videos_search_result);
        setEventsSearchResult(res.data?.event_search_result);
        setTvcommercialsSearchResult(res.data?.tv_commarcial_search_result);
        setRegionalOfficesSearchResult(res.data?.regional_office_search_result);
      });
  };

  useEffect(() => {
    renderAllCategories();
  }, []);
  return (
    <div>
      <Header />
      {!loading &&
        productSearchResult.length == 0 &&
        productCategorySearchResult.length == 0 &&
        blogSearchResult.length == 0 &&
        newsSearchResult.length == 0 &&
        videosSearchResult.length == 0 &&
        eventsSearchResult.length == 0 &&
        tvcommercialsSearchResult.length == 0 &&
        regionalOfficesSearchResult.length == 0 && (
          <div className="min-h-[45vh] text-f38 font-semibold text-red-600 flex justify-center items-center">
            No Result Found
          </div>
        )}

      {loading && (
        <div className="flex justify-center items-center py-40">
          <svg
            class="w-20 h-20 animate-spin text-[#E71D1D]"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
          >
            <path
              d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
              stroke="currentColor"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="text-[#E9E9E9]"
            ></path>
          </svg>
        </div>
      )}

      {!loading && productSearchResult.length > 0 && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-4 lg:px-0">
            {paginatedProducts?.map((data) => (
              <Link
                key={data.id}
                href={`${params.productCategory}/${data.slug}`}
              >
                <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
                  <div className="px-6 h-40 flex justify-between items-center">
                    <img
                      src={`${BACKEND_BASE_URL}/${data.image}`}
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <hr className="bg-white h-[3px]" />
                  <div className="px-6 py-3 text-center group-hover:bg-[#E62020] group-hover:text-white transition-colors">
                    {data?.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {productSearchResult.length > 8 && (
            <div className="flex justify-center gap-4 pt-16 max-w-[80%] lg:w-full overflow-x-auto mx-auto">
              <button
                disabled={currentPage == 1}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPage - 1)}
              >
                <FaChevronLeft className="text-[#A7A9AC] " />
              </button>
              <div className="hidden lg:flex lg:justify-center lg:gap-4">
                {Array.from({ length: totalPages })?.map((_, index) => (
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPage
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                    }
                    onClick={() => handleChangePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex justify-center lg:gap-4 lg:hidden">
                {Array.from({ length: totalPages })?.map(
                  (_, index) =>
                    index + 1 >= currentPage - visiblePages / 3 &&
                    index + 1 <= currentPage + visiblePages / 3 && (
                      <button
                        key={index + 1}
                        className={
                          index + 1 === currentPage
                            ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                            : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                        }
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                )}
              </div>
              <button
                disabled={currentPage === totalPages}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPage + 1)}
              >
                <FaChevronRight className="text-[#A7A9AC]" />
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && productCategorySearchResult.length > 0 && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Product Categories
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-4 lg:px-0">
            {paginatedProductsCategory?.map((data) => (
              <Link
                key={data.id}
                href={`/products/${data?.category_slug}`}
                className="group category_card_1 rounded-[20px] overflow-hidden border-2 border-[#e61616] relative"
              >
                <Image
                  src={`${BACKEND_BASE_URL}/${data?.category_image}`}
                  alt=""
                  className="w-full h-full object-cover"
                  width={284}
                  height={284}
                />
                <span className="absolute bottom-0 left-0 right-0 py-4 bg-[#e61616] text-white group-hover:text-[#e61616] transition text-center uppercase text-f20 font-bold z-10">
                  {data?.category_name}
                  <span className="w-0 group-hover:w-full group-hover:bg-white duration-300 absolute inset-0 transition-all -z-10"></span>
                </span>
              </Link>
            ))}
          </div>
          {productCategorySearchResult.length > 8 && (
            <div className="flex justify-center gap-4 pt-16">
              <button
                disabled={currentPageCategory == 1}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPageCategory - 1)}
              >
                <FaChevronLeft className="text-[#A7A9AC] " />
              </button>

              <div className="hidden lg:flex lg:justify-center lg:gap-4">
                {Array.from({ length: totalPagesCategory })?.map((_, index) => (
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageCategory
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                    }
                    onClick={() => handleChangePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex justify-center lg:gap-4 lg:hidden">
                {Array.from({ length: totalPagesCategory })?.map(
                  (_, index) =>
                    index + 1 >= currentPageCategory - visiblePages / 3 &&
                    index + 1 <= currentPageCategory + visiblePages / 3 && (
                      <button
                        key={index + 1}
                        className={
                          index + 1 === currentPageCategory
                            ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                            : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                        }
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                )}
              </div>

              <button
                disabled={currentPageCategory === totalPagesCategory}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() =>
                  handleChangePageCategory(currentPageCategory + 1)
                }
              >
                <FaChevronRight className="text-[#A7A9AC] " />
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && blogSearchResult.length > 0 && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Blogs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-4 lg:px-0">
            {paginatedProductsBlog?.map((blog) => (
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
                    {blog?.title?.slice(0, 45)}...
                  </h4>

                  <div className="mt-2 text-[#6D6E71]">
                    {Parse(`${blog?.description?.slice(0, 80)}...`)}
                  </div>

                  <Link
                    href={`/media/blogs/${blog.id}`}
                    className="flex items-center text-f20 text-[#E62020] gap-2"
                  >
                    Read More <MdArrowForward />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {blogSearchResult.length > 8 && (
            <div className="flex justify-center gap-4 pt-16">
              <button
                disabled={currentPageBlog == 1}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPageBlog - 1)}
              >
                <FaChevronLeft className="text-[#A7A9AC] " />
              </button>

              <div className="hidden lg:flex lg:justify-center lg:gap-4">
                {Array.from({ length: totalPagesBlog })?.map((_, index) => (
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageBlog
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                    }
                    onClick={() => handleChangePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex justify-center lg:gap-4 lg:hidden">
                {Array.from({ length: totalPagesBlog })?.map(
                  (_, index) =>
                    index + 1 >= currentPageBlog - visiblePages / 3 &&
                    index + 1 <= currentPageBlog + visiblePages / 3 && (
                      <button
                        key={index + 1}
                        className={
                          index + 1 === currentPageBlog
                            ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                            : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                        }
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                )}
              </div>

              <button
                disabled={currentPageBlog === totalPagesBlog}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePageBlog(currentPageBlog + 1)}
              >
                <FaChevronRight className="text-[#A7A9AC] " />
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && newsSearchResult.length > 0 && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            News
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-4 lg:px-0">
            {paginatedProductsNews?.map((news) => (
              <div
                key={news.id}
                className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative"
              >
                <div className="w-full min-h-[15rem] object-cover">
                  <img
                    src={`${BACKEND_BASE_URL}${news.image}`}
                    alt=""
                    className=" w-full h-full "
                  />
                </div>

                <div className="bg-white rounded-2xl p-4 flex flex-col justify-between z-20 h-64 absolute bottom-3 left-3 right-3">
                  <h4 className="text-[#414042] text-f20 font-bold mb-3">
                    {news?.title?.slice(0, 45)}...
                  </h4>

                  <div className="mt-2 text-[#6D6E71]">
                    {Parse(`${news?.description?.slice(0, 80)}...`)}
                  </div>

                  <Link
                    href={`/media/news/${news.id}`}
                    className="flex items-center text-f20 text-[#E62020] gap-2"
                  >
                    Read More <MdArrowForward />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {newsSearchResult.length > 8 && (
            <div className="flex justify-center gap-4 pt-16">
              <button
                disabled={currentPageNews == 1}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPageNews - 1)}
              >
                <FaChevronLeft className="text-[#A7A9AC] " />
              </button>

              <div className="hidden lg:flex lg:justify-center lg:gap-4">
                {Array.from({ length: totalPagesNews })?.map((_, index) => (
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageNews
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                    }
                    onClick={() => handleChangePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex justify-center lg:gap-4 lg:hidden">
                {Array.from({ length: totalPagesNews })?.map(
                  (_, index) =>
                    index + 1 >= currentPageNews - visiblePages / 3 &&
                    index + 1 <= currentPageNews + visiblePages / 3 && (
                      <button
                        key={index + 1}
                        className={
                          index + 1 === currentPageNews
                            ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                            : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                        }
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                )}
              </div>

              <button
                disabled={currentPageNews === totalPagesNews}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePageNews(currentPageNews + 1)}
              >
                <FaChevronRight className="text-[#A7A9AC] " />
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && videosSearchResult.length > 0 && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Videos
          </h2>

          {paginatedProductsVideos?.map((data, i) => (
            <div key={data?.id} className="flex flex-col lg:flex-row gap-10">
              <div
                className={`w-full lg:w-1/2 flex flex-col justify-center ${
                  (i + 1) % 2 == 1 ? "order-1" : "order-2"
                }`}
              >
                <h4 className="text-f25 text-[#414042] mb-2">
                  {data.title?.slice(0, 45)}...
                </h4>
                <div className="mt-2">
                  {Parse(`${data?.description?.slice(0, 100)}...`)}
                </div>
              </div>
              <div
                className={`w-full lg:w-1/2 ${
                  (i + 1) % 2 == 1 ? "order-2" : "order-1"
                }`}
              >
                <div className="relative">
                  <iframe
                    width="100%"
                    height="300"
                    src={`https://www.youtube.com/embed/${data.videoLink}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen=""
                    className="relative z-10"
                  ></iframe>
                  <div className="absolute -top-[14px] -left-[12px] w-full h-full bg-[#ED1C24] z-0"></div>
                </div>
              </div>
            </div>
          ))}
          {videosSearchResult.length > 2 && (
            <div className="flex justify-center gap-4 pt-16">
              <button
                disabled={currentPageVideos == 1}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPageVideos - 1)}
              >
                <FaChevronLeft className="text-[#A7A9AC] " />
              </button>

              <div className="hidden lg:flex lg:justify-center lg:gap-4">
                {Array.from({ length: totalPagesVideos })?.map((_, index) => (
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageVideos
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                    }
                    onClick={() => handleChangePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex justify-center lg:gap-4 lg:hidden">
                {Array.from({ length: totalPagesVideos })?.map(
                  (_, index) =>
                    index + 1 >= currentPageVideos - visiblePages / 3 &&
                    index + 1 <= currentPageVideos + visiblePages / 3 && (
                      <button
                        key={index + 1}
                        className={
                          index + 1 === currentPageVideos
                            ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                            : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                        }
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                )}
              </div>

              <button
                disabled={currentPageVideos === totalPagesVideos}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePageVideos(currentPageVideos + 1)}
              >
                <FaChevronRight className="text-[#A7A9AC] " />
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && eventsSearchResult.length > 0 && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-4 lg:px-0">
            {paginatedProductsEvents?.map((event) => (
              <div
                key={event.id}
                className="bg-[#E6E7E8] rounded-2xl p-3 min-h-[510px] hover:scale-105 transition relative"
              >
                <div className="w-full min-h-[15rem] object-cover">
                  <img
                    src={`${BACKEND_BASE_URL}${event.image}`}
                    alt=""
                    className=" w-full h-full "
                  />
                </div>

                <div className="bg-white rounded-2xl p-4 flex flex-col justify-between z-20 h-64 absolute bottom-3 left-3 right-3">
                  <h4 className="text-[#414042] text-f20 font-bold mb-3">
                    {event?.title?.slice(0, 45)}...
                  </h4>

                  <div className="mt-2 text-[#6D6E71]">
                    {Parse(`${event?.description?.slice(0, 80)}...`)}
                  </div>

                  <Link
                    href={`/media/event/${event.id}`}
                    className="flex items-center text-f20 text-[#E62020] gap-2"
                  >
                    Read More <MdArrowForward />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {eventsSearchResult.length > 8 && (
            <div className="flex justify-center gap-4 pt-16">
              <button
                disabled={currentPageEvents == 1}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPageEvents - 1)}
              >
                <FaChevronLeft className="text-[#A7A9AC] " />
              </button>

              <div className="hidden lg:flex lg:justify-center lg:gap-4">
                {Array.from({ length: totalPagesEvents })?.map((_, index) => (
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageEvents
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                    }
                    onClick={() => handleChangePage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="flex justify-center lg:gap-4 lg:hidden">
                {Array.from({ length: totalPagesEvents })?.map(
                  (_, index) =>
                    index + 1 >= currentPageEvents - visiblePages / 3 &&
                    index + 1 <= currentPageEvents + visiblePages / 3 && (
                      <button
                        key={index + 1}
                        className={
                          index + 1 === currentPageEvents
                            ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                            : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                        }
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                )}
              </div>

              <button
                disabled={currentPageEvents === totalPagesEvents}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePageEvents(currentPageEvents + 1)}
              >
                <FaChevronRight className="text-[#A7A9AC] " />
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && tvcommercialsSearchResult.length > 0 && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Tv Commerceials
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 px-4 lg:px-0">
            {paginatedProductsTvCommercial?.map((tvCommercial, i) => (
              <div
                key={i}
                onClick={() => {
                  handleOpen();
                  setEmbedLink(tvCommercial.videoLink);
                }}
                className="group bg-[#E6E7E8] rounded-2xl p-3 cursor-pointer hover:scale-105 hover:bg-[#ED1D24] transition-all"
              >
                <div className="relative w-full h-56">
                  <Image
                    className="img-thumbnail"
                    fill
                    src={`${BACKEND_BASE_URL}${tvCommercial?.thumbnail}`}
                    alt="Thumbnail"
                  />
                </div>

                <div className=" p-4 flex flex-col justify-between ">
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <h4 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      {tvCommercial?.title}
                    </h4>
                    <h6 className="text-[#414042] group-hover:text-white text-f18 font-bold">
                      {moment(tvCommercial.created_at)?.format("Y")}
                    </h6>
                  </div>
                  <h4 className="text-[#414042] group-hover:text-white text-f25 font-bold">
                    {Parse(`${tvCommercial?.description?.slice(0, 100)}`)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          {tvcommercialsSearchResult.length > 8 && (
            <div className="flex justify-center gap-4 pt-16">
              <button
                disabled={currentPageTvCommercial == 1}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPageTvCommercial - 1)}
              >
                <FaChevronLeft className="text-[#A7A9AC] " />
              </button>

              <div className="hidden lg:flex lg:justify-center lg:gap-4">
                {Array.from({ length: totalPagesTvCommercial })?.map(
                  (_, index) => (
                    <button
                      key={index + 1}
                      className={
                        index + 1 === currentPageTvCommercial
                          ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                          : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                      }
                      onClick={() => handleChangePage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
              <div className="flex justify-center lg:gap-4 lg:hidden">
                {Array.from({ length: totalPagesTvCommercial })?.map(
                  (_, index) =>
                    index + 1 >= currentPageTvCommercial - visiblePages / 3 &&
                    index + 1 <= currentPageTvCommercial + visiblePages / 3 && (
                      <button
                        key={index + 1}
                        className={
                          index + 1 === currentPageTvCommercial
                            ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                            : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                        }
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                )}
              </div>

              <button
                disabled={currentPageTvCommercial === totalPagesTvCommercial}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() =>
                  handleChangePageTvCommercial(currentPageTvCommercial + 1)
                }
              >
                <FaChevronRight className="text-[#A7A9AC] " />
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && regionalOfficesSearchResult.length > 0 && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Regional Offices
          </h2>

          {paginatedProductsRegionalOffice?.map((office, i) => (
            <div key={office.id} className="bg-[#F2F5F6] py-10 px-12 mb-12">
              <div className="max-w-[80rem] mx-auto">
                <h3 className="shop border-t border-b border-[#E62020] text-[#E62020] text-f25 font-bold py-2 text-center uppercase">
                  {office?.shop_name}
                </h3>
                <div className="flex justify-between gap-3">
                  <div className="flex items-center justify-center gap-5 pt-5 ">
                    <img src={"/svg/map.svg"} alt="" className="w-10" />
                    <p className="text-black font-normal ">
                      {Parse(`${office?.shop_address}`)}
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-5 pt-5 ">
                    <img src={"/svg/phone.svg"} alt="" className="w-10" />
                    {/* <div>
                        <p>+880 17-55552593</p>
                        <p>+880 17-55552583</p>
                        <p>+02-9586528</p>
                      </div> */}
                  </div>
                  {/* <div className="flex items-center justify-center gap-5 pt-5 ">
                      <img src={"/svg/mail.svg"} alt="" className="w-10" />
                      <p>sales.nawabpur@rr-imperial.com</p>
                    </div> */}
                  <div className="pt-5 flex items-center">
                    <Link
                      href="#"
                      scroll={false}
                      className="block relative bg-[#E62020] w-40 py-7 px-14 ms-auto "
                    >
                      <button
                        className="absolute inset-0 text-f20 bg-[#939598] rounded-br-[40px] border-[#E62020] text-white"
                        // onClick={() => handleOpen("Nawabpur")}
                      >
                        Map Link
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {regionalOfficesSearchResult.length > 2 && (
            <div className="flex justify-center gap-4 pt-16">
              <button
                disabled={currentPageRegionalOffice == 1}
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() => handleChangePage(currentPageRegionalOffice - 1)}
              >
                <FaChevronLeft className="text-[#A7A9AC] " />
              </button>

              <div className="hidden lg:flex lg:justify-center lg:gap-4">
                {Array.from({ length: totalPagesRegionalOffice })?.map(
                  (_, index) => (
                    <button
                      key={index + 1}
                      className={
                        index + 1 === currentPageRegionalOffice
                          ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                          : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                      }
                      onClick={() => handleChangePage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
              <div className="flex justify-center lg:gap-4 lg:hidden">
                {Array.from({ length: totalPagesRegionalOffice })?.map(
                  (_, index) =>
                    index + 1 >= currentPageRegionalOffice - visiblePages / 3 &&
                    index + 1 <=
                      currentPageRegionalOffice + visiblePages / 3 && (
                      <button
                        key={index + 1}
                        className={
                          index + 1 === currentPageRegionalOffice
                            ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white "
                            : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC] "
                        }
                        onClick={() => handleChangePage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    )
                )}
              </div>

              <button
                disabled={
                  currentPageRegionalOffice === totalPagesRegionalOffice
                }
                className="disabled:text-gray-300 bg-[#F2F5F6] px-3"
                onClick={() =>
                  handleChangePageRegionalOffice(currentPageRegionalOffice + 1)
                }
              >
                <FaChevronRight className="text-[#A7A9AC] " />
              </button>
            </div>
          )}
        </div>
      )}
      <Footer />
      <QuickNavigation />
    </div>
  );
};

export default SearchAll;
