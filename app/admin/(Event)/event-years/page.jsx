"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  create_new_Event,
  create_new_eventYear,
  delete_Event,
  delete_Event_gallery,
  delete_eventYear,
  edit_Event,
  edit_eventYear,
  read_all_Events,
  read_all_eventsYear,
  update_Event,
  update_eventYear,
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
import moment from "moment";
import { getCookie } from "cookies-next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaCalendarAlt, FaEye, FaUserTie } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const AdminEventYears = () => {
  const eventYearRef = useRef();
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [error, setError] = useState();

  //   const handleOpen = () => setOpen(!open);

  //=================================== Fetch all Events ===================================
  const [eventYear, setEventYear] = useState([]);

  useEffect(() => {
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
    formdata.append("year", eventYearRef.current.value);

    create_new_eventYear(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_eventsYear().then((res) => {
          setEventYear(res.data.allEventYears);
        });
        e.target.reset();
        setOpen(false);
      } else {
        setError(response.data.errors);
      }
    });
    e.preventDefault();
  };

  //=================================== Edit Event ===================================
  const [editEventVal, setEditEventVal] = useState();
  const [editedEventId, setEditedEventId] = useState();
  const editEvent = (EventId, modalValue) => {
    edit_eventYear(EventId).then((res) => {
      setEditedEventId(EventId);
      setEditEventVal(res.data.editEventyear);
      setModalData(modalValue);
      setOpen(true);
    });
  };

  // ===================== Updated data to backend ===============================

  const updateEvent = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("year", eventYearRef.current.value);

    update_eventYear(editedEventId, formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_eventsYear().then((res) => {
          setEventYear(res.data.allEventYears);
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
    delete_eventYear(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_eventsYear().then((res) => {
          setEventYear(res.data.allEventYears);
        });
      }
    });
  };

  const TABLE_HEAD = ["#", "Event Year", "Handle"];
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">Event Years</div>
          </div>
          {/* <div className="breadcrumb-item p-0 text-white">All Events</div> */}
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
                  {eventYear?.map((data, index) => {
                    const isLast = index === eventYear.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    return (
                      <tr key={index}>
                        <td className={classes}>{index + 1}</td>
                        <td className={classes}>{data?.year}</td>
                        <td className={`${classes}`}>
                          <div className="flex items-center gap-2">
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
                  <div className="mb-1 flex flex-col gap-2 col-span-12">
                    <label
                      htmlFor="eventYearRef"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Event Year
                    </label>

                    <input
                      id="eventYearRef"
                      ref={eventYearRef}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Event Title"
                      required
                    />

                    <small className="text-red-500">{error?.year}</small>
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
              <form onSubmit={updateEvent}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="mb-1 flex flex-col gap-2 col-span-12">
                    <label
                      htmlFor="eventYearRef"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Event Year
                    </label>

                    <input
                      id="eventYearRef"
                      ref={eventYearRef}
                      defaultValue={editEventVal?.year}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Event Title"
                      required
                    />
                    <small className="text-red-500">{error?.year}</small>
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

export default AdminEventYears;
