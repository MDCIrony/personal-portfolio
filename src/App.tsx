import React from "react";
import Background from "./components/layout/Background/Background";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";

function App(): React.ReactElement {
  return (
    <>
      <Background />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
