import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutLayout from "./components/AboutLayout";
import NavBar from "./components/NavBar";
import AboutRoutes from "./components/AboutRoutes";


const App = () => {
  console.log(window.history);
  console.log(window.location);

  return (
    <div className="App">
      <Routes >
        <Route element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="about" element={<AboutLayout />}>
            <Route index element={<About who="all" />} />
            <Route path=":id" element={<About who="som3one" />} />
            <Route path="me" element={<About who="me" />} />
          </Route>
          
          {/* <Route path="about/*" element={<AboutRoutes />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;



