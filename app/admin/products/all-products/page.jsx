"use client";

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import Swal from "sweetalert2";
import { Suspense, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
// import AdminMaster from "@/components/AdminMaster/AdminMaster";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import { delete_Product, read_all_Products, view_product } from "@/utility/api";
import Image from "next/image";
import Parse from "html-react-parser";

const AllProducts = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  //=================================== Fetch all Products ===================================
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    read_all_Products().then((res) => {
      setAllProducts(res.data?.all_products);
    });
  }, []);
  //=================================== view single Product ===================================
  const [productInfo, setProductInfo] = useState([]);

  const viewProduct = (productId) => {
    view_product(productId).then((res) => {
      setProductInfo(res.data.single_product);
    });
    handleOpen();
  };
  // =============================== Delete Data ===============================
  const deleteData = (id) => {
    delete_Product(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Products().then((res) => {
          setAllProducts(res.data?.all_products);
        });
      }
    });
  };

  const TABLE_HEAD = [
    "#",
    "Product Name",
    "Product Category",
    "Featured Image",
    "Handle",
  ];

  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item">
            <Link href="/admin">Dashboard</Link>
            <Link href="add-new" className="before">
              Add New Product
            </Link>
          </div>
          <div className="breadcrumb-item p-0 text-white">All Product</div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <div className="my-2">
                <Link href="add-new" className="flex items-center gap-4">
                  <Button
                    className="flex items-center gap-3 rounded-none"
                    color="cyan"
                  >
                    <AiOutlinePlusCircle size={20} />
                    Add
                  </Button>
                </Link>
              </div>
              <Suspense fallback={<div className="text-5xl">Loading...</div>}>
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {allProducts?.map((data, index) => {
                      const isLast = index === allProducts.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      return (
                        <tr key={index}>
                          <td className={classes}>{index + 1}</td>
                          <td className={classes}>{data?.name}</td>
                          <td className={classes}>
                            {data?.category?.category_name}
                          </td>
                          <td className={classes}>
                            <Image
                              className="img-thumbnail"
                              width={50}
                              height={40}
                              src={`${BACKEND_BASE_URL}${data.image}`}
                              alt={data.title}
                            />
                          </td>
                          <td className={classes}>
                            {/* view button */}

                            <button
                              onClick={() => {
                                viewProduct(data.id);
                              }}
                              className="py-1 px-2 bg-light-blue-600 border-0 rounded-lg me-1 mb-1"
                            >
                              <FaEye
                                style={{
                                  color: "white",
                                }}
                                title="View"
                                size="1.5em"
                              />
                            </button>
                            {/* edit button */}
                            <Link href={`edit-product/${data.id}`}>
                              <button className="py-1 px-2 bg-yellow-800 rounded-lg me-1 mb-1">
                                <BiEdit
                                  style={{
                                    color: "white",
                                  }}
                                  title="Edit"
                                  size="1.5em"
                                />
                              </button>
                            </Link>
                            {/* delete button */}
                            <button
                              onClick={() => deleteData(data.id)}
                              className="py-1 px-2 bg-red-600 border-0 rounded-lg me-1 mb-1"
                            >
                              <MdDeleteForever
                                style={{
                                  color: "white",
                                }}
                                title="Delete"
                                size="1.5em"
                              />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        open={open} size="xxl"
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Product Details</DialogHeader>
        <DialogBody className="max-h-[85vh] overflow-auto">
          <h3 className="mb-1">Product Name: {productInfo?.name}</h3>
          <h5 className="mb-1">
            Category: {productInfo?.category?.category_name}
          </h5>
          <div className="my-5">
            <img
              src={`${BACKEND_BASE_URL}/${productInfo?.image}`}
              alt=""
              className="img-thumbnail"
            />
          </div>
          {Parse(`Application: ${productInfo?.application}`)}

          {Parse(`Specification: ${productInfo?.specification}`)}
          {Parse(`Construction: ${productInfo?.construction}`)}
          {Parse(`Voltage Grade: ${productInfo?.voltage_grade}`)}
          {Parse(`Operating Temp: ${productInfo?.operating_temp}`)}
          {Parse(`Min Bending Radius ${productInfo?.min_bending_radius}`)}
          {Parse(`Standard: ${productInfo?.standard}`)}
          <div className="flex justify-between items-center gap-3">
            {productInfo?.colors?.map((data, index) => {
              return (
                <>
                  <div className="flex flex-wrap items-center">
                    <div
                      className="block w-3 h-3 min-w-[12px] rounded-full"
                      style={{
                        backgroundColor: data?.color_info?.color_code,
                        marginLeft: "5px",
                      }}
                    ></div>
                    <div className="ms-1">{data?.color_info?.name} &nbsp;</div>
                  </div>
                </>
              );
            })}
          </div>
          <div>
            <img
              src={`${BACKEND_BASE_URL}/${productInfo?.cable_design_parameter}`}
              alt=""
              className="w-full h-auto"
            />
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="indigo"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
    // </AdminMaster>
  );
};

export default AllProducts;
