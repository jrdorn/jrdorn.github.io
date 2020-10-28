import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Resume from "../docs/resume.pdf";

class Navbar extends React.Component {
  render() {

    return (
      <Tabs >
        <Tab eventKey="main" title="Main"></Tab>
        <Tab eventKey="projects" title="Projects">
          <a
            href="https://github.com/jrdorn"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </Tab>
        <Tab eventKey="resume" title="Resume">
          <a href= {Resume} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Tab>
        <Tab eventKey="marmosets" title="Marmosets"></Tab>
      </Tabs>
    );
  }
}

export default Navbar;
