"use client";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import {
  edit_PriceList,
  read_all_PriceList,
  update_PriceList,
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
import { BiEdit } from "react-icons/bi";
import Swal from "sweetalert2";

const AdminPriceList = () => {
  const priceListPdf = useRef();
  const shramikPriceListPdf = useRef();

  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  //   const handleOpen = () => setOpen(!open);

  //=================================== Fetch all PriceList ===================================
  const [pdfInfo, setPdfInfo] = useState([]);

  useEffect(() => {
    read_all_PriceList().then((res) => {
      setPdfInfo(res.data.price_list);
    });
  }, []);


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

  //=================================== Edit Video ===================================
  const [editPriceListVal, setEditPriceListVal] = useState();
  const [editedPriceListId, setEditedPriceListId] = useState();
  const editPriceList = (PriceListId, modalValue) => {
    edit_PriceList(PriceListId).then((res) => {
      setModalData(modalValue);
      setEditPriceListVal(res.data.edit_info);
      setOpen(true);
      setEditedPriceListId(PriceListId);
    });
  };

  // ===================== Updated data to backend ===============================

  const updatePriceList = (e) => {
    const formdata = new FormData();
    formdata.append("_method", "PUT");
    if (priceListPdf.current.files[0]) {
      formdata.append("cable_price_list", priceListPdf.current.files[0]);
    }
    if (shramikPriceListPdf.current.files[0]) {
      formdata.append(
        "shramik_price_list",
        shramikPriceListPdf.current.files[0]
      );
    }

    update_PriceList(editedPriceListId, formdata).then((response) => {
      Swal.fire({
        icon: "success",
        text: response.data.message,
        confirmButtonColor: "#5eba86",
      });
      read_all_PriceList().then((res) => {
        setPdfInfo(res.data.price_list);
      });
      setOpen(false);
    });

    e.preventDefault();
  };

  const TABLE_HEAD = ["#", "Cable Price List", "Shramik Price List", "Handle"];
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">Price List</div>
          </div>
          <div className="breadcrumb-item p-0 text-white">All Price List</div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <Suspense fallback={<div className="text-5xl">Loading...</div>}>
                <table className="w-full min-w-max table-auto text-left mt-5">
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
                    {pdfInfo?.map((data, index) => {
                      const isLast = index === pdfInfo.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      return (
                        <tr key={index}>
                          <td className={classes}>{index + 1}</td>
                          <td className={classes}>
                            <iframe
                              title="Cable Price List"
                              src={`${BACKEND_BASE_URL}${data?.cable_price_list}`}
                              width="100%"
                              height="350px"
                            />
                          </td>
                          <td className={classes}>
                            <iframe
                              title="Cable Price List"
                              src={`${BACKEND_BASE_URL}${data?.shramik_price_list}`}
                              width="100%"
                              height="350px"
                            />
                          </td>
                          <td className={`${classes}`}>
                            <div className="flex items-center gap-2">
                              {/* edit button */}
                              <button
                                onClick={() => editPriceList(data.id, "Edit")}
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
          {modalData === "Edit" && (
            <>
              <form onSubmit={updatePriceList}>
                <div className="grid grid-cols-12 gap-4">
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Price List Pdf
                    </label>

                    <input
                      type="file"
                      placeholder="Price List Pdf"
                      ref={priceListPdf}
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      required
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
                      <iframe
                        title="Cable Price List"
                        src={`${BACKEND_BASE_URL}/${editPriceListVal?.cable_price_list}`}
                        width="100%"
                        height="250px"
                        className="object-contain"
                      />
                    )}
                  </div>

                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Shramik Price List Pdf &nbsp;
                    </label>

                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      placeholder="Shramik Price List Pdf "
                      ref={shramikPriceListPdf}
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
                      <iframe
                        title="Cable Price List"
                        src={`${BACKEND_BASE_URL}/${editPriceListVal?.shramik_price_list}`}
                        width="100%"
                        height="250px"
                        className="object-contain"
                      />
                    )}
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

export default AdminPriceList;
