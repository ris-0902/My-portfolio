import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Img2 from '../components/Img2';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Img2 heading="MY PROJECTS" text="Some of my most recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project