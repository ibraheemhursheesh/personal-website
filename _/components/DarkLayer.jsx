/* eslint-disable */

export default function DarkLayer({ isSidebarOpen }) {
  return <div className={`layer ${isSidebarOpen ? "dark" : ""}`}></div>;
}
