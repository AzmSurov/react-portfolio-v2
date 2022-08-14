import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";



function App() {
const [sendData, setSendData] = useState(true);

  return (
    <div className="antialiased container mx-auto h-screen tracking-wide">
      <Navbar setSendData ={setSendData} />
      <Main sendData= {sendData} />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
