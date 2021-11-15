import React from "react"
import NavBar from "./components/navbar"
import HeroSection from "./components/hero-section"
import Cards from "./components/card"
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      <Cards />
    </div>
  );
}

export default App;
