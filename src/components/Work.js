import "./Work.css";
import pro1 from "../assets/tttpic.png";
import React from 'react';
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="container">
      <h1 className="heading">PROJECTS</h1>
      <div className="inside">
        <div className="card">
          <img src={pro1}/>
          <h1 className="project-title">Project Title</h1>
          <div className="details">
            <p>This is text</p>
            <div className="btns">
              <NavLink to="" className="btn">Demo</NavLink>
              <NavLink to="" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={pro1}/>
          <h1 className="project-title">Project Title</h1>
          <div className="details">
            <p>This is text</p>
            <div className="btns">
              <NavLink to="" className="btn">Demo</NavLink>
              <NavLink to="" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={pro1}/>
          <h1 className="project-title">Project Title</h1>
          <div className="details">
            <p>This is text</p>
            <div className="btns">
              <NavLink to="" className="btn">Demo</NavLink>
              <NavLink to="" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work