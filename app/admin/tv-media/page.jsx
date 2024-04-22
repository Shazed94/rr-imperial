"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  create_new_tvMedia,
  delete_tvMedia,
  edit_tvMedia,
  read_all_tvMedias,
  update_tvMedia,
  view_tvMedia,
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
import ReactPlayer from "react-player";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AdminTvMedia = () => {
  const tvMediaTitle = useRef();
  const tvMediaPoster = useRef();
  const tvMediaDesc = useRef();
  const tvMediaLink = useRef();

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [descVal, setDescVal] = useState("");

  //=================================== Fetch all Tv Medias ===================================
  const [tvMediaInfo, settvMediaInfo] = useState([]);

  useEffect(() => {
    read_all_tvMedias().then((res) => {
      settvMediaInfo(res.data.allTvMedia);
    });
  }, []);

  // ============================= Add new Video =============================
  const addTvMedia = (modalValue) => {
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
    formdata.append("title", tvMediaTitle.current.value);
    if (tvMediaPoster.current.files[0]) {
      formdata.append("thumbnail", tvMediaPoster.current.files[0]);
    }
    formdata.append("description", descVal);
    formdata.append("videoLink", tvMediaLink.current.value);

    create_new_tvMedia(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_tvMedias().then((res) => {
          settvMediaInfo(res.data.allTvMedia);
        });
        e.target.reset();
        setDescVal("", "html");
        setOpen(false);
      }
    });
    e.preventDefault();
  };

  // ===================== View single Tv Media ===================================
  const [singleTvMediaInfo, setSingletvMediaInfo] = useState();
  const showSingleTvMediaData = (modalValue, id) => {
    view_tvMedia(id).then((res) => {
      setModalData(modalValue);
      setSingletvMediaInfo(res.data.singleCommercial);
      setOpen(true);
    });
  };

  //=================================== Edit Video ===================================
  const [editTvMediaVal, setEditTvMediaVal] = useState();
  const [editedTvMediaId, setEditedTvMediaId] = useState();
  const editVideo = (VideoId, modalValue) => {
    edit_tvMedia(VideoId).then((res) => {
      setModalData(modalValue);
      setEditTvMediaVal(res.data.edit_info);
      setOpen(true);
      setEditedTvMediaId(VideoId);
    });
  };

  // ===================== Updated data to backend ===============================

  const updateVideo = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("title", tvMediaTitle.current.value);
    if (tvMediaPoster.current.files[0]) {
      formdata.append("thumbnail", tvMediaPoster.current.files[0]);
    }
    formdata.append("description", descVal);
    formdata.append("videoLink", tvMediaLink.current.value);

    update_tvMedia(editedTvMediaId, formdata).then((response) => {
      Swal.fire({
        icon: "success",
        text: response.data.message,
        confirmButtonColor: "#5eba86",
      });
      read_all_tvMedias().then((res) => {
        settvMediaInfo(res.data.allTvMedia);
      });
      setOpen(false);
    });

    e.preventDefault();
  };

  // =============================== Delete Data ===============================
  const deleteData = (id) => {
    delete_tvMedia(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_tvMedias().then((res) => {
          settvMediaInfo(res.data.allTvMedia);
        });
      }
    });
  };

  const TABLE_HEAD = [
    "#",
    "Tv Media Title",
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
            <div className="before">Tv Medias</div>
          </div>
          {/* <div className="breadcrumb-item p-0 text-white">All Videos</div> */}
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <div className="my-2">
                <div
                  onClick={() => addTvMedia("Add")}
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
                  {tvMediaInfo?.map((data, index) => {
                    const isLast = index === tvMediaInfo.length - 1;
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
                              showSingleTvMediaData("View", data.id)
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
                                showSingleTvMediaData("View", data.id)
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
                      htmlFor="tvMediaTitle"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tv Media Title
                    </label>

                    <input
                      id="tvMediaTitle"
                      ref={tvMediaTitle}
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

                    <input required
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={tvMediaPoster}
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
                      YouTube Video URL&nbsp;{" "}
                    </label>

                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ref={tvMediaLink}
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
                      ref={tvMediaDesc}
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
                      htmlFor="tvMediaTitle"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tv Media Title
                    </label>

                    <input
                      id="tvMediaTitle"
                      ref={tvMediaTitle}
                      defaultValue={editTvMediaVal?.title}
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
                      ref={tvMediaPoster}
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
                        src={`${BACKEND_BASE_URL}/${editTvMediaVal?.thumbnail}`}
                        alt={""}
                        name="img"
                      />
                    )}
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    YouTube Video URL&nbsp;{" "}
                    </label>

                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      ref={tvMediaLink}
                      defaultValue={editTvMediaVal?.videoLink}
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
                      ref={tvMediaDesc}
                      // config={config}
                      tabIndex={1}
                      value={editTvMediaVal?.description}
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
              <h4>{singleTvMediaInfo?.title}</h4>

              <div className="text-center my-5">
                {/* <iframe width="560" height="315" src="https://www.youtube.com/watch?v=d7iDgjSxfnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                {/* <iframe
                  width="100%"
                  height="450"
                  src={`https://www.youtube.com/embed/${singleTvMediaInfo?.videoLink}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen={true}
                ></iframe> */}

                <ReactPlayer url={`${singleTvMediaInfo?.videoLink}`} />
              </div>
              <div className="mt-2">
                {Parse(`${singleTvMediaInfo?.description}`)}
              </div>
            </>
          )}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="indigo"
            onClick={() => { setOpen(false); setDescVal("", "html") }}
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

export default AdminTvMedia;
