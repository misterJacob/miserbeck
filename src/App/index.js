import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

import Footer from "../components/Footer";
import PhotoSlides from "../pages/PhotoSlides";

import Projects from "../pages/Projects";
import Shop from "../pages/Shop";
import ShopOverView from "../pages/Shop/slides/ShopOverView";
import ItemDisplay from "../pages/Shop/ItemDisplay";
import SliderDisplay from "../pages/PhotoSlides/SliderDisplay";
import OverviewSlider from "../pages/PhotoSlides/OverviewSlider";
import ScrollToTop from "./ScrollToTop";
import OverviewProject from "../pages/Projects/OverviewProject";
import ProjectDisplay from "../pages/Projects/ProjectDisplay"
import QRCodeGenerator from "../pages/QRCodeGenerator";


const App = () => {

    window.oncontextmenu = function (event) {
      event.preventDefault();
      event.stopPropagation();
      return true;
    };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="" element={<SideNav />}>
              <Route path="/photoslides" element={<PhotoSlides />}>
                {/* // Outlet Photo Slides */}
                <Route
                  path="/photoslides/overview"
                  element={<OverviewSlider />}
                />
                <Route path=":id" element={<SliderDisplay />} />
              </Route>
              {/* // ***************************************************** // */}
              <Route path="/projects" element={<Projects />}>
                <Route
                  path="/projects/overview"
                  element={<OverviewProject />}
                />
                <Route path=":id" element={<ProjectDisplay />} />
              </Route>
              {/* // ***************************************************** // */}
              <Route path="/shop" element={<Shop />}>
                {/* // Outlet Shop */}
                <Route path="/shop/overview" element={<ShopOverView />} />
                <Route path=":id" element={<ItemDisplay />} />
              </Route>
              <Route path="/qrcode-generator/overview" element={<QRCodeGenerator />} />
            </Route>
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </ThemeProvider>
  );
};
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "782px",
};

export default App;
