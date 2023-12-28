"use client";

import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import ToasterAlert from "@/components/ToasterAlert";
import {
  edit_AdminUser,
  read_all_Permission,
  update_AdminUser,
} from "@/utility/api";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import axios from "axios";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const UserEdit = ({ params }) => {
  var selectedPermissions;
  const userName = useRef();
  const userEmail = useRef();

  const [userInfo, setUserInfo] = useState();
  const [allPermissions, setAllPermissions] = useState([]);

  const [singlePermissionChecked, setSinglePermissionChecked] = useState([]);
  const [selectedOldPermissions, setSelectedOldPermissions] = useState([]);
  const handlePermission = (e) => {
    if (e.target.checked) {
      setSinglePermissionChecked([...singlePermissionChecked, e.target.value]);
    } else {
      setSinglePermissionChecked(
        singlePermissionChecked.filter((id) => id !== e.target.value)
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("_method", "PUT");
    singlePermissionChecked.forEach((item) => {
      formdata.append("permission_id[]", item);
    });

    update_AdminUser(params.id, formdata).then((res) => {
      if (res.data.status === 400) {
        toast.error(res.data.message);
      } else {
        toast.success(res.data.message);
        // Redirect to the dashboard after successful login
      }
    });
  };
  const TABLE_HEAD = ["Permission Name", "Permission"];

  useEffect(() => {
    read_all_Permission().then((res) => {
      setAllPermissions(res.data.all_permissions);
    });
    edit_AdminUser(params.id).then((res) => {
      setUserInfo(res.data.single_user_info);
      setSelectedOldPermissions(res.data?.single_user_info?.permission_info);
    });
  }, []);

  useEffect(() => {
    let a = [];
    selectedOldPermissions?.forEach((item) => {
      a.push(item.permission_id);
    });

    setSinglePermissionChecked(a);
  }, [selectedOldPermissions]);

  console.log(singlePermissionChecked);
  return (
    <div className="main__container p-4">
      <ToasterAlert />
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item flex items-center ">
            <Link href="/admin/dashboard">Dashboard</Link>
            <div className="before">Edit user</div>
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
                      ref={userName}
                      defaultValue={userInfo?.name}
                      autoComplete="off"
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="News Title"
                      required
                      disabled
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
                      defaultValue={userInfo?.email}
                      type="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="email"
                      required
                      disabled
                    />
                  </div>
                  {/* <div className="mb-1 flex flex-col gap-2 col-span-4">
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
                      placeholder="password"
                      required
                    />
                  </div> */}

                  <div className="mb-1 flex flex-col gap-2 col-span-12">
                    <table className="w-full min-w-max table-auto text-left">
                      <thead>
                        <tr>
                          {TABLE_HEAD.map((head) => (
                            <th
                              key={head}
                              className="border-b border-blue-gray-100 bg-blue-gray-50 px-4 py-2"
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
                        {allPermissions?.map((AllPermissions, index) => {
                          const isLast = index === allPermissions.length - 1;
                          const classes = isLast
                            ? "px-4 py-1"
                            : "px-4 py-1 border-b border-blue-gray-50";
                          return (
                            <tr key={index}>
                              <td className={classes}>
                                {AllPermissions?.name}
                              </td>
                              <td className={`${classes} checkbox_td`}>
                                {userInfo?.permission_info?.map(
                                  (permission, i) => {
                                    if (
                                      AllPermissions?.id ==
                                      permission?.permission_id
                                    ) {
                                      selectedPermissions =
                                        permission?.permission_id;
                                    }
                                    return (
                                      AllPermissions?.id ==
                                        permission?.permission_id && (
                                        <Checkbox
                                          key={i}
                                          className="self-center"
                                          onChange={handlePermission}
                                          value={AllPermissions?.id}
                                          type="checkbox"
                                          defaultChecked="checked"
                                        />
                                      )
                                    );
                                  }
                                )}
                                {selectedPermissions != AllPermissions?.id && (
                                  <Checkbox
                                    // className="self-center"
                                    onChange={handlePermission}
                                    value={AllPermissions?.id}
                                    type="checkbox"
                                  />
                                )}
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

export default UserEdit;
