import React from "react";
import FeaturedBooks from "../../components/FeaturedBooks/FeaturedBooks";
import Navbar from "../../components/Navbar/Navbar";
import AllBooks from "../../components/AllBooks/AllBooks";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <FeaturedBooks />
      <AllBooks />
    </div>
  );
}

export default Home;
