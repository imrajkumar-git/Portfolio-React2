
import './App.css';
import {Header} from "./components/HeaderMe/Header";
import Preloader from '../src/pre';
import {Navbar} from "./components/NavbarMe/Navbar";
import {About} from "./components/AboutMe/About";
import project from "./components/PortfolioMe/Projects";
import {Education} from "./components/EducationMe/Education";

// import {Experience} from "./components/ExperienceMe/Experience";

import {Portfolio} from "./components/PortfolioMe/Portfolio";

import {Contact} from "./components/ContactMe/Contact";

import {Footer} from "./components/FooterMe/Footer";
import React,{useState, useEffect}from 'react';

const App = () => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    },5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
         <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>

   <Header />
   <Navbar />
   <About />
   <Education />
   {/* <Experience /> */}
   <project/>
   <services />
   <Portfolio />
   <Contact />
   <Footer /> 

      </div>
  
   </>
  );
};

export default App;
