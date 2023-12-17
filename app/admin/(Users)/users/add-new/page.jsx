"use client";

import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import ToasterAlert from "@/components/ToasterAlert";
import { read_all_Permission } from "@/utility/api";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";

const UserAdd = () => {
  const userName = useRef();
  const userEmail = useRef();
  const userPassword = useRef();

  const [permission, setPermission] = useState([]);
  const [singlePermissionChecked, setSinglePermissionChecked] = useState([]);

  const handlePermission = (e) => {
    if (e.target.checked) {
      setSinglePermissionChecked([
        ...singlePermissionChecked,
        parseInt(e.target.value),
      ]);
    } else {
      setSinglePermissionChecked(
        singlePermissionChecked.filter((id) => id !== e.target.value)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", userName.current.value);
    formdata.append("email", userEmail.current.value);
    formdata.append("password", userPassword.current.value);
    singlePermissionChecked.forEach((item) => {
      formdata.append("permission_id[]", item);
    });

    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/api/admin/users/store`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${getCookie("admin_access_token")}`,
          },
        }
      );

      if (response.data.status === 400) {
        if (response.data.errors) {
          const { email, password } = response.data.errors;
          setAdminEmailError(email);
          setAdminPassError(password);
        }
        toast.error(response.data.message);
      } else {
        // setCookie("admin_access_token", response.data?.admin_access_token, {
        //   maxAge: 60 * 60 * 24,
        // });

        toast.success(response.data.message);
        // Redirect to the dashboard after successful login
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login.");
    }
  };
  const TABLE_HEAD = ["Permission Name", "Handle"];

  useEffect(() => {
    read_all_Permission().then((res) => {
      setPermission(res.data.all_permissions);
    });
  }, []);

  return (
    <div className="main__container p-4">
      <ToasterAlert />
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">Add user</div>
          </div>
          <Link href="/admin/users" className="breadcrumb-item p-0 text-white">
            All Users
          </Link>
        </div>
        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <form className="" onSubmit={handleSubmit}>
                <div className="grid grid-cols-12 gap-4 mt-5">
                  <div className="mb-1 flex flex-col gap-2 col-span-4">
                    <label
                      htmlFor="userName"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>

                    <input
                      id="userName"
                      ref={userName}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="News Title"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-4">
                    <label
                      htmlFor="userEmail"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>

                    <input
                      id="userEmail"
                      ref={userEmail}
                      type="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-4">
                    <label
                      htmlFor="userPassword"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>

                    <input
                      id="userPassword"
                      ref={userPassword}
                      type="password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="News Link"
                      required
                    />
                  </div>

                  <div className="mb-1 flex flex-col gap-2 col-span-12">
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
                        {permission?.map((data, index) => {
                          const isLast = index === permission.length - 1;
                          const classes = isLast
                            ? "p-4"
                            : "p-4 border-b border-blue-gray-50";
                          return (
                            <tr key={index}>
                              <td className={classes}>{data?.name}</td>

                              <td className={`${classes}`}>
                                <Checkbox
                                  className="self-center"
                                  onChange={handlePermission}
                                  value={data?.id}
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex justify-center mt-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
