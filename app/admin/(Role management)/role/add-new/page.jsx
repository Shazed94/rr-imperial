"use client";
import ToasterAlert from "@/components/ToasterAlert";
import { create_new_Role, read_all_Permission } from "@/utility/api";
import { Button, Checkbox, Typography } from "@material-tailwind/react";
import Link from "next/link";
import React, { Suspense, useEffect, useRef, useState } from "react";

const RoleManagement = () => {
  const roleName = useRef();
  const [permission, setPermission] = useState([]);
  const [singlePermissionChecked, setSinglePermissionChecked] = useState([]);
  const [error, setError] = useState([]);

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
  const TABLE_HEAD = ["Permission Name", "Handle"];

  // ============================= form submit to backend ======================
  const storeRole = (e) => {
    const formdata = new FormData();
    formdata.append("name", roleName.current.value);
    singlePermissionChecked.forEach((item) => {
      formdata.append("permission[]", parseInt(item));
    });

    create_new_Role(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Permission().then((res) => {
          setPermission(res.data.permission);
        });
        e.target.reset();
      } else {
        setError(res.data?.errors);
        toast.promise(saveSettings(settings), {
          loading: "Saving...",
          error: <b>{res.data?.message}</b>,
        });
      }
    });
    e.preventDefault();
  };

  useEffect(() => {
    read_all_Permission().then((res) => {
      setPermission(res.data.permission);
    });
  }, []);

  return (
    <div>
      <ToasterAlert />
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

                <form onSubmit={storeRole} className="my-6">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="mb-1 flex flex-col gap-2 col-span-12">
                      <label
                        htmlFor="roleName"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Role Name
                      </label>

                      <input
                        id="roleName"
                        ref={roleName}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="role"
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

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="outlined"
                      color="indigo"
                      // onClick={handleOpen}
                      className="mx-auto mt-6"
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
    </div>
  );
};

export default RoleManagement;
