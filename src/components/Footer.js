import "./Footer.css";
import React from 'react';
import {FaLinkedin,FaPhone,FaMailBulk} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="left">
                <div className="skills">
                    <h1></h1>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This free lorem ipsum generator lets you choose how many sentences, paragraphs or list items you want. You can also select to include HTML markup and specify how big the text should be. It currently supports standard Lorem Ipsum, Marvel Ipsum, Batman Ipsum and Pokemon Ipsum.</p>
            </div>
            <div className="social">
                <FaPhone size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                <FaMailBulk size={30} style={{color:"#fff", marginRight:"1rem"}}/>
            </div>
        </div>
    </div>
  )
}

export default Footer