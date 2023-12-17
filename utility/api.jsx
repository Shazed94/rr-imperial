import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import axios from "axios";
import { getCookie } from "cookies-next";
import Swal from "sweetalert2";

//! ================== Dashboard Counts ===================
export const read_card_counts = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/card-count-master`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };

  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

// =============================== Permission ==================================

//! ================== Read All Permission ===================
export const read_all_Permission = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/users/all-permissions`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };

  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New Role ===================
export const create_new_Role = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/roles/store`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Read All Admin User ===================
export const read_all_AdminUser = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/users`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};

// =============================== Products ==================================

//! ================== Read All Product ===================
export const read_all_Products = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New Product ===================
export const create_new_Product = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products/store`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Product ===================
export const view_product = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products/view/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Update Blog ===================
export const update_Product = async (productId) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products/edit/${productId}`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single Product ===================
export const delete_Product = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/products/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Product Colors ==================================

//! ===================== Read all product colors ==========================
export const read_all_Product_Colors = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products/colors`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

// =============================== Category ==================================

//! ================== Read All Category ===================
export const read_all_Category = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products/categories`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New Category ===================
export const create_new_category = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products/categories/store`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};
//! ================== edit Category ===================
export const edit_Category = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products/categories/edit/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Update Category ===================
export const update_Category = async (id, formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/products/categories/update/${id}`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

// =============================== Sliders ==================================

//! ================== Read All Slider ===================
export const read_all_Slider = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/banners-image`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New Slider ===================
export const create_new_Slider = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/banners-image/store`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Product ===================
export const view_Slider = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/banners-image/view/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Edit Slider ===================
export const edit_Slider = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/banners-image/edit/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Update Slider ===================
export const update_Slider = async (id, formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/banners-image/update/${id}`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single Product ===================
export const delete_Slider = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/banners-image/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Price List PDF ==================================

//! ================== Read All PriceList ===================
export const read_all_PriceList = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/price-list`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Edit PriceList ===================
export const edit_PriceList = async (pdfId) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/price-list/edit/${pdfId}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Update PriceList ===================
export const update_PriceList = async (pdfId, formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/price-list/update/${pdfId}`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

// =============================== News ==================================

//! ================== Read All News ===================
export const read_all_News = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/news`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New News ===================
export const create_new_News = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/news/store`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Product ===================
export const view_News = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/news/view/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Edit News ===================
export const edit_News = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/news/edit/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Update News ===================
export const update_News = async (id, formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/news/update/${id}`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single News ===================
export const delete_News = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/news/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Blogs ==================================

//! ================== Read All Blogs ===================
export const read_all_Blogs = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/blogs`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New Blogs ===================
export const create_new_Blog = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/blogs/store`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Blog ===================
export const view_Blog = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/blogs/view/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Edit Blog ===================
export const edit_Blog = async (blogId) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/blogs/edit/${blogId}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Update Blog ===================
export const update_Blog = async (id, formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/blogs/update/${id}`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single Blog ===================
export const delete_Blog = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/blogs/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Events ==================================

//! ================== Read All Events ===================
export const read_all_Events = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/events`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New Event ===================
export const create_new_Event = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/events/store`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Event ===================
export const view_Event = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/events/view/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Edit Event ===================
export const edit_Event = async (eventId) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/events/edit/${eventId}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Update Event ===================
export const update_Event = async (id, formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/events/update/${id}`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single Event ===================
export const delete_Event = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/events/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Videos ==================================

//! ================== Read All Videos ===================
export const read_all_Videos = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/videos`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New Video ===================
export const create_new_Video = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/videos/store`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Video ===================
export const view_Video = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/videos/view/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Edit Video ===================
export const edit_Video = async (videoId) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/videos/edit/${videoId}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Update Video ===================
export const update_Video = async (id, formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/videos/update/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single Video ===================
export const delete_Video = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/videos/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Career ==================================

//! ================== Read All Career ===================
export const read_all_Career = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/careers/all`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Career ===================
export const view_Career = async (careerId) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/careers/${careerId}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single Career ===================
export const delete_Career = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/careers/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Contact ==================================

//! ================== Read All Contacts ===================
export const read_all_Contact = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/contacts/all`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Contact ===================
export const view_Contact = async (contactId) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/contacts/${contactId}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single Career ===================
export const delete_Contact = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/contacts/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Regional Offices ==================================

//! ================== Read All Offices ===================
export const read_all_Offices = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/regional-offices`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Create New Office ===================
export const create_new_Office = async (formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/regional-offices/store`;
  let HEADERS = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);

    return result;
  } catch (e) {
    return false;
  }
};

//! ================== View Single Office ===================
export const view_Office = async (id) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/regional-offices/view/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Edit Office ===================
export const edit_Office = async (officeId) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/regional-offices/edit/${officeId}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};
//! ================== Update Office ===================
export const update_Office = async (id, formdata) => {
  let URL = `${BACKEND_BASE_URL}/api/admin/regional-offices/update/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.post(URL, formdata, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

//! ================== Delete single Office ===================
export const delete_Office = async (id) => {
  const isConfirm = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "green",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    return result.isConfirmed;
  });

  if (!isConfirm) {
    return;
  }

  let URL = `${BACKEND_BASE_URL}/api/admin/regional-offices/delete/${id}`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  if (isConfirm) {
    try {
      const deleteResult = await axios.delete(URL, HEADERS);
      return deleteResult;
    } catch (e) {
      return false;
    }
  }
};

// =============================== Download User ==================================

//! ================== Read All Users ===================
export const read_all_Users = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/all-download-info`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };
  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

