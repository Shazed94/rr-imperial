"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  create_new_Slider,
  delete_Slider,
  edit_Slider,
  read_all_Slider,
  update_Slider,
  view_Slider,
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
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const ProductSliders = () => {
  const sliderName1 = useRef();
  const sliderName2 = useRef();
  const sliderImage = useRef();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const handleOpen = () => setOpen(!open);
  const categoryName = useRef();
  //=================================== Fetch all Category ===================================
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    read_all_Slider().then((res) => {
      setSliders(res.data.allBanners);
    });
  }, []);

  // ============================= Add new category =============================
  const addSlider = (modalValue) => {
    setModalData(modalValue);
    setOpen(true);
  };

  // ============================= form submit to backend ======================
  const storeData = (e) => {
    const formdata = new FormData();
    formdata.append("title1", sliderName1.current.value);
    formdata.append("title2", sliderName2.current.value);
    formdata.append("image", sliderImage.current.files[0]);

    create_new_Slider(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Slider().then((res) => {
          setSliders(res.data.allBanners);
        });
        e.target.reset();
        setOpen(false);
      }
    });
    e.preventDefault();
  };

  // ===================== View single image ===================================
  const [singleSlider, setSingleSlider] = useState();
  const showSingleSlider = (modalValue, id) => {
    view_Slider(id).then((res) => {
      setModalData(modalValue);
      setSingleSlider(res.data.viewBanner);
      setOpen(true);
    });
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
  //=================================== Edit Slider ===================================
  const [editSliderVal, setEditSliderVal] = useState();
  const [editedSliderId, setEditedSliderId] = useState();
  const editSlider = (sliderId, modalValue) => {
    edit_Slider(sliderId).then((res) => {
      setModalData(modalValue);
      setEditSliderVal(res.data.editBanner);
      setOpen(true);
      setEditedSliderId(sliderId);
    });
  };

  // ===================== Updated data to backend ===============================

  const updateSlider = (e) => {
    const UpdatedSliderImage = sliderImage.current.files[0];
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("title1", sliderName1.current.value);
    formdata.append("title2", sliderName1.current.value);
    if (UpdatedSliderImage) {
      formdata.append("image", UpdatedSliderImage);
    }

    update_Slider(editedSliderId, formdata).then((response) => {
      Swal.fire({
        icon: "success",
        text: response.data.message,
        confirmButtonColor: "#5eba86",
      });
      read_all_Slider().then((res) => {
        setSliders(res.data.allBanners);
      });
    });

    e.preventDefault();
  };

  // =============================== Delete Data ===============================
  const deleteData = (id) => {
    delete_Slider(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Slider().then((res) => {
          setSliders(res.data.allBanners);
        });
      }
    });
  };

  const TABLE_HEAD = ["#", "Slider Name 1", "Slider Name 2", "Image", "Handle"];
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-500/70">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin">Dashboard</Link>
            <div className="before">Slider Elements</div>
          </div>
          <div className="breadcrumb-item p-0">
            <Link href="#">All Category</Link>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <div className="my-2">
                <div
                  onClick={() => addSlider("Add")}
                  className="flex items-center gap-4"
                >
                  <Button
                    className="flex items-center gap-3 rounded-none"
                    color="cyan"
                  >
                    <AiOutlinePlusCircle size={20} />
                    Add
                  </Button>
                </div>
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
                  {sliders?.map((data, index) => {
                    const isLast = index === sliders.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    return (
                      <tr key={index}>
                        <td className={classes}>{index + 1}</td>
                        <td className={classes}>{data?.title1}</td>
                        <td className={classes}>{data?.title2}</td>
                        <td className={classes}>
                          <img
                            className="img-thumbnail"
                            width={140}
                            height={10}
                            src={`${BACKEND_BASE_URL}${data?.image}`}
                            alt={data?.title}
                          />
                        </td>
                        <td className={`${classes}`}>
                          <div className="flex items-center gap-2">
                            {/* view button */}
                            <button
                              onClick={() => showSingleSlider("View", data.id)}
                              className="py-1 px-2 bg-cyan-500 rounded-lg me-1 mb-1"
                            >
                              <FaEye
                                style={{
                                  color: "white",
                                }}
                                title="View"
                                size="1.5em"
                              />{" "}
                            </button>
                            {/* edit button */}
                            <button
                              onClick={() => editSlider(data.id, "Edit")}
                              className="py-1 px-2 bg-yellow-300 rounded-lg me-1 mb-1"
                            >
                              <BiEdit
                                style={{
                                  color: "white",
                                }}
                                title="Edit"
                                size="1.5em"
                              />
                            </button>
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
                          </div>
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
      <Dialog
        open={open}
        handler={handleOpen}
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
                <div className="grid grid-cols-12 gap-4">
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="sliderName"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Slider title 1
                    </label>

                    <input
                      id="sliderName"
                      ref={sliderName1}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product Name"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="sliderName"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Slider title 2
                    </label>

                    <input
                      id="sliderName"
                      ref={sliderName2}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product Name"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="sliderImage"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Image
                    </label>

                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={sliderImage}
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
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="outline"
                    color="indigo"
                    onClick={handleOpen}
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
              <form onSubmit={updateSlider}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="sliderName"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Slider title 1
                    </label>

                    <input
                      id="sliderName"
                      ref={sliderName1}
                      defaultValue={editSliderVal?.title1}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product Name"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="sliderName"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Slider title 2
                    </label>

                    <input
                      id="sliderName"
                      ref={sliderName2}
                      defaultValue={editSliderVal?.title2}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product Name"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="sliderImage"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Image
                    </label>

                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={sliderImage}
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
                        width={80}
                        height={50}
                        src={`${BACKEND_BASE_URL}${editSliderVal?.image}`}
                        alt={sliderName1}
                      />
                    )}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="outline"
                    color="indigo"
                    onClick={handleOpen}
                    className="mx-auto"
                  >
                    <span>Save</span>
                  </Button>
                </div>
              </form>
            </>
          )}
          {modalData === "View" && (
            <>
              <h4>{singleSlider?.title}</h4>
              <img
                className="img-thumbnail"
                src={`${BACKEND_BASE_URL}/${singleSlider?.image}`}
                alt=""
              />
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

export default ProductSliders;
