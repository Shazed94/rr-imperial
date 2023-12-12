"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  delete_Career,
  delete_Video,
  edit_Video,
  read_all_Career,
  read_all_Videos,
  update_Video,
  view_Career,
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
import React, { Suspense, useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaEye, FaYoutube } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Parse from "html-react-parser";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AdminCareer = () => {
  const videoTitle = useRef();
  const videoDesc = useRef();
  const videoLink = useRef();

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [descVal, setDescVal] = useState("");

  //   const handleOpen = () => setOpen(!open);

  //=================================== Fetch all Events ===================================
  const [careerInfo, setCareerInfo] = useState([]);

  useEffect(() => {
    read_all_Career().then((res) => {
      setCareerInfo(res.data?.careers);
    });
  }, []);

  // ===================== View single Video ===================================
  const [singleCareerInfo, setSingleCareerInfo] = useState([]);
  const showSingleCareerInfo = (modalValue, id) => {
    view_Career(id).then((res) => {
      setModalData(modalValue);
      setSingleCareerInfo(res.data?.career);
      setOpen(true);
    });
  };

  // =============================== Delete Data ===============================
  const deleteData = (id) => {
    delete_Career(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Career().then((res) => {
          setCareerInfo(res.data?.careers);
        });
      }
    });
  };

  const TABLE_HEAD = ["#", "Name", "Email", "Phone No", "Handle"];
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">Videos</div>
          </div>
          <div className="breadcrumb-item p-0 text-white">All Videos</div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>

              <Suspense fallback={<div className="text-5xl">Loading...</div>}>
                <table className="w-full min-w-max table-auto text-left mt-2">
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
                    {careerInfo?.map((data, index) => {
                      const isLast = index === careerInfo.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      return (
                        <tr
                          key={index}
                          className={`${data.status == 0 && "bg-gray-300"}`}
                        >
                          <td className={classes}>{index + 1}</td>
                          <td className={classes}>{data?.name}</td>
                          <td className={classes}>{data?.email}</td>
                          <td className={classes}>{data?.contact_no}</td>
                          <td className={`${classes}`}>
                            <div className="flex items-center gap-2">
                              {/* view button */}
                              <button
                                onClick={() =>
                                  showSingleCareerInfo("View", data.id)
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
                <div className="grid grid-cols-12 gap-4">
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="videoTitle"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Video Title
                    </label>

                    <input
                      id="videoTitle"
                      ref={videoTitle}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Event Title"
                      required
                    />
                  </div>

                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      YouTube Embed Link&nbsp;{" "}
                    </label>

                    <input
                      type="text"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={videoLink}
                    />
                  </div>
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Description
                  </Typography>
                  <JoditEditor
                    ref={videoDesc}
                    // config={config}
                    tabIndex={1}
                    value={descVal}
                    onChange={(newContent) => setDescVal(newContent)}
                  />
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
                      htmlFor="eventTitle"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Event Title
                    </label>

                    <input
                      id="eventTitle"
                      ref={eventTitle}
                      defaultValue={editEventVal?.title}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Event Title"
                      required
                    />
                  </div>

                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Event Image (700*400)&nbsp;{" "}
                    </label>

                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={eventImage}
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
                        src={`${BACKEND_BASE_URL}/${editEventVal?.image}`}
                        alt={eventTitle}
                        name="img"
                      />
                    )}
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
                      ref={eventDesc}
                      tabIndex={1}
                      value={editEventVal?.description}
                      onChange={(newContent) => setDescVal(newContent)}
                    />
                    {/* <ReactQuill
                      className=" block w-full  text-gray-700 bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                      theme="snow"
                      value={applicationValue}
                      ref={constructionDesc}
                      modules={QuillScript.modules}
                      formats={QuillScript.formats}
                    /> */}
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
              <h4 className="mb-1">
                <span className="font-bold">Name:</span>{" "}
                {singleCareerInfo?.name}
              </h4>
              <h6 className="mb-1">
                <span className="font-bold">Email:</span>{" "}
                {singleCareerInfo?.email}
              </h6>
              <h6 className="mb-1">
                <span className="font-bold">Contact Number: </span>
                {singleCareerInfo?.contact_no}
              </h6>
              <p className="mb-1">
                <span className="font-bold">Subject: </span>
                {singleCareerInfo?.subject}
              </p>
              <p className="mb-1">
                <span className="font-bold">Message: </span>
                {singleCareerInfo?.message}
              </p>
              <div className="mt-5">
                <span className="font-bold">Resume/CV: </span>
                <a
                  href={`${BACKEND_BASE_URL}/${singleCareerInfo?.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="bg-cyan-400 text-white px-5 py-3 rounded-lg"
                >
                  Download Resume
                </a>{" "}
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

export default AdminCareer;
