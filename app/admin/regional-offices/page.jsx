"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  create_new_News,
  create_new_Office,
  delete_News,
  delete_Office,
  edit_Office,
  read_all_News,
  read_all_Offices,
  update_Office,
  view_Office,
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
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import Parse from "html-react-parser";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AdminRegionalOffices = () => {
  const officeName = useRef();
  const officeAddress = useRef();

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [descVal, setDescVal] = useState("");
  //   const handleOpen = () => setOpen(!open);

  //=================================== Fetch all Offices ===================================
  const [officeInfo, setOfficeInfo] = useState([]);

  useEffect(() => {
    read_all_Offices().then((res) => {
      setOfficeInfo(res.data?.all_offices);
    });
  }, []);

  // ============================= Add new Office =============================
  const addOffice = (modalValue) => {
    setModalData(modalValue);
    setOpen(true);
  };

  // ============================= form submit to backend ======================
  const storeData = (e) => {
    const formdata = new FormData();
    formdata.append("shop_name", officeName.current.value);
    formdata.append("shop_address", descVal);

    create_new_Office(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Offices().then((res) => {
          setOfficeInfo(res.data?.all_offices);
        });
        e.target.reset();
        setDescVal("", "html");
        setOpen(false);
      }
    });
    e.preventDefault();
  };

  // ===================== View single image ===================================
  const [singleOfficeInfo, setSingleOfficeInfo] = useState([]);
  const showSingleOffice = (modalValue, id) => {
    view_Office(id).then((res) => {
      setModalData(modalValue);
      setSingleOfficeInfo(res.data.view_office);
      setOpen(true);
    });
  };

  //=================================== Edit Slider ===================================
  const [editOfficeVal, setEditOfficeVal] = useState();
  const [editedOfficeId, setEditedOfficeId] = useState();
  const editOffice = (officeId, modalValue) => {
    edit_Office(officeId).then((res) => {
      setModalData(modalValue);
      setEditOfficeVal(res.data?.edit_office);
      setOpen(true);
      setEditedOfficeId(officeId);
    });
  };

  // ===================== Updated data to backend ===============================

  const updateOffice = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    formdata.append("shop_name", officeName.current.value);
    formdata.append("shop_address", descVal);

    update_Office(editedOfficeId, formdata).then((response) => {
      Swal.fire({
        icon: "success",
        text: response.data.message,
        confirmButtonColor: "#5eba86",
      });
      read_all_Offices().then((res) => {
        setOfficeInfo(res.data?.all_offices);
      });
      setOpen(false);
    });

    e.preventDefault();
  };

  // =============================== Delete Data ===============================
  const deleteData = (id) => {
    delete_Office(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Offices().then((res) => {
          setOfficeInfo(res.data?.all_offices);
        });
      }
    });
  };

  const TABLE_HEAD = ["#", "Office Outlet Name", "Handle"];
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-500/70">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">News</div>
          </div>
          <div className="breadcrumb-item p-0 text-white">All News</div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <div className="my-2">
                <div
                  onClick={() => addOffice("Add")}
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
                    {officeInfo?.map((data, index) => {
                      const isLast = index === officeInfo.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      return (
                        <tr key={index}>
                          <td className={classes}>{index + 1}</td>
                          <td className={classes}>{data?.shop_name}</td>
                          <td className={`${classes}`}>
                            <div className="flex items-center gap-2">
                              {/* view button */}
                              <button
                                onClick={() =>
                                  showSingleOffice("View", data.id)
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
                                onClick={() => editOffice(data.id, "Edit")}
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
                  <div className="mb-1 flex flex-col gap-2 col-span-12">
                    <label
                      htmlFor="officeName"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Office Outlet Name
                    </label>

                    <input
                      id="officeName"
                      ref={officeName}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="News Title"
                      required
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
                      ref={officeAddress}
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
                    // onClick={() => setOpen(false)}
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
              <form onSubmit={updateOffice}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="mb-1 flex flex-col gap-2 col-span-12">
                    <label
                      htmlFor="officeName"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Office Outlet Name
                    </label>

                    <input
                      id="officeName"
                      ref={officeName}
                      defaultValue={editOfficeVal?.shop_name}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="News Title"
                      required
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
                      ref={officeAddress}
                      // config={config}
                      tabIndex={1}
                      value={editOfficeVal.shop_address}
                      onChange={(newContent) => setDescVal(newContent)}
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    variant="outlined"
                    color="indigo"
                    // onClick={() => setOpen(false)}
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
              <h4>{singleOfficeInfo?.shop_name}</h4>

              <div className="mt-2">
                {Parse(`${singleOfficeInfo?.shop_address}`)}
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

export default AdminRegionalOffices;
