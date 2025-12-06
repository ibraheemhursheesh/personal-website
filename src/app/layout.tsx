import { Roboto_Mono } from "next/font/google";
import { Fira_Code } from "next/font/google";
import { Outfit } from "next/font/google";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

const roboto_Mono = Roboto_Mono({ subsets: ["latin"] });
const fira_Code = Fira_Code();
const outfit = Outfit({ subsets: ["latin"] });
const inter = Inter();
// inter and geistSans are good choices

import "./globals.css";

import HomePageLanding from "@/components/HomePageLanding";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className + " overflow-x-hidden"}>
        <HomePageLanding />
        {/* <div className="relative bg-white p-2  text-center text-sm text-black">
          <p className="max-w-xl mx-auto">
            This portfolio site is still under development, if anything looks
            weird or poorly designed, then that's why!!
          </p>
        </div> */}
        <div className="relative py-3 px-6">
          <Link href="/">Hursheesh</Link>
        </div>
        <div className="relative">
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
