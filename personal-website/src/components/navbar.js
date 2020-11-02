import React from "react";

import Nav from 'react-bootstrap/Nav'

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Resume from "../docs/resume.pdf";


class Navbar extends React.Component {

  render() {
    return (
      <Nav>
        <Tabs >

          <Tab eventKey="main" title="Main" >
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
              > 
            </Nav.Link>
          </Tab>
      
          <Tab eventKey="marmosets" title="Marmosets" onSelect={()=> window.open("google.com","_blank")}>

          </Tab>

        </Tabs>
      </Nav>
      
    );
  }
}

export default Navbar;
