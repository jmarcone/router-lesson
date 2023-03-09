import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink end  to="/about">About</NavLink>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
}