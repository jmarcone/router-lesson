import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import AboutLayout from "./AboutLayout";

export default () => {
    return (
        <>
            <AboutLayout />
            <Routes index element={<About who="all" />} >
                <Route path=":id" element={<About who="som3one" />} />
                <Route path="me" element={<About who="me" />} />
            </Routes>
        </>
    )
}