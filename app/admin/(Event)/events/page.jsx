"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  create_new_Event,
  delete_Event,
  delete_Event_gallery,
  edit_Event,
  read_all_Events,
  read_all_eventsYear,
  update_Event,
  view_Event,
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
import { AiFillCloseSquare, AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Parse from "html-react-parser";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AdminEvents = () => {
  const eventTitle = useRef();
  const eventDesc = useRef();
  const eventImage = useRef();
  const eventGallery = useRef();
  const eventYearRef = useRef();

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [descVal, setDescVal] = useState("");
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  //   const handleOpen = () => setOpen(!open);

  //=================================== Fetch all Events ===================================
  const [eventsInfo, setEventsInfo] = useState([]);
  const [eventYear, setEventYear] = useState([]);

  useEffect(() => {
    read_all_Events().then((res) => {
      setEventsInfo(res.data.allEvents);
    });
    read_all_eventsYear().then((res) => {
      setEventYear(res.data.allEventYears);
    });
  }, []);

  // ============================= Add new Event =============================
  const addEvent = (modalValue) => {
    setModalData(modalValue);
    setOpen(true);
  };

  // ============================= form submit to backend ======================
  const storeData = (e) => {
    const formdata = new FormData();
    formdata.append("title", eventTitle.current.value);
    formdata.append("description", descVal);
    if (eventImage.current.files[0]) {
      formdata.append("image", eventImage.current.files[0]);
    }
    formdata.append("event_year_id", eventYearRef.current.value);
    selectedImages.forEach((item) => {
      formdata.append("gallery_image[]", item);
    });

    create_new_Event(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Events().then((res) => {
          setEventsInfo(res.data.allEvents);
        });
        e.target.reset();
        setDescVal("", "html");
        setFile([]);
        setOpen(false);
      } else {
        setError(response.data.errors);
      }
    });
    e.preventDefault();
  };

  // ===================== View single Event ===================================
  const [singleEventInfo, setSingleEventInfo] = useState();
  const showSingleEvent = (modalValue, id) => {
    view_Event(id).then((res) => {
      setModalData(modalValue);
      setSingleEventInfo(res.data.viewEvent);
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
  // Gallery Preview
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return file;
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
    if (editEventVal?.gallery.length + selectedImages.length < 10) {
      setMessage("");
    }
  }

  //=================================== Edit Event ===================================
  const [editEventVal, setEditEventVal] = useState();
  const [editedEventId, setEditedEventId] = useState();
  const editEvent = (EventId, modalValue) => {
    edit_Event(EventId).then((res) => {
      setModalData(modalValue);
      setEditEventVal(res.data.editEvent);
      setOpen(true);
      setEditedEventId(EventId);
    });
  };

  // Delete Gallery Image
  const deleteGalleryImage = (id) => {
    delete_Event_gallery(id).then((res) => {
      edit_Event(editedEventId).then((res) => {
        setEditEventVal(res.data.editEvent);
        if (editEventVal?.gallery.length + selectedImages.length < 10) {
          setMessage("");
        }
      });
    });
  };

  // ===================== Updated data to backend ===============================

  const updateEvent = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("title", eventTitle.current.value);
    formdata.append("description", descVal);
    if (eventImage.current.files[0]) {
      formdata.append("image", eventImage.current.files[0]);
    }
    selectedImages.forEach((item) => {
      formdata.append("gallery_image[]", item);
    });
    formdata.append("event_year_id", eventYearRef.current.value);

    update_Event(editedEventId, formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Events().then((res) => {
          setEventsInfo(res.data.allEvents);
        });
        setOpen(false);
      } else {
        setError(response.data.errors);
        setMessage(response.data.message);
      }
    });

    e.preventDefault();
  };

  // =============================== Delete Data ===============================
  const deleteData = (id) => {
    delete_Event(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Events().then((res) => {
          setEventsInfo(res.data.allEvents);
        });
      }
    });
  };

  const TABLE_HEAD = ["#", "Event Title", "Featured Image", "Handle"];
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">Events</div>
          </div>
          <div className="breadcrumb-item p-0 text-white">All Events</div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <div className="my-2">
                <div
                  onClick={() => addEvent("Add")}
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
                  {eventsInfo?.map((data, index) => {
                    const isLast = index === eventsInfo.length - 1;
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
                            src={`${BACKEND_BASE_URL}${data?.image}`}
                            alt={data?.title}
                          />
                        </td>
                        <td className={`${classes}`}>
                          <div className="flex items-center gap-2">
                            {/* view button */}
                            <button
                              onClick={() => showSingleEvent("View", data.id)}
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
                              onClick={() => editEvent(data.id, "Edit")}
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
                      htmlFor="eventTitle"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Event Title
                    </label>

                    <input
                      id="eventTitle"
                      ref={eventTitle}
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
                    <span className="text-red-500">{error?.image}</span>
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
                    <select
                      size="md"
                      className="border border-gray-300 outline-0 bg-transparent focus:ring-0 rounded-lg"
                      ref={eventYearRef}
                    >
                      <option value="">Select Year</option>
                      {eventYear?.map((yearName) => (
                        <option key={yearName.id} value={yearName.id}>
                          {yearName?.year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-12">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Image Gallery (up to 10 images)&nbsp;{" "}
                    </label>

                    <input
                      type="file"
                      multiple
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={eventGallery}
                      onChange={onSelectFile}
                    />
                    <div className="">
                      {error?.image_gallery && selectedImages.length > 10 && (
                        <p className="text-red-500">
                          {error?.image_gallery}
                          <span>
                            please delete <b> {selectedImages.length - 10} </b>{" "}
                            of them{" "}
                          </span>
                        </p>
                      )}

                      {selectedImages && (
                        <div className="flex gap-5">
                          {selectedImages.map((image, index) => {
                            return (
                              <div key={index} className=" mt-3 ">
                                <img
                                  src={URL.createObjectURL(image)}
                                  height="68"
                                  width="68"
                                  alt="upload"
                                />
                                <div className="flex justify-between">
                                  <p>{index + 1}</p>
                                  <AiFillCloseSquare
                                    className="cursor "
                                    size="1.5rem"
                                    color="red"
                                    onClick={() => deleteHandler(image)}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Description
                  </Typography>
                  <JoditEditor
                    ref={eventDesc}
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
              <form onSubmit={updateEvent}>
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

                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <select
                      size="md"
                      className="border border-gray-300 outline-0 bg-transparent focus:ring-0 rounded-lg"
                      ref={eventYearRef}
                    >
                      <option value="">Select Year</option>
                      {eventYear?.map((yearName) => (
                        <option key={yearName.id} value={yearName.id} selected={
                          yearName.id == editEventVal.event_year_id ? "selected" : ""
                        }>
                          {yearName?.year}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-1 flex flex-col gap-2 col-span-12">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Image Gallery (up to 10 images)&nbsp;{" "}
                    </label>

                    <input
                      type="file"
                      multiple
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={eventGallery}
                      onChange={onSelectFile}
                    />

                    <div className="">
                      {error?.image_gallery && selectedImages.length > 10 && (
                        <p className="text-red-500">
                          {error?.image_gallery}
                          <span>
                            please delete <b> {selectedImages.length - 10} </b>{" "}
                            of them{" "}
                          </span>
                        </p>
                      )}
                      {message && (
                        <span className="text-red-500">{message}</span>
                      )}

                      <div className="flex gap-5">
                        {editEventVal?.gallery?.map((data, index) => (
                          <div className="col-md-3 mt-3" key={index}>
                            <img
                              src={`${BACKEND_BASE_URL}/${data?.gallery_image}`}
                              className="w-16 h-16"
                              alt="upload"
                            />

                            <div className="flex justify-between">
                              <p>{index + 1}</p>
                              <AiFillCloseSquare
                                className="cursor-pointer"
                                size="1.5rem"
                                color="red"
                                onClick={() => {
                                  deleteGalleryImage(data.id);
                                }}
                              />
                            </div>
                          </div>
                        ))}
                        {selectedImages && (
                          <div className="flex flex-wrap gap-5">
                            {selectedImages.map((image, index) => {
                              return (
                                <div key={index} className=" mt-3 ">
                                  <img
                                    src={URL.createObjectURL(image)}
                                    className="w-16 h-16"
                                    alt="upload"
                                  />
                                  <div className="flex justify-between">
                                    <p>
                                      {editEventVal?.gallery.length + index + 1}
                                    </p>
                                    <AiFillCloseSquare
                                      className="cursor-pointer "
                                      size="1.5rem"
                                      color="red"
                                      onClick={() => deleteHandler(image)}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
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
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="outlined"
                    color="indigo"
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
              <h4>{singleEventInfo?.title}</h4>

              <div className="text-center my-5">
                <img
                  className="img-fluid"
                  src={`${BACKEND_BASE_URL}/${singleEventInfo?.image}`}
                  alt=""
                />
              </div>
              <div className="mt-2">
                {Parse(`${singleEventInfo?.description}`)}
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

export default AdminEvents;
