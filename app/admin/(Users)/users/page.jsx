"use client";

import { read_all_AdminUser } from "@/utility/api";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { AiFillEye, AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const User = () => {
    const [users, setAllUsers] = useState([]);


  const TABLE_HEAD = ["#", "Name", "Email"];

    useEffect(() => {
      read_all_AdminUser().then((res) => {
        setAllUsers(res.data.all_users);
      });
    }, []);

  return (
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">User</div>
          </div>
          <div className="breadcrumb-item p-0 text-white">All Users</div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <div className="my-2">
                <Link href="/admin/users/add-new" className="flex items-center gap-4">
                  <Button
                    className="flex items-center gap-3 rounded-none"
                    color="cyan"
                  >
                    <AiOutlinePlusCircle size={20} />
                    Add
                  </Button>
                </Link>
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
                    {users?.map((data, index) => {
                      const isLast = index === users.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
                      return (
                        <tr key={index}>
                          <td className={classes}>{index + 1}</td>
                          <td className={classes}>{data?.name}</td>
                          <td className={classes}>{data?.email}</td>
                          
                          {/* <td className={`${classes}`}>
                            <div className="flex items-center gap-2">
                              
                             
                              <button
                                onClick={() => editNews(data.id, "Edit")}
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
                          </td> */}
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
  );
};

export default User;
