"use client";
import { Checkbox, Typography } from "@material-tailwind/react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import AdminMaster from "@/components/AdminMaster/AdminMaster";
import {
  AiFillCloseSquare,
  AiOutlineClose,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { FiSave } from "react-icons/fi";
import dynamic from "next/dynamic";
import {
  create_new_Product,
  read_all_Category,
  read_all_Product_Colors,
} from "@/utility/api";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AddProduct = () => {
  const [isSubmitted, setSubmitted] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [singlePermissionChecked, setSinglePermissionChecked] = useState([]);

  const [error, setError] = useState(false);
  const productName = useRef();
  const productImage = useRef();
  const productSmallImage = useRef();
  const cableDesignParameter = useRef();
  const categoryId = useRef();
  const specification = useRef();
  const applicationDesc = useRef();
  const propertiesDesc = useRef();
  const constructionDesc = useRef();
  const voltageGradeDesc = useRef();
  const operatingTempDesc = useRef();
  const minBendingRadiusDesc = useRef();
  const standardDesc = useRef();

  //================= Fetch Product Categories ===========================
  const [category, setCategory] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    read_all_Category().then((res) => {
      setCategory(res.data.all_product_categories);
    });
    read_all_Product_Colors().then((res) => {
      setColors(res.data.all_colors);
    });
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

  //   ============================= Add Input field 3 ==========================
  const [inputFields3, setInputFields3] = useState([
    {
      test_name: "",
      test_method: "",
      test_value: "",
    },
  ]);

  const handleFormChange3 = (index, event) => {
    let data = [...inputFields3];
    data[index][event.target.name] = event.target.value;
    setInputFields3(data);
  };

  const addFields3 = () => {
    let newfield = {
      test_name: "",
      test_method: "",
      test_value: "",
    };
    setInputFields3([...inputFields3, newfield]);
  };

  const removeFields3 = (index) => {
    let data = [...inputFields3];
    data.splice(index, 1);
    setInputFields3(data);
  };

  // =============================================================

  const handleSubmit = () => {
    setSubmitted(true);
  };
  const handleInput = () => {
    setSubmitted(false);
  };

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map((file) => {
      return file;
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const handleColor = (e) => {
    if (e.target.checked) {
      setSinglePermissionChecked([...singlePermissionChecked, e.target.value]);
    } else {
      setSinglePermissionChecked(
        singlePermissionChecked.filter((id) => id !== e.target.value)
      );
    }
  };

  // ============================= form submit to backend ======================

  const [applicationValue, setApplicationValue] = useState("");
  const [constructionValue, setConstructionValue] = useState("");
  const [propertiesValue, setPropertiesValue] = useState("");
  const [voltageGradeValue, setVoltageGradeValue] = useState("");
  const [operatingTempValue, setOperatingTempValue] = useState("");
  const [minBendingRadiusValue, setMinBendingRadiusValue] = useState("");
  const [standardValue, setStandardValue] = useState();

  const storeData = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", productName.current.value);
    formdata.append("specification", specification.current.value);

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

    // if (checkboxVal.length > 0) {
    //   formdata.append("color_code", checkboxVal);
    // }
    singlePermissionChecked.forEach((color) => {
      formdata.append("color_id[]", color);
    });

    inputFields3.forEach((item) => {
      if (item.test_name != "" && item.test_name != null) {
        formdata.append("test_name[]", item.test_name);
      }
      if ((item.test_method != "" && item.test_method) != null) {
        formdata.append("test_method[]", item.test_method);
      }
      if ((item.test_value != "" && item.test_value) != null) {
        formdata.append("test_value[]", item.test_value);
      }
    });

    formdata.append("application", applicationValue);
    formdata.append("construction", constructionValue);
    formdata.append("properties", propertiesValue);
    formdata.append("voltage_grade", voltageGradeValue);
    formdata.append("operating_temp", operatingTempValue);
    formdata.append("min_bending_radius", minBendingRadiusValue);
    formdata.append("standard", standardValue);

    selectedImages.forEach((item) => {
      formdata.append("cable_design_parameter[]", item);
    });

    create_new_Product(formdata).then((response) => {
      if (response.data.status === 200) {
        Swal.fire({
          icon: "success",
          text: response.data.message,
          confirmButtonColor: "#5eba86",
        });
        e.target.reset();
        setApplicationValue("", "html");
        setConstructionValue("", "html");
        setPropertiesValue("", "html");
        setVoltageGradeValue("", "html");
        setOperatingTempValue("", "html");
        setMinBendingRadiusValue("", "html");
        setStandardValue("", "html");
        setFile([]);
        setFile2([]);
        setFile3([]);
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
        setSubmitted(false);
      } else {
        setError(response.data.errors);
      }
    });
  };
  return (
    // <AdminMaster>
    <div className="main__container p-4">
      <div className="content-wrapper">
        <div className="breadcrumb flex justify-between shadow-lg shadow-cyan-400/80">
          <div className="breadcrumb-item">
            <Link href="/admin">Dashboard</Link>
            <Link href="add-new" className="before">
              Add New Product
            </Link>
          </div>
          <div className="breadcrumb-item p-0">
            <Link href="/admin/products/all-products">All Product</Link>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="card">
            <div className="card-body">
              <span className="top-border"></span>
              <form
                className="mt-8 mb-2 grid grid-cols-12 gap-5"
                onSubmit={storeData}
              >
                <div className="mb-1 flex flex-col gap-2 col-span-6">
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Product Name
                  </label>

                  <input
                    ref={productName}
                    type="text"
                    className={`bg-gray-50 border ${
                      isSubmitted && !productName.current.value
                        ? "focus:border-red-600 focus:ring-red-600"
                        : "border-gray-300 ring-gray-300"
                    } border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-blue-500 focus:ring-blue-500`}
                    placeholder="Product Name"
                    required
                    onChange={handleInput}
                  />
                  {isSubmitted && !productName.current.value && (
                    <small className="text-red-500 text-xs mt-1">
                      Product Name is required
                    </small>
                  )}
                </div>

                <div className="mb-1 flex flex-col gap-2 col-span-6">
                  <label className="block text-sm font-medium text-gray-900 dark:text-white">
                    Specification
                  </label>
                  <input
                    ref={specification}
                    type="text"
                    className={`bg-gray-50 border ${
                      isSubmitted && !specification.current.value
                        ? "focus:border-red-600 focus:ring-red-600"
                        : "border-gray-300 ring-gray-300"
                    } border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-blue-500 focus:ring-blue-500`}
                    placeholder="Specification"
                    required
                    onChange={handleInput}
                  />
                  {isSubmitted && !specification.current.value && (
                    <small className="text-red-500 text-xs mt-1">
                      Specification is required
                    </small>
                  )}
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

                  {error && (
                    <small className="text-red-500 text-xs mt-1">
                      {error?.image}
                    </small>
                  )}
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
                  {error && (
                    <small className="text-red-500 text-xs mt-1">
                      {error?.small_image}
                    </small>
                  )}
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
                            onChange={(event) => handleFormChange(index, event)}
                          />
                          <input
                            // required
                            type="file"
                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                            name={"char_image"}
                            onChange={(event) => handleFileChange(index, event)}
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
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
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
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Select Color
                  </Typography>
                  <div className="flex flex-wrap w-full gap-2">
                    {/* <Select
                      isMulti
                      options={colors?.map((colorInfo) => {
                        return {
                          label: colorInfo.name,
                          value: colorInfo.id,
                        };
                      })}
                      placeholder="Select Status"
                      classNamePrefix="react-select"
                      className="w-full"
                      onChange={(value = "") => {
                        handleColor(value);
                      }}
                    /> */}
                    {colors?.map((pData, i) => (
                      <div key={i} className="mb-3">
                        <Checkbox
                          onChange={handleColor}
                          type="checkbox"
                          label={pData?.name}
                          value={pData?.id}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-12">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Test Parameters
                  </Typography>
                  {inputFields3?.map((input, index) => {
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <div className="flex items-center gap-3 w-[90%]">
                          <input
                            name={"test_name"}
                            value={input.test_name}
                            size="lg"
                            placeholder="Test name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                            onChange={(event) =>
                              handleFormChange3(index, event)
                            }
                          />
                          <input
                            name={"test_method"}
                            value={input.test_method}
                            size="lg"
                            placeholder="Test method"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                            onChange={(event) =>
                              handleFormChange3(index, event)
                            }
                          />
                          <input
                            name={"test_value"}
                            value={input.test_value}
                            size="lg"
                            placeholder="Test value"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            labelProps={{
                              className:
                                "before:content-none after:content-none",
                            }}
                            onChange={(event) =>
                              handleFormChange3(index, event)
                            }
                          />
                        </div>
                        <div className="flex items-center gap-2 w-[10%]">
                          <div className="">
                            <div className="">
                              <AiOutlinePlusCircle
                                onClick={addFields3}
                                className="cursor-pointer text-blue-500 rounded-lg"
                                size={20}
                              />
                            </div>
                          </div>
                          <div className="">
                            {inputFields3.length > 1 && (
                              <div
                                onClick={() => removeFields3(index)}
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

                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Application
                  </Typography>
                  <JoditEditor
                    ref={applicationDesc}
                    // config={config}
                    tabIndex={1}
                    value={applicationValue}
                    onChange={(newContent) => setApplicationValue(newContent)}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Construction
                  </Typography>
                  <JoditEditor
                    ref={constructionDesc}
                    // config={config}
                    tabIndex={1}
                    value={constructionValue}
                    onChange={(newContent) => setConstructionValue(newContent)}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Properties
                  </Typography>
                  <JoditEditor
                    ref={propertiesDesc}
                    // config={config}
                    tabIndex={1}
                    value={propertiesValue}
                    onChange={(newContent) => setPropertiesValue(newContent)}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Voltage Grade
                  </Typography>
                  <JoditEditor
                    ref={voltageGradeDesc}
                    // config={config}
                    tabIndex={1}
                    value={voltageGradeValue}
                    onChange={(newContent) => setVoltageGradeValue(newContent)}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Operating Temp
                  </Typography>
                  <JoditEditor
                    ref={operatingTempDesc}
                    // config={config}
                    tabIndex={1}
                    value={operatingTempValue}
                    onChange={(newContent) => setOperatingTempValue(newContent)}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Min Bending Radius
                  </Typography>
                  <JoditEditor
                    ref={minBendingRadiusDesc}
                    // config={config}
                    tabIndex={1}
                    value={minBendingRadiusValue}
                    onChange={(newContent) =>
                      setMinBendingRadiusValue(newContent)
                    }
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Standard
                  </Typography>
                  <JoditEditor
                    ref={standardDesc}
                    // config={config}
                    tabIndex={1}
                    value={standardValue}
                    onChange={(newContent) => setStandardValue(newContent)}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-6 col-span-12">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Cable Design Parameter
                  </Typography>
                  <input
                    multiple
                    type="file"
                    className="block w-full text-sm text-slate-500 file:mr-4 file:py-3 file:px-4  file:border-0 file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 border border-gray-300 rounded-lg"
                    ref={cableDesignParameter}
                    onChange={onSelectFile}
                  />
                  <div className="flex gap-6">
                    {selectedImages &&
                      selectedImages.map((image, index) => {
                        return (
                          <div key={index} className="flex">
                            <img
                              src={URL.createObjectURL(image)}
                              height="68"
                              width="68"
                              alt="upload"
                            />
                            <div className="d-flex justify-content-between">
                              <AiFillCloseSquare
                                className="cursor "
                                size="1.8rem"
                                color="red"
                                onClick={() => deleteHandler(image)}
                              />
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="col-span-12 flex justify-center">
                  <button
                    type="submit"
                    className="flex items-center gap-2 mt-5 px-6 py-3  rounded-lg border-0 bg-cyan-400 text-white"
                    onClick={handleSubmit}
                  >
                    <FiSave /> &nbsp; <span>Save</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </AdminMaster>
  );
};

export default AddProduct;
