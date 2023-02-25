import React from "react";
import Background from "./components/layout/Background/Background";
import Navbar from "./components/layout/Navbar/Navbar";

import AppRoutes from "./constants/AppRoutes";
import Footer from "./components/layout/Footer/Footer";

function App(): React.ReactElement {
  return (
    <>
      <Background />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
