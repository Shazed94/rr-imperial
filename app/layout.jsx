import { Roboto } from "next/font/google";
import "aos/dist/aos.css";
import "react-medium-image-zoom/dist/styles.css";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title:
    " RR Imperial | Leading Wire & Cable Manufacturer Company in Bangladesh",
  description:
    "Get all types of wires and cables from India's leading cable company, RR Kabel. Know more.",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
        <NextTopLoader
          color="#ED1D24"
          height={3}
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
      </body>
    </html>
  );
}
