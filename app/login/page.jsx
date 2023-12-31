"use client";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BACKEND_BASE_URL } from "@/components/GlobalVariables";
import toast, { Toaster } from "react-hot-toast";
import { setCookie } from "cookies-next";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const router = useRouter();
  const AdminEmail = useRef();
  const AdminPassword = useRef();
  const [adminEmailError, setAdminEmailError] = useState("");
  const [adminPassError, setAdminPassError] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const [passType, setPassType] = useState("password");
  const handlePasswordType = () => {
    if (passType == "password") {
      setPassType("text");
    }
    if (passType == "text") {
      setPassType("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("email", AdminEmail.current.value);
    formdata.append("password", AdminPassword.current.value);

    try {
      const response = await axios.post(
        `${BACKEND_BASE_URL}/api/admin/login/process`,
        formdata
      );

      if (response.data.status === 400) {
        if (response.data.errors) {
          const { email, password } = response.data.errors;
          setAdminEmailError(email);
          setAdminPassError(password);
        }
        toast.error(response.data.message);
      } else {
        setCookie("admin_access_token", response.data?.admin_access_token, {
          maxAge: 60 * 60 * 24,
        });
        setCookie("admin_staff", response.data?.data?.admin_staff, {
          maxAge: 60 * 60 * 24,
        });
        setCookie("user_type", response.data?.data?.user_type, {
          maxAge: 60 * 60 * 24,
        });

        // setCookie( "user_permission_info",
        // JSON.stringify(response.data?.data?.permission_info))
        localStorage.setItem(
          "user_permission_info",
          JSON.stringify(response.data?.data?.permission_info)
        );

        toast.success(response.data.message);
        // Redirect to the dashboard after successful login
        router.replace("/admin/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login.");
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#fff",
              color: "#000",
            },
          },
          error: {
            style: {
              background: "#fff",
              color: "#000",
            },
          },
        }}
      />
      <div className="bg-red-600 h-screen overflow-hidden flex items-center justify-center">
        <div className="bg-white lg:w-5/12 md:6/12 w-10/12 shadow-3xl">
          <div className="bg-white absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl p-4 md:p-8">
            <div className="w-44 overflow-hidden">
              <img
                src="/img/logo.png"
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <form className="p-12 md:p-24" onSubmit={handleSubmit}>
            <div className="flex items-center text-lg mb-6 md:mb-8 relative">
              <svg
                className="absolute ml-3 top-4"
                width={24}
                viewBox="0 0 24 24"
              >
                <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
              </svg>
              <div className="w-full">
                <input
                  ref={AdminEmail}
                  type="text"
                  id="username"
                  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Username"
                />
                <small className="small_msg">
                  {adminEmailError && adminEmailError}
                </small>
              </div>
            </div>
            <div className="flex items-center text-lg mb-6 md:mb-8 relative">
              <svg
                className="absolute ml-3 top-4"
                viewBox="0 0 24 24"
                width={24}
              >
                <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
              </svg>
              <div className="w-full">
                <input
                  ref={AdminPassword}
                  type={passType}
                  id="password"
                  className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                  placeholder="Password"
                />

                <div
                  className="absolute right-4 top-4"
                  onClick={handlePasswordType}
                >
                  {passType == "password" ? (
                    <AiFillEye size="1.2em" />
                  ) : (
                    <FaEyeSlash size="1.2em" />
                  )}
                </div>
                <small className="small_msg">
                  {adminPassError && adminPassError}
                </small>
              </div>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full select-none"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
