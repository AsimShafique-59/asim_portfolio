import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "skills", Component: Skills },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "resume", Component: Resume },
      { path: "*", Component: NotFound },
    ],
  },
]);
