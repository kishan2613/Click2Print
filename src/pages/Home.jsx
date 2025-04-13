import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import Footer from "../components/common/Footer";
import WhyClick2Print from "../components/WhyClick2Print";
import Questions from "../components/Questions";
import Trending from "../components/Trending";


export default function Home(){
  return(
    <div >
    <Navbar/>
    <HeroSection/>
    <WhyClick2Print/>
    <CategoriesSection/>
    <Trending/>
    <Questions/>
    <Footer/>
    {/* <h1>Kishan Kumar</h1> */}
    </div>
  )
  }
