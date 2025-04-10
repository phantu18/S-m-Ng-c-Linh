import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Products from "./Components/Products";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import "./App.css";
import Samngoclinh from "./Components/Samngoclinh";
import Matong from "./Components/Matong";
import Nam from "./Components/Nam";
import Banner from "./Components/Banner";
import Slider from "./Components/Slider";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import ZaloButton from "./Components/ZaloButton";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <BackToTop />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/sam-ngoc-linh" element={<Samngoclinh />} />
            <Route path="/mat-ong-rung" element={<Matong />} />
            <Route path="/nam-linh-chi" element={<Nam />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
