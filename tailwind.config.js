/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "333": "#333",
      },
      fontSize: {
        f12: "12px",
        f14: "14px",
        f15: "15px",
        f16: "16px",
        f18: "18px",
        f20: "20px",
        f22: "22px",
        f24: "24px",
        f25: "25px",
        f26: "26px",
        f28: "28px",
        f34: "34px",
        f36: "36px",
        f38: "38px",
        f40: "40px",
        f48: "48px",
      },
      fontFamily: {
        "tahoma-regular": ["tahoma-regular"],
        "tahoma-bold": ["tahoma-bold"],
        "tahoma-extrabold": ["tahoma-extrabold"],
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}) 
