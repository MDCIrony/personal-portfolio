import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import Contact from "../components/pages/Contact/Contact";
import Projects from "../components/pages/Projects";
import NoMatch from "../components/pages/Error/NoMatch";
import BackendInfo from "../components/pages/Home/components/childrens/BackendInfo";
import FrontendInfo from "../components/pages/Home/components/childrens/FrontendInfo";
import DatabaseInfo from "../components/pages/Home/components/childrens/DatabaseInfo";
import Services from "../components/pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [
          {
            path: "",
            element: <BackendInfo />,
          },
          {
            path: "frontend-info",
            element: <FrontendInfo />,
          },
          {
            path: "database-info",
            element: <DatabaseInfo />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
    errorElement: <NoMatch />,
  },
]);

export default router;
