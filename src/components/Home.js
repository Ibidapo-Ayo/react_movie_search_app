import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import "./assets/boxicons/css/boxicons.css";
import Footer from "./Footer";
import FallBackUI from "./FallBackUI";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <FallBackUI>
        <Search />
      </FallBackUI>

      <Footer />
    </div>
  );
}

export default Home;
