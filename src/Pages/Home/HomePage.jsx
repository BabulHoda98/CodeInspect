import React from "react";
import Home from "../Home/Home";
import Services from "../Home/Services";
import Features from "../../Components/Features";
import TechStack from "../../Components/TechStack";
import Events from "../../Components/Events";
import Review from "../../Components/Review";
import FAQ from "../../Components/FAQ";
import DataForm from "../../Components/DataForm";
import Map from "../../Components/Map";

const MainHome = () => (
  <>
    <Home />
    <Services />
    <Features />
    <TechStack />
    {/* <Events /> */}
    {/* <Review /> */}
    <FAQ />
    <DataForm />
    {/* <Map/> */}
  </>
);

export default MainHome;