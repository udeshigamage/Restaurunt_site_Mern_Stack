import React from "react";
import Banner from "../../Components/Banner";
import Categories from "./Categories";
import Dishes from "./Dishes";
import Testimonials from "./Testimonials";
import Ourservices from "./Ourservices";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <Dishes />
      <Testimonials />
      <Ourservices />
    </div>
  );
};

export default Homepage;
