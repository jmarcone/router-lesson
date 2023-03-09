import React from "react";
import AboutNav from "./AboutNav";
import { useParams } from "react-router-dom";

const About = () => {
    const {who} = useParams();
    return (<h1>About {who}</h1>)

}

export default About;