import { render } from "@testing-library/react";
import "./Img2styles.css";
import React, { Component } from 'react';

class Img2 extends Component {
  render(){
    return (
      <div className="img">
          <div className="heading">
              <h1>{this.props.heading}</h1>
              <p>{this.props.text}</p>
          </div>
      </div>
    );
  }
}

export default Img2;