"use client";
import Header from "@/components/Header/Header";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Footer from "@/components/Footer/Footer";
import ProductsMaster from "@/components/Products/ProductsMaster";
import QuickNavigation from "@/components/QuickNavigation";
import { ProductHome } from "@/components/LottieComponents";
import axios from "axios";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import { SearchBoxButton } from "@/components/ButtonComponents";

const ProductCategory = ({ params }) => {
  let paramName = params.productCategory.replace(/-/g, " ");
  const [productInfo, setProductInfo] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(productInfo?.length / productsPerPage);
  const paginatedProducts = productInfo?.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleChangePage = (page) => {
    // Check if page is within valid range
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchProductData = () => {
    axios
      .get(
        `${BACKEND_BASE_URL}/api/products-categories/${params.productCategory}`
      )
      .then((res) => {
        setProductInfo(res?.data?.products);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, [params.productCategory]);

  return (
    <div>
      <Header />
      <div className="container">
        <ProductHome />
      </div>

      <div className="container max-w-5xl text-center py-6 lg:py-14">
        <h3 className="text-[#E62020] text-f28 lg:text-f38 font-bold uppercase ">
          {paramName}
        </h3>
      </div>
      <div className="container px-4 lg:px-0">
       <SearchBoxButton />
      </div>
      <div className="container grid grid-cols-2 lg:grid-cols-8 place-items-center gap-4 lg:gap-2 py-12">
        <Link
          href="/products/house-wire"
          scroll={false}
          className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
            params.productCategory === "house-wire"
              ? "bg-[#E62020]"
              : "bg-[#D1D3D4]"
          }  hover:bg-[#E62020] transition-colors `}
        >
          <button>HOUSE WIRE CABLES</button>
        </Link>
        <Link
          href="/products/low-voltage-cables"
          scroll={false}
          className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
            params.productCategory === "low-voltage-cables"
              ? "bg-[#E62020]"
              : "bg-[#D1D3D4]"
          } hover:bg-[#E62020] transition-colors `}
        >
          <button>LOW VOLTAGE CABLES</button>
        </Link>
        <Link
          href="/products/medium-voltage-cables"
          scroll={false}
          className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
            params.productCategory === "medium-voltage-cables"
              ? "bg-[#E62020]"
              : "bg-[#D1D3D4]"
          } hover:bg-[#E62020] transition-colors `}
        >
          <button>MEDIUM VOLTAGE CABLES</button>
        </Link>
        <Link href="/products/high-voltage-cables" scroll={false}>
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "high-voltage-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            HIGH VOLTAGE CABLES
          </button>
        </Link>
        <Link href="/products/fire-survival-cables" scroll={false}>
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "fire-survival-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            FIRE SURVIVAL CABLES
          </button>
        </Link>
        <Link href="/products/communication-cables" scroll={false}>
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "communication-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            COMMUNICATION CABLES
          </button>
        </Link>
        <Link href="/products/instrumentation-cables" scroll={false}>
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "instrumentation-cables"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors `}
          >
            INSTRUMENTATION CABLES
          </button>
        </Link>
        <Link href="/products/overhead-conductor" scroll={false}>
          <button
            className={`w-40 px-4 py-3 font-normal text- rounded-xl text-white ${
              params.productCategory === "overhead-conductor"
                ? "bg-[#E62020]"
                : "bg-[#D1D3D4]"
            } hover:bg-[#E62020] transition-colors`}
          >
            OVERHEAD CABLES
          </button>
        </Link>
      </div>
      <ProductsMaster
        productData={productInfo}
        productCategory={params.productCategory}
      >
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-14">
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

          <div className="flex justify-center gap-4">
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
        </div>
      </ProductsMaster>
      <Footer />
      <QuickNavigation />
    </div>
  );
};

export default ProductCategory;
