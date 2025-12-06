import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
import HeaderActions from "./HeaderActions";
import DarkLayer from "./DarkLayer";

export default function AppLayout() {
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(function () {
    window.addEventListener("resize", function (e) {
      if (e.target.innerWidth > 800) {
        setIsSidebarOpen(false);
      }
    });
  }, []);

  return (
    <div
      className={`layout ${isDark ? "dark-mode" : ""}`}
      onClick={(e) => {
        const eventTarget = e.target;
        if (
          !eventTarget.closest(".navigation-bar-open") &&
          !eventTarget.closest(".sidebar-menu") &&
          !eventTarget.closest(".mode-icon")
        ) {
          setIsSidebarOpen(false);
        }
      }}
    >
      <div>
        <DarkLayer isSidebarOpen={isSidebarOpen} />
        <Header>
          <Logo />
          <NavigationBar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <HeaderActions
            isDark={isDark}
            onClick={() => setIsDark((isDark) => !isDark)}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </Header>
        <main>
          <Outlet context={{ isDark }} />
        </main>
        <Footer />
      </div>
      <div></div>
    </div>
  );
}
