import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import UIChunks from "./components/UIChunks";
import Contact from "./components/Contact";
import About from "./components/About";

/*
  Homepage
  Projects
    *project 1
    ...
  ContactMe
  AboutMe
*/
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/projects", element: <Projects /> },
      { path: "/ui-chunks", element: <UIChunks /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
