"use client";
import {
  Button,
  Checkbox,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import AdminMaster from "@/components/AdminMaster/AdminMaster";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
// import ReactQuill from "react-quill";
// import { QuillScript } from "@/utility/QuillScript";
import { AiOutlineClose, AiOutlinePlusCircle } from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import JoditEditor from "jodit-react";

const AddProduct = () => {
  const productName = useRef();
  const productImage = useRef();
  const productSmallImage = useRef();
  const cableDesignParameter = useRef();
  const categoryId = useRef();
  const specification = useRef();
  const applicationDesc = useRef();
  const constructionDesc = useRef();
  const voltageGradeDesc = useRef();
  const operatingTempDesc = useRef();
  const minBendingRadiusDesc = useRef();
  const standardDesc = useRef();
  const charLabel = useRef();
  const charImage = useRef();

  //   const GetTableDesign = async () => {
  //     await axios
  //       .get(
  //         `${BACKEND_BASE_URL}/api/admin/products/get-table-design/${designId.current.value}`
  //       )
  //       .then((res) => {
  //         setProductTableDesign(res?.data?.product_table_design?.table_design);
  //       });
  //   };

  //================= Fetch Product Categories ===========================
  const [category, setCategory] = useState([]);

  const renderAllCategories = async () => {
    await axios
      .get(`${BACKEND_BASE_URL}/api/admin/products/categories`)
      .then((res) => {
        setCategory(res.data.all_product_categories);
      });
  };

  useEffect(() => {
    renderAllCategories();
  }, []);

  // Image Preview
  const [files, setFile] = useState([]);
  const [files2, setFile2] = useState([]);
  const [files3, setFile3] = useState([]);

  const handleImgPreview = (e) => {
    let allfiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allfiles.push(e.target.files[i]);
    }
    if (allfiles.length > 0) {
      setFile(allfiles);
    }
  };

  const handleSmallImgPreview = (e) => {
    let allfiles2 = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allfiles2.push(e.target.files[i]);
    }
    if (allfiles2.length > 0) {
      setFile2(allfiles2);
    }
  };
  const handleTableImage = (e) => {
    let allfiles3 = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allfiles3.push(e.target.files[i]);
    }
    if (allfiles3.length > 0) {
      setFile3(allfiles3);
    }
  };

  // ============================================= CHECKBOX ====================
  const [checkboxVal, setCheckboxVal] = useState([]);

  // with add & remove filter
  const CheckHandler = (e) => {
    const value = e.target.value;
    setCheckboxVal((prev) =>
      checkboxVal.includes(value)
        ? prev.filter((cur) => cur !== value)
        : [...prev, e.target.value]
    );
  };

  //   ============================= Add Input field 1 ==========================
  const [inputFields, setInputFields] = useState([
    {
      char_image_label: "",
      char_image: "",
    },
  ]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  const handleFileChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.files[0];
    setInputFields(data);
  };

  const addFields = () => {
    let newfield = {
      char_image_label: "",
      char_image: "",
    };
    setInputFields([...inputFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  //   ============================= Add Input field 2 ==========================
  const [inputFields2, setInputFields2] = useState([
    {
      char_image_label2: "",
      char_image2: "",
    },
  ]);

  const handleFormChange2 = (index, event) => {
    let data = [...inputFields2];
    data[index][event.target.name] = event.target.value;
    setInputFields2(data);
  };

  const handleFileChange2 = (index, event) => {
    let data = [...inputFields2];
    data[index][event.target.name] = event.target.files[0];
    setInputFields2(data);
  };

  const addFields2 = () => {
    let newfield = {
      char_image_label2: "",
      char_image2: "",
    };
    setInputFields2([...inputFields2, newfield]);
  };

  const removeFields2 = (index) => {
    let data = [...inputFields2];
    data.splice(index, 1);
    setInputFields2(data);
  };

  // ============================= form submit to backend ======================

  const [applicationValue, setApplicationValue] = useState();
  const [constructionValue, setConstructionValue] = useState();
  const [voltageGradeValue, setVoltageGradeValue] = useState();
  const [operatingTempValue, setOperatingTempValue] = useState();
  const [minBendingRadiusValue, setMinBendingRadiusValue] = useState();
  const [standardValue, setStandardValue] = useState();
  // const [cableDesignParamterValue, setCableDesignParamterValue] = useState();

  const storeData = async (e) => {
    e.preventDefault();
    console.log(productImage.current.files[0]);
    const formdata = new FormData();
    formdata.append("name", productName.current.value);
    if (productImage.current.files[0]) {
      formdata.append("image", productImage.current.files[0]);
    }
    if (productSmallImage.current.files[0]) {
      formdata.append("small_image", productSmallImage.current.files[0]);
    }

    inputFields.forEach((item) => {
      if (item.char_image_label != "" && item.char_image_label != null) {
        formdata.append("label[]", item.char_image_label);
      }
      if ((item.char_image != "" && item.char_image) != null) {
        formdata.append("c_image[]", item.char_image);
      }
    });

    inputFields2.forEach((item) => {
      if (item.char_image_label2 != "" && item.char_image_label2 != null) {
        formdata.append("ic_label[]", item.char_image_label2);
      }
      if ((item.char_image2 != "" && item.char_image2) != null) {
        formdata.append("ic_image[]", item.char_image2);
      }
    });

    formdata.append("category_id", categoryId.current.value);
    formdata.append("specification", specification.current.value);
    formdata.append("application", applicationDesc.current.value);
    if (checkboxVal.length > 0) {
      formdata.append("color_code", checkboxVal);
    }
    formdata.append("construction", constructionDesc.current.value);
    formdata.append("voltage_grade", voltageGradeDesc.current.value);
    formdata.append("operating_temp", operatingTempDesc.current.value);
    formdata.append("min_bending_radius", minBendingRadiusDesc.current.value);
    formdata.append("standard", standardDesc.current.value);
    formdata.append("cable", standardDesc.current.value);
    if (cableDesignParameter.current.files[0]) {
      formdata.append(
        "cable_design_parameter",
        cableDesignParameter.current.files[0]
      );
    }

    // formdata.append("image", color.current.value);

    await axios
      .post(`${BACKEND_BASE_URL}/api/admin/products/store`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      .then((response) => {
        if (response.data.status === 200) {
          Swal.fire({
            icon: "success",
            text: response.data.message,
            confirmButtonColor: "#5eba86",
          });
          e.target.reset();
          setApplicationValue("");
          setConstructionValue("");
          setVoltageGradeValue("");
          setOperatingTempValue("");
          setMinBendingRadiusValue("");
          setStandardValue("");
          setFile([]);
          setInputFields([
            {
              char_image_label: "",
              char_image: "",
            },
          ]);
          setInputFields2([
            {
              char_image_label2: "",
              char_image2: "",
            },
          ]);
        }
      });
  };
  return (
    <AdminMaster>
      <div className="main__container p-4">
        <div className="content-wrapper">
          <div className="breadcrumb flex justify-between">
            <div className="breadcrumb-item">
              <Link href="/admin">Dashboard</Link>
              <Link href="add-new" className="before">
                Add New Product
              </Link>
            </div>
            <div className="breadcrumb-item p-0">
              <Link href="#">All Product</Link>
            </div>
          </div>

          <div className="content-wrapper">
            <div className="card">
              <div className="card-body">
                <span className="top-border"></span>
                <div className="my-2">
                  <Link href="all-products" className="flex items-center gap-4">
                    <Button className="flex items-center gap-3" color="green">
                      All product
                    </Button>
                  </Link>
                </div>

                <form
                  className="mt-8 mb-2 grid grid-cols-12 gap-5"
                  onSubmit={storeData}
                >
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label
                      htmlFor="productName"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Name
                    </label>

                    <input
                      id="productName"
                      ref={productName}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Product Name"
                      required
                    />
                  </div>

                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Specification
                    </label>
                    <input
                      ref={specification}
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Specification"
                      required
                    />
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Product Image (700*400)&nbsp;{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={productImage}
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
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Small Image (120*60)
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      // required
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={productSmallImage}
                      onChange={handleSmallImgPreview}
                    />
                    {files2.map((file, key) => {
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
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Characteristics Images
                      <span className="text-red-500">*</span>
                    </label>
                    {inputFields?.map((input, index) => {
                      return (
                        <div key={index} className="flex items-center gap-4">
                          <div className="flex items-center gap-3 w-[90%]">
                            <input
                              name={"char_image_label"}
                              value={input.char_image_label}
                              size="lg"
                              placeholder="Label"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              onChange={(event) =>
                                handleFormChange(index, event)
                              }
                            />
                            <input
                              // required
                              type="file"
                              className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                              name={"char_image"}
                              onChange={(event) =>
                                handleFileChange(index, event)
                              }
                            />
                            {/* {files.map((file, key) => {
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
                            })} */}
                          </div>
                          <div className="flex items-center gap-2 w-[10%]">
                            <div className="">
                              <div className="">
                                <AiOutlinePlusCircle
                                  onClick={addFields}
                                  className="cursor-pointer text-blue-500 rounded-lg"
                                  size={20}
                                />
                              </div>
                            </div>
                            <div className="">
                              {inputFields.length > 1 && (
                                <div
                                  onClick={() => removeFields(index)}
                                  className="cursor-pointer text-red-500 rounded-lg"
                                >
                                  <AiOutlineClose size={20} />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mb-1 flex flex-col gap-2 col-span-6">
                    <label className="block text-sm font-medium text-gray-900 dark:text-white">
                      Installation Condition Images
                      <span className="text-red-500">*</span>
                    </label>
                    {inputFields2?.map((input, index) => {
                      return (
                        <div key={index} className="flex items-center gap-4">
                          <div className="flex items-center gap-3 w-[90%]">
                            <input
                              name={"char_image_label2"}
                              value={input.char_image_label2}
                              size="lg"
                              placeholder="Label"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              labelProps={{
                                className:
                                  "before:content-none after:content-none",
                              }}
                              onChange={(event) =>
                                handleFormChange2(index, event)
                              }
                            />
                            <input
                              // required
                              type="file"
                              className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                              name={"char_image2"}
                              onChange={(event) =>
                                handleFileChange2(index, event)
                              }
                            />
                          </div>
                          <div className="flex items-center gap-2 w-[10%]">
                            <div className="">
                              <div className="">
                                <AiOutlinePlusCircle
                                  onClick={addFields2}
                                  className="cursor-pointer text-blue-500 rounded-lg"
                                  size={20}
                                />
                              </div>
                            </div>
                            <div className="">
                              {inputFields2.length > 1 && (
                                <div
                                  onClick={() => removeFields2(index)}
                                  className="cursor-pointer text-red-500 rounded-lg"
                                >
                                  <AiOutlineClose size={20} />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-4">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Select Category
                    </Typography>
                    <div className="w-full">
                      <select label="Main" ref={categoryId} className="w-full">
                        <option value="0">Main</option>
                        {category.map((data, index) => {
                          return (
                            <option key={index} value={data.id}>
                              {data.category_name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-8">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Select Color
                    </Typography>
                    <div className="flex flex-wrap w-max gap-2">
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="red"
                        value="Red-#FF0000"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="yellow"
                        value="Yellow-#faee11"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="blue"
                        value="Blue-#1111fa"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="black"
                        value="Black-#000"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="green"
                        value="Green-#00c203"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="grey"
                        value="Grey-#919191"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="white"
                        value="White-#fff"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="off white"
                        value="Off white-#F2F1EE"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                      <Checkbox
                        ripple={false}
                        color="blue"
                        label="brown"
                        value="Brown-#914900"
                        className="w-4 h-4"
                        onClick={CheckHandler}
                      />
                    </div>
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Application
                    </Typography>
                    <JoditEditor
                      ref={applicationDesc}
                      // config={config}
                      tabIndex={1}
                      value={applicationValue}
                    />
                    {/* <ReactQuill
                      className=" block w-full text-gray-700 bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                      theme="snow"
                      value={applicationValue}
                      ref={applicationDesc}
                      modules={QuillScript.modules}
                      formats={QuillScript.formats}
                    /> */}
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Construction
                    </Typography>
                    <JoditEditor
                      ref={constructionDesc}
                      // config={config}
                      tabIndex={1}
                      value={applicationValue}
                    />
                    {/* <ReactQuill
                      className=" block w-full  text-gray-700 bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                      theme="snow"
                      value={applicationValue}
                      ref={constructionDesc}
                      modules={QuillScript.modules}
                      formats={QuillScript.formats}
                    /> */}
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Voltage Grade
                    </Typography>
                    <JoditEditor
                      ref={voltageGradeDesc}
                      // config={config}
                      tabIndex={1}
                      value={voltageGradeValue}
                    />
                    {/* <ReactQuill
                      className=" block w-full  text-gray-700 bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                      theme="snow"
                      value={voltageGradeValue}
                      ref={voltageGradeDesc}
                      modules={QuillScript.modules}
                      formats={QuillScript.formats}
                    /> */}
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Operating Temp
                    </Typography>
                    <JoditEditor
                      ref={operatingTempDesc}
                      // config={config}
                      tabIndex={1}
                      value={operatingTempValue}
                    />
                    {/* <ReactQuill
                      className=" block w-full  text-gray-700 bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                      theme="snow"
                      value={operatingTempValue}
                      ref={operatingTempDesc}
                      modules={QuillScript.modules}
                      formats={QuillScript.formats}
                    /> */}
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Min Bending Radius
                    </Typography>
                    <JoditEditor
                      ref={minBendingRadiusDesc}
                      // config={config}
                      tabIndex={1}
                      value={minBendingRadiusValue}
                    />
                    {/* <ReactQuill
                      className=" block w-full  text-gray-700 bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                      theme="snow"
                      value={minBendingRadiusValue}
                      ref={minBendingRadiusDesc}
                      modules={QuillScript.modules}
                      formats={QuillScript.formats}
                    /> */}
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-6">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Standard
                    </Typography>
                    <JoditEditor
                      ref={standardDesc}
                      // config={config}
                      tabIndex={1}
                      value={standardValue}
                    />
                    {/* <ReactQuill
                      className=" block w-full  text-gray-700 bg-transparent appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner min-h-[250px] h-full pb-[50px]"
                      theme="snow"
                      value={standardValue}
                      ref={standardDesc}
                      modules={QuillScript.modules}
                      formats={QuillScript.formats}
                    /> */}
                  </div>
                  <div className="mb-1 flex flex-col gap-6 col-span-12">
                    <input
                      type="file"
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                      ref={cableDesignParameter}
                      onChange={handleTableImage}
                    />
                    {files3.map((file, key) => {
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
                  </div>

                  <button
                    type="submit"
                    className="min-w-max btn-submit mt-5 rounded-3 border-0"
                  >
                    <FiSave /> &nbsp; Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminMaster>
  );
};

export default AddProduct;