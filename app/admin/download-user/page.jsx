"use client";
import { read_all_Users } from "@/utility/api";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaEye } from "react-icons/fa";

const AdminDownloadUser = () => {
  //   const handleOpen = () => setOpen(!open);

  //=================================== Fetch all users ===================================
  const [allCustomers, setAllCustomers] = useState([]);

  useEffect(() => {
    read_all_Users().then((res) => {
      setAllCustomers(res.data.download_infos);
    });
  }, []);

  const TABLE_HEAD = ["#", "Name", "Email", "Phone No"];
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
                  {allCustomers?.map((data, index) => {
                    const isLast = index === allCustomers.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    return (
                      <tr key={index}>
                        <td className={classes}>{index + 1}</td>
                        <td className={classes}>
                          {data?.first_name + " " + data?.last_name}
                        </td>
                        <td className={classes}>{data?.email}</td>
                        <td className={classes}>{data?.contact_no}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </AdminMaster>
  );
};

export default AdminDownloadUser;
