import { GeistSans } from "geist/font/sans";

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
      <body className={GeistSans.className + " overflow-x-hidden relative "}>
        {/* <div className="relative bg-white p-2  text-center text-sm text-black">
          <p className="max-w-xl mx-auto">
            This portfolio site is still under development, if anything looks
            weird or poorly designed, then that's why!!
          </p>
        </div> */}
        <header className="relative bg-white border-b border-[#e9e9e9]">
          <Link
            className="block max-w-2xl mx-auto font-medium px-6 py-4"
            href="/"
          >
            Harchiche
          </Link>
        </header>

        <div className="relative">
          {" "}
          <HomePageLanding />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
