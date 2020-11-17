import React, { useState } from "react";

import Nav from 'react-bootstrap/Nav'

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Resume from "../docs/resume.pdf";

import mar1 from "../img/mar1.jpg";


export default function Navbar() {
  
  const [key, setKey] = useState("main");

  const handleSelect = (k) => {
    setKey(k);
    if (k === 'projects') {
      window.open('https://github.com/jrdorn', '_blank');
    } else if (k === 'resume') {
      window.open(Resume, '_blank');
    } else if (k === 'marmosets') {
      //var myImg = document.getElementById('pimg');
      //window.open(myImg, '_blank');
      document.getElementById('pimg').src=mar1;
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


