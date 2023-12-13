"use client";
import Footer from "@/components/Footer/Footer";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import Header from "@/components/Header/Header";
import { ProductHome } from "@/components/LottieComponents";
import ProductsMaster from "@/components/Products/ProductsMaster";
import QuickNavigation from "@/components/QuickNavigation";
import { single_Product_Details_Front } from "@/utility/api";
import { Button, Dialog, DialogBody, Input } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Parse from "html-react-parser";
import axios from "axios";

const ProductDetails = ({ params }) => {
  let paramName = params.productCategory.replace(/-/g, " ");
  const [open, setOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState();
  const handleOpen = () => {
    setOpen(!open);
  };

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

  useEffect(() => {
    single_Product_Details_Front(params.productCatDetails).then((res) => {
      setSingleProduct(res.data.product_info);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <ProductHome className="" />
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
            className="ps-56 py-6 rounded-2xl !bg-[#F2F5F6] placeholder:text-gray-500 focus:!border focus:!border-[#cdcdcd] focus:!border-t focus-within:outline-none"
            labelProps={{
              className: "hidden",
            }}
            placeholder="Inpur Search Keywords Here"
          />
          <Button
            size="md"
            color="gray"
            className="!absolute left-1 top-1 h-[42px] shadow-none bg-white text-[#6D6E71] rounded-s-lg"
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
        <div className="bg-[#F2F5F6] p-4 lg:p-5 mb-6 lg:mb-14">
          <h2 className="text-[#E62020] text-f18 lg:text-f22 font-bold mb-5">
            {singleProduct?.name}
          </h2>

          <div className="flex flex-col lg:flex-row bg-white rounded-[17px] p-4 lg:p-10 mb-12">
            <div className="w-full lg:w-1/2 flex flex-wrap flex-col items-center justify-center lg:border-r lg:border-r-[#D1D3D4]">
              <Image
                src={`${BACKEND_BASE_URL}/${singleProduct?.image}`}
                alt=""
                width={300}
                height={60}
                quality={100}
                className="mx-auto mb-8"
              />
              <h5 className="text-[#E62020] text-f16 font-normal mb-3">
                *REACH | RoHS | CE
              </h5>
              <Image
                src={`${BACKEND_BASE_URL}/${singleProduct?.small_image}`}
                alt=""
                width={200}
                height={80}
                quality={100}
                className="mx-auto mb-8"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-wrap flex-col gap-8 items-center lg:ps-6">
              {singleProduct?.product_characteristics.length > 0 && (
                <div>
                  <h4 className="text-[#E62020] text-f20 font-normal text-center mb-4">
                    CHARACTERISTICS
                  </h4>
                  <div className="grid grid-cols-4 lg:grid-cols-6 gap-3">
                    {singleProduct?.product_characteristics?.map(
                      (characteristic) => (
                        <div
                          key={characteristic.id}
                          className="flex flex-col items-center text-center"
                        >
                          <Image
                            src={`${BACKEND_BASE_URL}/${characteristic?.image}`}
                            alt=""
                            width={45}
                            height={40}
                            className="mb-2"
                          />
                          <span className="text-[10px] leading-tight">
                            {characteristic?.label}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}

              {singleProduct?.product_installation_conditions.length > 0 && (
                <div>
                  <h4 className="text-[#E62020] text-f20 font-normal text-center mb-4">
                    INSTALLATION CONDITION
                  </h4>
                  <div className="grid grid-cols-7 gap-3">
                    {singleProduct?.product_installation_conditions?.map(
                      (characteristic) => (
                        <div
                          key={characteristic.id}
                          className="flex flex-col items-center text-center"
                        >
                          <Image
                            src={`${BACKEND_BASE_URL}/${characteristic?.ic_image}`}
                            alt=""
                            width={45}
                            height={40}
                            className="mb-2"
                          />
                          <span className="text-[10px] leading-tight">
                            {characteristic?.ic_label}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          {singleProduct?.application && (
            <div className="mb-10">
              <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                APPLICATION
              </h4>

              {Parse(`${singleProduct?.application}`)}
            </div>
          )}

          {singleProduct?.construction && (
            <div className="mb-10">
              <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                CONSTRUCTION
              </h4>
              <div className="">{Parse(`${singleProduct?.construction}`)}</div>
            </div>
          )}

          {singleProduct?.properties && (
            <div className="mb-10">
              <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                PROPERTIES
              </h4>
              <div className="">{Parse(`${singleProduct?.properties}`)}</div>
            </div>
          )}
          {singleProduct?.voltage_grade && (
            <div className="mb-10">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="">
                  <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                    <span className="span"> VOLTAGE GRADE</span>
                  </h4>
                  {Parse(`${singleProduct?.voltage_grade}`)}
                </div>
                <div className="">
                  <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                    <span className="span"> OPERATING TEMP.</span>
                  </h4>
                  {Parse(`${singleProduct?.operating_temp}`)}
                </div>
              </div>
            </div>
          )}

          {singleProduct?.min_bending_radius &&  <div className="mb-6">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6 lg:col-span-4">
                <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                  <span className="span"> MIN. BENDING RADIUS</span>
                </h4>
                {Parse(`${singleProduct?.min_bending_radius}`)}
              </div>
              <div className="col-span-6 lg:col-span-3">
                <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                  <span className="span">STANDARD</span>
                </h4>
                {Parse(`${singleProduct?.standard}`)}
              </div>
              <div className="col-span-12 lg:col-span-5">
                <h4 className="text-[#E62020] text-f20 font-normal mb-3">
                  <span className="span">COLOR</span>
                </h4>
                <div className="text-black flex gap-2">
                  <div className="min-w-max">Insulated Core:</div>
                  <div>
                    {singleProduct?.colors?.map((data, index) => {
                      var color = data.color_code.split("-");

                      return (
                        <>
                          <div className="flex flex-wrap items-center">
                            <div
                              className="block w-3 h-3 min-w-[12px] rounded-full"
                              style={{
                                backgroundColor: color[1],
                                marginLeft: "5px",
                              }}
                            ></div>
                            <div className="ms-1">{color[0]} &nbsp;</div>
                          </div>
                        </>
                      );
                    })}
                    {/* <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#EB2227]"></span>
                      Red
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#FBEA07]"></span>
                      Yellow
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#1080C3]"></span>
                      Blue
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#231F20]"></span>
                      Black
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="block w-3 h-3 min-w-[12px] rounded-full bg-[#EB2227]"></span>
                      <span>(Red or other colors available on request)</span>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>}
         

          <div className="cursor-pointer mt-5" onClick={handleOpen}>
            <img
              src={`${BACKEND_BASE_URL}/${singleProduct?.cable_design_parameter}`}
              alt=""
              className="mx-auto"
            />
          </div>
        </div>
      </ProductsMaster>

      <div className="text-center px-4 lg:px-0 mb-12">
        <h2 className="text-f28 lg:text-f38 text-[#E62020] font-bold mb-6 lg:mb-14">
          RELATED PRODUCTS
        </h2>
        <div className="flex flex-col lg:flex-row justify-center gap-5">
          <Link href={`/products/${params.productCategory}/details`}>
            <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
              <div className="p-6">
                <img
                  src={"/img/product/cable.png"}
                  alt=""
                  className="w-full mt-16"
                />
              </div>
              <hr className="bg-white h-[3px]" />
              <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                NYY Flexible or YY Flexible
              </div>
            </div>
          </Link>
          <Link href={`/products/${params.productCategory}/details`}>
            <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
              <div className="p-6">
                <img
                  src={"/img/product/cable.png"}
                  alt=""
                  className="w-full mt-16"
                />
              </div>
              <hr className="bg-white h-[3px]" />
              <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                NYY Flexible or YY Flexible
              </div>
            </div>
          </Link>
          <Link href={`/products/${params.productCategory}/details`}>
            <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
              <div className="p-6">
                <img
                  src={"/img/product/cable.png"}
                  alt=""
                  className="w-full mt-16"
                />
              </div>
              <hr className="bg-white h-[3px]" />
              <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                NYY Flexible or YY Flexible
              </div>
            </div>
          </Link>
          <Link href={`/products/${params.productCategory}/details`}>
            <div className="group bg-[#F2F5F6] rounded-3xl overflow-hidden">
              <div className="p-6">
                <img
                  src={"/img/product/cable.png"}
                  alt=""
                  className="w-full mt-16"
                />
              </div>
              <hr className="bg-white h-[3px]" />
              <div className="px-6 py-3 group-hover:bg-[#E62020] group-hover:text-white transition-colors text-center">
                NYY Flexible or YY Flexible
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
      <QuickNavigation />
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: 150 },
        }}
        size="lg"
      >
        <DialogBody className="relative">
          <TransformWrapper>
            <TransformComponent className="relative ">
              <Image
                src="/img/product/table.png"
                alt=""
                className="object-fill"
                width={1200}
                height={800}
              />
            </TransformComponent>
          </TransformWrapper>
        </DialogBody>
      </Dialog>
    </div>
  );
};

export default ProductDetails;
