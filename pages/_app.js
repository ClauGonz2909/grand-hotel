import "../src/app/globals.css";
import { Manrope, Tektur } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const tektur = Tektur({ subsets: ["latin"], variable: "--font-tektur" });

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${manrope.variable} ${tektur.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;