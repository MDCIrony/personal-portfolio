import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Contact from "../components/pages/Contact/Contact";
import Projects from "../components/pages/Projects/Projects";
import NoMatch from "../components/pages/Error/NoMatch";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default AppRoutes;
