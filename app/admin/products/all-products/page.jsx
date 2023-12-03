"use client";

import { Button, Typography } from "@material-tailwind/react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import AdminMaster from "@/components/AdminMaster/AdminMaster";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
const AllProducts = () => {
  //=================================== Fetch Table Data ===================================

  const [allProducts, setAllProducts] = useState([]);

  const renderAllProducts = async () => {
    await axios.get(`${BACKEND_BASE_URL}/api/admin/products`).then((res) => {
      setAllProducts(res.data.all_products);
    });
  };

  useEffect(() => {
    renderAllProducts();
  }, []);

  const TABLE_HEAD = [
    "#",
    "Product Name",
    "News Title",
    "Featured Image",
    "Handle",
  ];

  // =============================== Delete Data ===============================
  const deleteData = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    if (isConfirm) {
      axios
        .delete(`${BACKEND_BASE_URL}/api/admin/products/delete/${id}`)
        .then((res) => {
          Swal.fire({
            icon: "success",
            text: res.data.message,
            confirmButtonColor: "#5eba86",
          });
          renderAllProducts();
        });
    }
  };

  return (
    <AdminMaster>
      <div className="main__container p-4">
        <div className="content-wrapper">
          <div className="breadcrumb flex justify-between">
            <div className="breadcrumb-item">
              <Link href="/admin">Dashboard</Link>
              <Link href="add-new" className="before">
                Add New Product
              </Link>
            </div>
            <div className="breadcrumb-item p-0">
              <Link href="#">All Product</Link>
            </div>
          </div>

          <div className="content-wrapper">
            <div className="card">
              <div className="card-body">
                <span className="top-border"></span>
                <div className="m-2">
                  <Link href="add-new" className="flex items-center gap-4">
                    <Button className="flex items-center gap-3" color="green">
                      <AiOutlinePlusCircle size={20} />
                      Add
                    </Button>
                  </Link>
                </div>
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
                            <img
                              className="img-thumbnail"
                              width={50}
                              src={`${BACKEND_BASE_URL}${data.image}`}
                              alt={data.title}
                            />
                          </td>
                          <td className={classes}>
                            {/* view button */}
                            <Link href={`view/${data.id}`}>
                              <button className="py-1 px-2 bg-light-blue-600 border-0 rounded-lg me-1 mb-1">
                                <FaEye
                                  style={{
                                    color: "white",
                                  }}
                                  title="View"
                                  size="1.5em"
                                />
                              </button>
                            </Link>
                            {/* edit button */}
                            <Link href={`edit/${data.id}`}>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminMaster>
  );
};

export default AllProducts;
