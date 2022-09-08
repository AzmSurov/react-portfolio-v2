import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader/Loader";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-238163132-1');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
const [sendData, setSendData] = useState(true);

const [loading, setLoading] = useState(false);
const [theme, setTheme] = useState(null);
  useEffect (() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if(theme === 'dark'){
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])
useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false);
  }, 2000)
}, [])

  return (
    <div className="antialiased  h-screen tracking-wide bg-[#F3F4F5] dark:bg-slate-900">
      {
        loading ? <Loader /> : 
        [
      <div ><Navbar setSendData ={setSendData} /></div>,
      <Main sendData= {sendData} />,
      <About sendData= {sendData} />,
      <Skills />,
      <Portfolio />,
      <Contact />,
      <Footer />
        ]
      }
    </div>
  );
}

export default App;
