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
import React, {  useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const RoleManagement = () => {
  const roleName = useRef();
  const [modalData, setModalData] = useState("");
  const [open, setOpen] = useState(false);
  const [permission, setPermission] = useState([]);
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

  // ============================= form submit to backend ======================
  const storeRole = (e) => {
    const formdata = new FormData();
    formdata.append("author", blogAuthor.current.value);
    formdata.append("title", blogTitle.current.value);
    formdata.append("description", descVal);
    if (blogImage.current.files[0]) {
      formdata.append("image", blogImage.current.files[0]);
    }

    create_new_Blog(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        read_all_Blogs().then((res) => {
          setBlogsInfo(res.data.allBlog);
        });
        e.target.reset();
        setOpen(false);
      }
    });
    e.preventDefault();
  };
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
                  <Link href="role/add-new" className="flex items-center gap-4">
                    <Button
                      className="flex items-center gap-3 rounded-none"
                      color="cyan"
                    >
                      <AiOutlinePlusCircle size={20} />
                      Add
                    </Button>
                  </Link>
                </div>
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
                <form onSubmit={storeRole}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="mb-1 flex flex-col gap-2 col-span-12">
                      <label
                        htmlFor="roleName"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Assign Role
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
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="outlined"
                      color="indigo"
                      onClick={() => setOpen(true)}
                      // onClick={handleOpen}
                      className="mx-auto mt-6"
                    >
                      <span>Save</span>
                    </Button>
                  </div>
                </form>
              </>
            )}
            {modalData === "Edit" && (
              <>
                <form onSubmit={updateNews}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="mb-1 flex flex-col gap-2 col-span-12">
                      <label
                        htmlFor="blogTitle"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Blog Title
                      </label>

                      <input
                        id="blogTitle"
                        ref={blogTitle}
                        defaultValue={editBlogVal?.title}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="News Title"
                        required
                      />
                    </div>

                    <div className="mb-1 flex flex-col gap-2 col-span-6">
                      <label
                        htmlFor="blogAuthor"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Blog Author
                      </label>

                      <input
                        id="blogAuthor"
                        ref={blogAuthor}
                        defaultValue={editBlogVal?.author}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="News Link"
                        required
                      />
                    </div>
                    <div className="mb-1 flex flex-col gap-2 col-span-6">
                      <label className="block text-sm font-medium text-gray-900 dark:text-white">
                        News Image (700*400)&nbsp;{" "}
                      </label>

                      <input
                        type="file"
                        className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                        ref={blogImage}
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
                        <img
                          className="img-thumbnail mt-1"
                          width={80}
                          height={50}
                          src={`${BACKEND_BASE_URL}/${editBlogVal?.image}`}
                          alt={blogTitle}
                          name="img"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      variant="outlined"
                      color="indigo"
                      onClick={() => setOpen(true)}
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
              // onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
};

export default RoleManagement;
