import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/header";
import Footer from "./component/Footer";
import Content from "./component/Content";
import Banner from "./component/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </>
  );
}

export default App;
