import React, { useState } from "react";

import Nav from 'react-bootstrap/Nav'

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Resume from "../docs/resume.pdf";


//class Navbar extends React.Component {
export default function Navbar() {


//  render() {

  const [key, setKey] = useState("main");


    return (
      <Nav>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >

          <Tab eventKey="main" title="Main">
          </Tab>

          <Tab eventKey="projects" title="Projects">
            <Nav.Link 
              href="https://github.com/jrdorn"
              target="_blank"
              rel="noopener noreferrer"
              >
            </Nav.Link>
          </Tab>
          
          <Tab eventKey="resume" title="Resume">
            <Nav.Link 
              href= {Resume}
              target="_blank"
              rel="noopener noreferrer"
              > well
            </Nav.Link>
          </Tab>
      
          <Tab eventKey="marmosets" title="Marmosets" onSelect={()=> window.open("google.com","_blank")}>

          </Tab>

        </Tabs>
      </Nav>
      
    );
//  }
}

//export default Navbar;
