"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  delete_Contact,
  delete_Video,
  edit_Video,
  read_all_Career,
  read_all_Contact,
  read_all_Videos,
  update_Video,
  view_Career,
  view_Contact,
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
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const AdminContact = () => {
  
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  //=================================== Fetch all Contacts ===================================
  const [contactInfo, setcontactInfo] = useState([]);

  useEffect(() => {
    read_all_Contact().then((res) => {
      setcontactInfo(res.data?.contacts);
    });
  }, []);

  // ===================== View single Contact ===================================
  const [singleContactInfo, setSingleContactInfo] = useState([]);
  const showSingleContactInfo = (modalValue, id) => {
    view_Contact(id).then((res) => {
      setModalData(modalValue);
      setSingleContactInfo(res.data?.contact);
      setOpen(true);
    });
  };

  // =============================== Delete Data ===============================
  const deleteData = (id) => {
    delete_Contact(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Contact().then((res) => {
          setcontactInfo(res.data?.contacts);
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
            <div className="before">Contacts</div>
          </div>
          {/* <div className="breadcrumb-item p-0 text-white">All Videos</div> */}
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
                    {contactInfo?.map((data, index) => {
                      const isLast = index === contactInfo.length - 1;
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
                          <td className={classes}>{data?.phone}</td>
                          <td className={`${classes}`}>
                            <div className="flex items-center gap-2">
                              {/* view button */}
                              <button
                                onClick={() =>
                                  showSingleContactInfo("View", data.id)
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
          {modalData === "View" && (
            <>
              <h4 className="mb-1">
                <span className="font-bold">Name:</span>{" "}
                {singleContactInfo?.name}
              </h4>
              <h6 className="mb-1">
                <span className="font-bold">Email:</span>{" "}
                {singleContactInfo?.email}
              </h6>
              <h6 className="mb-1">
                <span className="font-bold">Contact Number: </span>
                {singleContactInfo?.phone}
              </h6>
              <p className="mb-1">
                <span className="font-bold">Subject: </span>
                {singleContactInfo?.subject}
              </p>
              <p className="mb-1">
                <span className="font-bold">Message: </span>
                {singleContactInfo?.message}
              </p>
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

export default AdminContact;
