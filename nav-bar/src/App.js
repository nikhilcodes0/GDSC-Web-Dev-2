import React from "react";
import logo from "./assets/logo.svg";
import search from "./assets/search.svg";
import "./App.css";

function App() {
  return (
    <div className="navbar">
      <div className="left-nav">
        <div className="logo-div">
          <img src={logo} alt="logo"></img>
          <h1>Logo</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>
            Products <span className="dropdown"></span>
          </li>
          <li>About</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="search-bar">
        <img src={search} alt="search"></img>
        <p>Search for anything</p>
      </div>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
