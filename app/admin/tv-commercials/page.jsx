"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  create_new_Video,
  create_new_tvCommercial,
  delete_Video,
  delete_tvCommercial,
  edit_Video,
  edit_tvCommercial,
  read_all_Videos,
  read_all_tvCommercials,
  update_Video,
  update_tvCommercial,
  view_Video,
  view_tvCommercial,
} from "@/utility/api";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaEye, FaYoutube } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Parse from "html-react-parser";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AdminTvCommercials = () => {
  const tvCommercialTitle = useRef();
  const tvCommercialPoster = useRef();
  const tvCommercialDesc = useRef();
  const tvCommercialLink = useRef();

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [descVal, setDescVal] = useState("");

  //=================================== Fetch all Tv Commercials ===================================
  const [tvCommercialInfo, settvCommercialInfo] = useState([]);

  useEffect(() => {
    read_all_tvCommercials().then((res) => {
      settvCommercialInfo(res.data.allTvCommercials);
    });
  }, []);

  // ============================= Add new Video =============================
  const addTvCommercial = (modalValue) => {
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
    formdata.append("title", tvCommercialTitle.current.value);
    if (tvCommercialPoster.current.files[0]) {
      formdata.append("thumbnail", tvCommercialPoster.current.files[0]);
    }
    formdata.append("description", descVal);
    formdata.append("videoLink", tvCommercialLink.current.value);

    create_new_tvCommercial(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_tvCommercials().then((res) => {
          settvCommercialInfo(res.data.allTvCommercials);
        });
        e.target.reset();
        setDescVal("", "html");
        setOpen(false);
      }
    });
    e.preventDefault();
  };

  // ===================== View single Tv Commercial ===================================
  const [singleTvCommercialInfo, setSingletvCommercialInfo] = useState();
  const showSingleTvCommercialData = (modalValue, id) => {
    view_tvCommercial(id).then((res) => {
      setModalData(modalValue);
      setSingletvCommercialInfo(res.data.singleCommercial);
      setOpen(true);
    });
  };

  //=================================== Edit Video ===================================
  const [editTvCommercialVal, setEditTvCommercialVal] = useState();
  const [editedTvCommercialId, setEditedTvCommercialId] = useState();
  const editVideo = (VideoId, modalValue) => {
    edit_tvCommercial(VideoId).then((res) => {
      setModalData(modalValue);
      setEditTvCommercialVal(res.data.edit_info);
      setOpen(true);
      setEditedTvCommercialId(VideoId);
    });
  };

  // ===================== Updated data to backend ===============================

  const updateVideo = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("title", tvCommercialTitle.current.value);
    if (tvCommercialPoster.current.files[0]) {
      formdata.append("thumbnail", tvCommercialPoster.current.files[0]);
    }
    formdata.append("description", descVal);
    formdata.append("videoLink", tvCommercialLink.current.value);

    update_tvCommercial(editedTvCommercialId, formdata).then((response) => {
      Swal.fire({
        icon: "success",
        text: response.data.message,
        confirmButtonColor: "#5eba86",
      });
      read_all_tvCommercials().then((res) => {
        settvCommercialInfo(res.data.allTvCommercials);
      });
      setOpen(false);
    });

    e.preventDefault();
  };

  // =============================== Delete Data ===============================
  const deleteData = (id) => {
    delete_tvCommercial(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_tvCommercials().then((res) => {
          settvCommercialInfo(res.data.allTvCommercials);
        });
      }
    });
  };

  const TABLE_HEAD = [
    "#",
    "Tv Commercial Title",
    "Thumbnail",
    "Video",
    "Handle",
  ];
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-500/70">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">Tv Commercials</div>
          </div>
          {/* <div className="breadcrumb-item p-0 text-white">All Videos</div> */}
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <div className="my-2">
                <div
                  onClick={() => addTvCommercial("Add")}
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
                  {tvCommercialInfo?.map((data, index) => {
                    const isLast = index === tvCommercialInfo.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    return (
                      <tr key={index}>
                        <td className={classes}>{index + 1}</td>
                        <td className={classes}>{data?.title}</td>
                        <td className={classes}>
                          <img
                            className="img-thumbnail"
                            width={140}
                            height={10}
                            src={`${BACKEND_BASE_URL}${data?.thumbnail}`}
                            alt={data?.title}
                          />
                        </td>
                        <td className={classes}>
                          <button
                            className="bg-transparent text-red-600 border-0"
                            onClick={() =>
                              showSingleTvCommercialData("View", data.id)
                            }
                          >
                            <FaYoutube size="2.5em" />
                          </button>
                        </td>
                        <td className={`${classes}`}>
                          <div className="flex items-center gap-2">
                            {/* view button */}
                            <button
                              onClick={() =>
                                showSingleTvCommercialData("View", data.id)
                              }
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
                              onClick={() => editVideo(data.id, "Edit")}
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
                <div className="grid grid-cols-12 gap-4">
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="tvCommercialTitle"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tv Commercial Title
                    </label>

                    <input
                      id="tvCommercialTitle"
                      ref={tvCommercialTitle}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Event Title"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      YouTube Thumbnail&nbsp;{" "}
                    </label>

                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={tvCommercialPoster}
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
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      YouTube Embed Link&nbsp;{" "}
                    </label>

                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ref={tvCommercialLink}
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-12">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Description
                    </Typography>
                    <JoditEditor
                      ref={tvCommercialDesc}
                      // config={config}
                      tabIndex={1}
                      value={descVal}
                      onChange={(newContent) => setDescVal(newContent)}
                    />
                  </div>
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
              <form onSubmit={updateVideo}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="tvCommercialTitle"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tv Commercial Title
                    </label>

                    <input
                      id="tvCommercialTitle"
                      ref={tvCommercialTitle}
                      defaultValue={editTvCommercialVal?.title}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Event Title"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      YouTube Thumbnail&nbsp;{" "}
                    </label>

                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                              file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={tvCommercialPoster}
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
                        src={`${BACKEND_BASE_URL}/${editTvCommercialVal?.thumbnail}`}
                        alt={newsTitle}
                        name="img"
                      />
                    )}
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      YouTube Embed Link&nbsp;{" "}
                    </label>

                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ref={tvCommercialLink}
                      defaultValue={editTvCommercialVal?.videoLink}
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-12">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Description
                    </Typography>
                    <JoditEditor
                      ref={tvCommercialDesc}
                      // config={config}
                      tabIndex={1}
                      value={editTvCommercialVal?.description}
                      onChange={(newContent) => setDescVal(newContent)}
                    />
                  </div>
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
          {modalData === "View" && (
            <>
              <h4>{singleTvCommercialInfo?.title}</h4>

              <div className="text-center my-5">
                <iframe
                  width="100%"
                  height="450"
                  src={`https://www.youtube.com/embed/${singleTvCommercialInfo?.videoLink}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div className="mt-2">
                {Parse(`${singleTvCommercialInfo?.description}`)}
              </div>
            </>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="indigo"
            onClick={() => setOpen(false)}
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

export default AdminTvCommercials;
