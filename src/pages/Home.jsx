import React from "react";
import Navbar from "./Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";

function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
}

export default Home;
