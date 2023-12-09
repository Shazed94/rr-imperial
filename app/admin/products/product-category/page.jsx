"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  create_new_category,
  edit_Category,
  read_all_Category,
  update_Category,
} from "@/utility/api";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";

const ProductCategory = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const handleOpen = () => setOpen(!open);
  const categoryName = useRef();
  const categoryImage = useRef();

  //=================================== Fetch all Category ===================================
  const [category, setCategory] = useState([]);
  useEffect(() => {
    read_all_Category().then((res) => {
      setCategory(res.data.all_product_categories);
    });
  }, []);
  console.log(category);
  // ============================= Add new category =============================

  const addCategory = (modalValue) => {
    setModalData(modalValue);
    setOpen(true);
  };

  // Image Preview
  const [files, setFile] = useState([]);

  const handleImgPreview = (e) => {
    let allfiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allfiles.push(e.target.files[i]);
    }
    if (allfiles.length > 0) {
      setFile(allfiles);
    }
  };

  // ============================= form submit to backend ======================
  const storeData = (e) => {
    const formdata = new FormData();
    formdata.append("category_name", categoryName.current.value);
    if (categoryImage.current.files[0]) {
      formdata.append("category_image", categoryImage.current.files[0]);
    }

    create_new_category(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Category().then((res) => {
          setCategory(res.data.all_product_categories);
        });
        e.target.reset();
        setFile([]);
        setOpen(false);
      }
    });
    e.preventDefault();
  };

  //=================================== Edit category ===================================
  const [editCategoryVal, setEditCategoryVal] = useState();
  const [editCategoryId, setEditCategoryId] = useState();
  const editCategory = (modalValue, categoryId) => {
    edit_Category(categoryId).then((res) => {
      setEditCategoryVal(res.data.edit_category);
      setEditCategoryId(categoryId);
    });
    setModalData(modalValue);
    setOpen(true);
  };

  // ===================== Updated data to backend ===============================

  const updateCategory = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("category_name", categoryName.current.value);
    if (categoryImage.current.files[0]) {
      formdata.append("category_image", categoryImage.current.files[0]);
    }

    update_Category(editCategoryId, formdata).then((response) => {
      Swal.fire({
        icon: "success",
        text: response.data.message,
        confirmButtonColor: "#5eba86",
      });
      read_all_Category().then((res) => {
        setCategory(res.data.all_product_categories);
      });
      e.target.reset();
      setFile([]);
      setOpen(false);
    });
    e.preventDefault();
  };

  const TABLE_HEAD = ["#", "Category Name", "Category Image", "Handle"];
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-500/70">
          <div className="breadcrumb-item">
            <Link href="/admin">Dashboard</Link>
            <Link href="add-new" className="before">
              Add New Category
            </Link>
          </div>
          <div className="breadcrumb-item p-0">
            <Link href="#">All Category</Link>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <div className="m-2">
                <div
                  onClick={() => addCategory("Add")}
                  className="flex items-center gap-4"
                >
                  <Button className="flex items-center gap-3" color="green">
                    <AiOutlinePlusCircle size={20} />
                    Add
                  </Button>
                </div>
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
                    {category?.map((data, index) => {
                      const isLast = index === category.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      return (
                        <tr key={index}>
                          <td className={classes}>{index + 1}</td>
                          <td className={classes}>{data?.category_name}</td>
                          <td className={classes}>
                            <Image
                              className="img-thumbnail"
                              width={80}
                              height={20}
                              src={`${BACKEND_BASE_URL}/${data.category_image}`}
                              alt={data.title}
                            />
                          </td>
                          <td className={classes}>
                            {/* edit button */}
                            <div onClick={() => editCategory("Edit", data.id)}>
                              <button className="py-1 px-2 bg-yellow-800 rounded-lg me-1 mb-1">
                                <BiEdit
                                  style={{
                                    color: "white",
                                  }}
                                  title="Edit"
                                  size="1.5em"
                                />
                              </button>
                            </div>
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
        open={open}
        // handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>{modalData}</DialogHeader>
        <DialogBody className="max-h-[65vh] overflow-auto">
          {modalData === "Add" && (
            <>
              <form onSubmit={storeData}>
                <div className="mb-1 flex flex-col gap-2 col-span-6">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category title
                  </label>

                  <input
                    id="productName"
                    ref={categoryName}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Product Name"
                    required
                  />
                </div>
                <div className="mb-1 flex flex-col gap-2 col-span-6">
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Category Image&nbsp; <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                    ref={categoryImage}
                    onChange={handleImgPreview}
                  />
                  {files.map((file, key) => {
                    return (
                      <div key={key} className="Row">
                        <span className="Filename">
                          <img
                            width={80}
                            height={50}
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                          />
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="outlined"
                    color="indigo"
                    // onClick={handleOpen}
                    className="mx-auto"
                  >
                    <span>Save</span>
                  </Button>
                </div>
              </form>
            </>
          )}
          {modalData === "Edit" && (
            <>
              <form onSubmit={updateCategory}>
                <div className="mb-1 flex flex-col gap-2 col-span-6">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category title
                  </label>

                  <input
                    id="productName"
                    ref={categoryName}
                    defaultValue={editCategoryVal?.category_name}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Product Name"
                    required
                  />
                </div>
                <div className="mb-1 flex flex-col gap-2 col-span-6">
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Category Image&nbsp; <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                    ref={categoryImage}
                    onChange={handleImgPreview}
                  />
                  {files.map((file, key) => {
                    return (
                      <div key={key} className="Row">
                        <span className="Filename">
                          <img
                            width={80}
                            height={50}
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                          />
                        </span>
                      </div>
                    );
                  })}
                  {files.length == 0 && (
                    <img
                      className="img-thumbnail mt-1"
                      width={80}
                      height={50}
                      src={`${BACKEND_BASE_URL}/${editCategoryVal?.category_image}`}
                      alt={categoryName}
                      name="img"
                    />
                  )}
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="outlined"
                    color="indigo"
                    // onClick={handleOpen}
                    className="mx-auto"
                  >
                    <span>Save</span>
                  </Button>
                </div>
              </form>
            </>
          )}
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

export default ProductCategory;
