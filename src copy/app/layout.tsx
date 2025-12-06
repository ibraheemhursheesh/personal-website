import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Logo from "../../jsxfiles/components/Logo";
import NavigationBar from "@/components/NavigationBar";
import HeaderActions from "@/components/HeaderActions";
import DarkLayer from "@/components/DarkLayer";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibrahim Hursheesh - Portfolio",
  description: "I try to make the web a better place to spend your day at..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
