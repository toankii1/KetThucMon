import React from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import Announcements from "./components/Announcements";
import Branches from "./components/Branches";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Topbar />
      <Header />
      < Navbar />
      <Banner />
      <Sidebar />
      <Announcements />
      <Branches />
    </div>
  );
}

export default App;
