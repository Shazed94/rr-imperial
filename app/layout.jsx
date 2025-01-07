import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import "aos/dist/aos.css";
import { Roboto } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import NextTopLoader from "nextjs-toploader";
import "react-medium-image-zoom/dist/styles.css";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata = {
  title: "RR Kabel – Best Electric Cable & Wire in Bangladesh | RR Imperial",
  description:
    "RR Kabel by RR Imperial – the best electric cable and wire brand in Bangladesh. RR Kabel offer the best electric cable and wire solutions in Bangladesh which is trusted by industries for quality and reliability. RR Kabel is also familiar as RR Cable & RR Kable.",
  keywords:
    "RR Kable, RR Cable, best electric cable in bangladesh, best cable company in bangladesh, best electric wire in bangladesh",
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
        <ScrollToTop />
      </body>
      <GoogleTagManager gtmId="GTM-5NH3P2Z5" />
      <GoogleAnalytics gaId="G-4PMFVGBPW2" />
    </html>
  );
}
