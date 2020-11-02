import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Resume from "../docs/resume.pdf";


import Link from "react-router";
import ReactRouterBootstrap, { LinkContainer } from 'react-router-bootstrap';

class Navbar extends React.Component {

  render() {
    return (

      <Tabs >
        <Tab eventKey="main" title="Main" >
        </Tab>
        <Tab eventKey="projects" title="Projects">
          <a
            href="https://github.com/jrdorn"
            target="_blank"
            rel="noopener noreferrer"
          >test</a>
          <Link>Website</Link>
        </Tab>
        
        <Tab eventKey="resume" title="Resume">
          <a href= {Resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </Tab>
      
        
        <Tab eventKey="marmosets" title="Marmosets" onSelect={()=> window.open("google.com","_blank")}></Tab>
      </Tabs>
    );
  }
}

export default Navbar;
