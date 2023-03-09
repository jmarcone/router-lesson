import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutLayout from "./components/AboutLayout";
import NavBar from "./components/NavBar";
import AboutRoutes from "./components/AboutRoutes";
import NotFound from "./components/NotFound";
import AboutAll from "./components/AboutAll"
import AboutMe from "./components/AboutMe";
import Layout from "./components/Layout";


const App = () => {
  console.log(window.history);
  console.log(window.location);

  return (
    <div className="App">
      
      

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/about" element={<AboutLayout/>} >
            <Route index element={<AboutAll />} />
            <Route path=":who" element={<About />} />
            <Route path="me" element={<AboutMe />} />
            <Route path="detail" >
              <Route path=":id" element={<h4>Someone details</h4>} />
            </Route>
          </Route>
        </Route>
        
      
      </Routes>

    </div>
  );
}

export default App;



