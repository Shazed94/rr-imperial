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

  // Product Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(productSearchResult?.length / productsPerPage);
  const paginatedProducts = productSearchResult?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  const handleChangePage = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  console.log(paginatedProducts.length);
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
            aria-hidden="true"
            className="w-32 h-32 text-gray-200 animate-spin dark:text-gray-600 fill-[#E71D1D] "
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}

      {!loading && productSearchResult && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Products
          </h2>
          <div className="grid grid-cols-4 gap-7">
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
            <div className="flex justify-center gap-4 pt-16">
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
            </div>
          )}
        </div>
      )}

      {!loading && productCategorySearchResult && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Product Categories
          </h2>
          <div className="grid grid-cols-4 gap-7">
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
                className="disabled:text-gray-300"
                onClick={() => handleChangePage(currentPageCategory - 1)}
              >
                Previous Page
              </button>

              {Array.from({ length: totalPagesCategory }).map((_, index) => (
                <>
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageCategory
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white"
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]"
                    }
                    onClick={() => handleChangePageCategory(index + 1)}
                  >
                    {index + 1}
                  </button>
                </>
              ))}

              <button
                disabled={currentPageCategory === totalPagesCategory}
                className="disabled:text-gray-300"
                onClick={() =>
                  handleChangePageCategory(currentPageCategory + 1)
                }
              >
                Next Page
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && blogSearchResult && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Blogs
          </h2>
          <div className="grid grid-cols-4 gap-7">
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
                className="disabled:text-gray-300"
                onClick={() => handleChangePage(currentPageBlog - 1)}
              >
                Previous Page
              </button>

              {Array.from({ length: totalPagesBlog }).map((_, index) => (
                <>
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageBlog
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white"
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]"
                    }
                    onClick={() => handleChangePageBlog(index + 1)}
                  >
                    {index + 1}
                  </button>
                </>
              ))}

              <button
                disabled={currentPageBlog === totalPagesBlog}
                className="disabled:text-gray-300"
                onClick={() => handleChangePageBlog(currentPageBlog + 1)}
              >
                Next Page
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && newsSearchResult && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            News
          </h2>
          <div className="grid grid-cols-4 gap-7">
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
                className="disabled:text-gray-300"
                onClick={() => handleChangePage(currentPageNews - 1)}
              >
                Previous Page
              </button>

              {Array.from({ length: totalPagesNews }).map((_, index) => (
                <>
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageNews
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white"
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]"
                    }
                    onClick={() => handleChangePageNews(index + 1)}
                  >
                    {index + 1}
                  </button>
                </>
              ))}

              <button
                disabled={currentPageNews === totalPagesNews}
                className="disabled:text-gray-300"
                onClick={() => handleChangePageNews(currentPageNews + 1)}
              >
                Next Page
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && videosSearchResult && (
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
                className="disabled:text-gray-300"
                onClick={() => handleChangePage(currentPageVideos - 1)}
              >
                Previous Page
              </button>

              {Array.from({ length: totalPagesVideos }).map((_, index) => (
                <>
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageVideos
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white"
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]"
                    }
                    onClick={() => handleChangePageVideos(index + 1)}
                  >
                    {index + 1}
                  </button>
                </>
              ))}

              <button
                disabled={currentPageVideos === totalPagesVideos}
                className="disabled:text-gray-300"
                onClick={() => handleChangePageVideos(currentPageVideos + 1)}
              >
                Next Page
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && eventsSearchResult && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Events
          </h2>
          <div className="grid grid-cols-4 gap-7">
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
                className="disabled:text-gray-300"
                onClick={() => handleChangePage(currentPageEvents - 1)}
              >
                Previous Page
              </button>

              {Array.from({ length: totalPagesEvents }).map((_, index) => (
                <>
                  <button
                    key={index + 1}
                    className={
                      index + 1 === currentPageEvents
                        ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white"
                        : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]"
                    }
                    onClick={() => handleChangePageEvents(index + 1)}
                  >
                    {index + 1}
                  </button>
                </>
              ))}

              <button
                disabled={currentPageEvents === totalPagesEvents}
                className="disabled:text-gray-300"
                onClick={() => handleChangePageEvents(currentPageEvents + 1)}
              >
                Next Page
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && tvcommercialsSearchResult && (
        <div className="container py-12">
          <h2 className="text-f28 font-semibold text-red-600 text-center py-16">
            Tv Commerceials
          </h2>
          <div className="grid grid-cols-4 gap-7">
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
                className="disabled:text-gray-300"
                onClick={() => handleChangePage(currentPageTvCommercial - 1)}
              >
                Previous Page
              </button>

              {Array.from({ length: totalPagesTvCommercial }).map(
                (_, index) => (
                  <>
                    <button
                      key={index + 1}
                      className={
                        index + 1 === currentPageTvCommercial
                          ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white"
                          : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]"
                      }
                      onClick={() => handleChangePageTvCommercial(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </>
                )
              )}

              <button
                disabled={currentPageTvCommercial === totalPagesTvCommercial}
                className="disabled:text-gray-300"
                onClick={() =>
                  handleChangePageTvCommercial(currentPageTvCommercial + 1)
                }
              >
                Next Page
              </button>
            </div>
          )}
        </div>
      )}

      {!loading && regionalOfficesSearchResult && (
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
                className="disabled:text-gray-300"
                onClick={() => handleChangePage(currentPageRegionalOffice - 1)}
              >
                Previous Page
              </button>

              {Array.from({ length: totalPagesRegionalOffice }).map(
                (_, index) => (
                  <>
                    <button
                      key={index + 1}
                      className={
                        index + 1 === currentPageRegionalOffice
                          ? "w-10 h-10 bg-[#E62020] flex justify-center items-center text-white"
                          : "w-10 h-10 bg-[#F2F5F6] flex justify-center items-center text-[#A7A9AC]"
                      }
                      onClick={() => handleChangePageRegionalOffice(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </>
                )
              )}

              <button
                disabled={
                  currentPageRegionalOffice === totalPagesRegionalOffice
                }
                className="disabled:text-gray-300"
                onClick={() =>
                  handleChangePageRegionalOffice(currentPageRegionalOffice + 1)
                }
              >
                Next Page
              </button>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default SearchAll;
