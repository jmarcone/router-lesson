import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutNav = () => {
    return (
        <>
            <h2>The About layout</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/about/me">About ME</Link>
                    </li>
                    <li>
                        <Link to="/about/anyone">About ANYONE</Link>
                    </li>
                    <li>
                        <Link to="/about/someone">About someone</Link>
                    </li>
                </ul>
            </nav>
            
            
        </>
    )
}

export default AboutNav;