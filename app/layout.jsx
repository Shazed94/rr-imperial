import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import "aos/dist/aos.css";
import { Roboto } from "next/font/google";
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
      {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5NH3P2Z5');`}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4PMFVGBPW2"
        ></Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4PMFVGBPW2');`}
        </Script>

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={roboto.className}>
      {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5NH3P2Z5"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <NextTopLoader
          color="#ED1D24"
          height={3}
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
