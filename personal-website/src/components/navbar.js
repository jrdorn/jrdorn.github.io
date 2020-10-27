import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


class Navbar extends React.Component {
  render() {
    const [key, setKey] = useState("main");

    return (
      <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="main" title="Main"></Tab>
        <Tab eventKey="projects" title="Projects">
          <a
            href="https://github.com/jrdorn"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
        </Tab>
        <Tab eventKey="resume" title="Resume">
          {" "}
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </Tab>
        <Tab eventKey="marmosets" title="Marmosets"></Tab>
      </Tabs>
    );
  }
}

export default Navbar;