// =============================== Logout Admin ==================================

//! ================== Admin Logout ===================
export const admin_logout = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/logout`;
  let HEADERS = {
    headers: {
      Authorization: `Bearer ${getCookie("admin_access_token")}`,
    },
  };

  try {
    const result = await axios.get(URL, HEADERS);
    return result;
  } catch (e) {
    return false;
  }
};

// ?=======================================================================================================================
//? ============================================ Frontend =================================================================
//? =======================================================================================================================

//! =============================== FEATURED CATEGORIES ==================================
export const all_featured_categories = async () => {
  let URL = `${BACKEND_BASE_URL}/api/products-categories`;
  try {
    const result = await axios.get(URL);
    return result;
  } catch (e) {
    return false;
  }
};
//! =============================== All Media Frontend ==================================
export const all_Media_Front = async () => {
  let URL = `${BACKEND_BASE_URL}/api/all-medias`;
  try {
    const result = await axios.get(URL);
    return result;
  } catch (e) {
    return false;
  }
};
//! =============================== News Frontend details ==================================
export const single_News_Front = async (newsId) => {
  let URL = `${BACKEND_BASE_URL}/api/news/${newsId}`;
  try {
    const result = await axios.get(URL);
    return result;
  } catch (e) {
    return false;
  }
};
// //! =============================== All Price List Frontend ==================================
export const all_Pricelist_Front = async () => {
  let URL = `${BACKEND_BASE_URL}/api/admin/price-list`;
  try {
    const result = await axios.get(URL);
    return result;
  } catch (e) {
    return false;
  }
};

// //! =============================== Single Product Details Frontend ==================================
export const single_Product_Details_Front = async (productSlug) => {
  let URL = `${BACKEND_BASE_URL}/api/products/${productSlug}`;
  try {
    const result = await axios.get(URL);
    return result;
  } catch (e) {
    return false;
  }
};

// //! =============================== All Regional Offices Frontend ==================================
export const all_Regional_Office_Front = async () => {

  let URL = `${BACKEND_BASE_URL}/api/all-regional-offices`;
  try {
    const result = await axios.get(URL);
    return result;
  } catch (e) {
    return false;
  }
};
