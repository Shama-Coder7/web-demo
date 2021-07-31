import React from "react";
import Common from "./Common";
import web from "../src/images/img3.gif";

const About = () =>{
return (
    <>
    <Common 
    name="Our About Page"
    imgsrc={web} visit="/contact" 
    btname="Contact Now"/>
    </>
);
};

export default About;