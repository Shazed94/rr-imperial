"use client";
import Header from "@/components/Header/Header";
import { Button, Input } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import Footer from "@/components/Footer/Footer";
import ProductsMaster from "@/components/Products/ProductsMaster";
import { useRouter } from "next/navigation";
import QuickNavigation from "@/components/QuickNavigation";
import { ProductHome } from "@/components/LottieComponents";
import axios from "axios";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import { all_featured_categories } from "@/utility/api";

const ProductCategory = ({ params }) => {
  let paramName = params.productCategory.replace(/-/g, " ");
  const [productInfo, setProductInfo] = useState([{}]);

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
        <div className="relative flex w-full ">
          <Input
            type="email"
            className="ps-44 lg:ps-56 py-6 rounded-2xl !bg-[#F2F5F6] placeholder:text-gray-500 focus:!border focus:!border-[#cdcdcd] focus:!border-t focus-within:outline-none"
            labelProps={{
              className: "hidden",
            }}
            placeholder="Inpur Search Keywords Here"
          />
          <Button
            size="md"
            color="gray"
            className="!absolute left-1 top-1 h-[42px] px-3 shadow-none bg-white text-[#6D6E71] rounded-s-lg"
            // containerProps={{
            //   className: "w-20",
            // }}
          >
            Select Category{" "}
            <MdOutlineArrowDropDown className="inline ms-3" size={20} />
          </Button>
        </div>
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
        <Link href="/products/fire-survival" scroll={false}>
          <button
            className={`w-40 px-2 py-3 font-normal rounded-xl text-white ${
              params.productCategory === "fire-survival"
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
            {productInfo?.map((data) => (
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

          <div className="flex justify-center items-center gap-4 mb-14">
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
        </div>
      </ProductsMaster>
      <Footer />
      <QuickNavigation />
    </div>
  );
};

export default ProductCategory;
