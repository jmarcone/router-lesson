import React from "react";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink end to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    
                </ul>
            </nav>

            <Outlet context={{hello: "world"}}/>

            <Routes>
                <Route path="/about/*" element={"I'm about to..."}/>
                <Route path="/about" element={"only about"}/>
            </Routes>
        </>
    )
}

export default NavBar;