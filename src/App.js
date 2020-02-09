import React from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import ProjectShowcase from "./components/ProjectShowcase/ProjectShowcase";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row className="my-5">
        <NavBar />
        <ProjectShowcase />
      </Row>
    </Container>
  );
}

export default App;
