import React from "react";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Topbar />
      <Header />
      < Navbar />
   
    </div>
  );
}

export default App;
