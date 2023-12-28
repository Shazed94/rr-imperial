"use client";

import {
  read_all_AdminUser,
  user_Login_Activity,
  user_Login_Activity_Delete,
} from "@/utility/api";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiFillEye, AiOutlinePlusCircle } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import moment from "moment";
import Swal from "sweetalert2";

const UserLoginActivity = () => {
  const [users, setAllUsers] = useState([]);

  const TABLE_HEAD = [
    "#",
    "Name",
    "Email",
    "Login Time",
    "Logout Time",
    "Handle",
  ];

  useEffect(() => {
    user_Login_Activity().then((res) => {
      setAllUsers(res.data.user_login_activity);
    });
  }, []);

  const deleteData = (id) => {
    user_Login_Activity_Delete(id).then((res) => {
      if (res) {
        Swal.fire({
          icon: "success",
          text: res.data.message,
          confirmButtonColor: "#5eba86",
        });
        user_Login_Activity().then((res) => {
          setAllUsers(res.data.user_login_activity);
        });
      }
    });
  };

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

              <table className="w-full min-w-max table-auto text-left mt-8">
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
                        <td className={classes}>{data?.user_info?.name}</td>
                        <td className={classes}>{data?.user_info?.email}</td>
                        <td className={classes}>
                          {moment(data?.login_time).format(
                            "DD MMM Y, h:mm:ss a"
                          )}
                        </td>
                        <td className={classes}>
                          {data?.logout_time != null
                            ? moment(data?.logout_time).format(
                                "DD MMM Y, h:mm:ss a"
                              )
                            : "Not yet logged out!"}
                        </td>

                        <td className={`${classes}`}>
                          <div className="flex items-center gap-2">
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
    </div>
  );
};

export default UserLoginActivity;
