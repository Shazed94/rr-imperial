import React from "react";
import { Toaster } from "react-hot-toast";

const ToasterAlert = () => {

  return (
    <Toaster
      position="top-center"
      gutter={8}
      toastOptions={{
        duration: 3000,
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
  );
};

export default ToasterAlert;
