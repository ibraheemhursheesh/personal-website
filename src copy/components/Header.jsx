/* eslint-disable */
// import Logo from "./Logo";
// import NavigationBar from "./NavigationBar";
// import HeaderActions from "./HeaderActions";

import { useState } from "react";

export default function Header({ children }) {
  return (
    <header>
      <div>{children}</div>
    </header>
  );
}
