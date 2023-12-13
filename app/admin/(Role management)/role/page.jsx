"use client";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { Suspense } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const RoleManagement = () => {
  const TABLE_HEAD = ["#", "Role", "Page", "Handle"];

  const sliders = [
    { role: "Admin", name: "Products" },
    { role: "Admin", name: "Slider Elements" },
    { role: "Admin", name: "Calculator" },
    { role: "Admin", name: "Price List PDF" },
    { role: "Admin", name: "News" },
    { role: "Admin", name: "Blogs" },
    { role: "Admin", name: "Events" },
    { role: "Admin", name: "Videos" },
    { role: "Admin", name: "Career" },
    { role: "Admin", name: "Contact" },
  ];
  return (
    <div>
      <div className="main__container p-4">
        <div className="content-wrapper">
          <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-500/70">
            <div className="breadcrumb-item flex items-center ">
              <Link href="/admin/dashboard">Dashboard</Link>
              <div className="before">Role Management</div>
            </div>
            {/* <div className="breadcrumb-item p-0">
              <Link href="#">All Category</Link>
            </div> */}
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
                      {sliders?.map((data, index) => {
                        const isLast = index === sliders.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";
                        return (
                          <tr key={index}>
                            <td className={classes}>{index + 1}</td>
                            <td className={classes}>{data?.role}</td>
                            <td className={classes}>{data?.name}</td>
                            <td className={`${classes}`}>
                              <div className="flex items-center gap-2">
                                {/* view button */}
                                {/* <button
                                  onClick={() =>
                                    showSingleSlider("View", data.id)
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
                                </button> */}
                                {/* edit button */}
                                {/* <button
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
                                </button> */}
                                {/* delete button */}
                                {/* <button
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
                                </button> */}
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
      </div>
    </div>
  );
};

export default RoleManagement;
