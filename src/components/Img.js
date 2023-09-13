import { Link } from "react-router-dom";
import React from 'react';
import "./Img.css";
import bg_img from "../assets/body_background.jpg";

const Img = () => {
  return (
    <section className="hero">
        <div className="mask">   
            <img src={bg_img} alt="Intro-img" className="into-img"/>
        </div>
        <div className="content">
            <p >HI, I'M RISHABH.</p>
            <h1 >I am a Full Stack Developer.</h1>
            <div >
                <Link to='/project' className="btn">PROJECTS</Link>
                <Link to='/Contact' className="btn btn-light">CONTACT</Link>
            </div>
        </div>
    </section>
  )
}

export default Img