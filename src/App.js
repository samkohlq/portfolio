import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row className="my-5">
        <Navbar />
        <Col className="border border-warning">2</Col>
        <Col className="border border-warning">3</Col>
        <Col className="border border-warning">4</Col>
      </Row>
    </Container>
  );
}

export default App;
