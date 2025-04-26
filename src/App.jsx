import React from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Topbar />
      <Header />
      < Navbar />
      <Banner />
    </div>
  );
}

export default App;
