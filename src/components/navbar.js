import React, { useState } from "react";

import Nav from 'react-bootstrap/Nav'

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Resume from "../docs/resume.pdf";

import profile_pic from "../img/profile_pic.jpg";

import mar1 from "../img/mar1.jpg";
import mar2 from "../img/mar2.jpg";
import mar3 from "../img/mar3.jpg";
import mar4 from "../img/mar4.jpg";
import mar5 from "../img/mar5.jpg";
import mar6 from "../img/mar6.jpg";


export default function Navbar() {
  
  const [key, setKey] = useState("main");

  const marList = [mar1, mar2, mar3, mar4, mar5, mar6];
  const random = Math.floor(Math.random() * marList.length);

  const handleSelect = (k) => {
    setKey(k);
    if (k === 'projects') {
      window.open('https://github.com/jrdorn', '_blank');
    } else if (k === 'resume') {
      window.open(Resume, '_blank');
    } else if (k === 'marmosets') {
      //var myImg = document.getElementById('pimg');
      //window.open(myImg, '_blank');
      document.getElementById('pimg').src=marList[random];
    } else if (k === 'main') {
      document.getElementById('pimg').src=profile_pic;
    }
  }


    return (
      <Nav>
        <Tabs
          activeKey={key}
          onSelect={(k) => handleSelect(k)}
        >

          <Tab eventKey="main" title="Main">
          </Tab>

          <Tab eventKey="projects" title="Projects">
          </Tab>
          
          <Tab eventKey="resume" title="Resume">
          </Tab>
      
          <Tab eventKey="marmosets" title="Marmosets">

          </Tab>

        </Tabs>
      </Nav>
      
    );

}


