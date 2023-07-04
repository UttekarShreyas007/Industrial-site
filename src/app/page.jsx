import React from "react";
import Navbar from "./components/Navbar";
import Trending from "./components/Trending";
import Feature from "./components/Feature";
import Magzine from "./components/Magzine";
import Interview from "./components/Interview";
import Brand from "./components/Brand";
import RevMag from "./components/RevMag";
import Articles from "./components/Articles";
import Footer from "./components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Trending />
      <Feature />
      <Magzine />
      <Interview />
      <Brand />
      <RevMag />
      <Articles />
      <Footer />
    </div>
  );
};

export default page;
