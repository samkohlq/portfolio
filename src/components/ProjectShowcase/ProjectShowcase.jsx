import React from "react";

import { Col, Row } from "react-bootstrap";

class ProjectShowcase extends React.Component {
  render() {
    return (
      <Col xs sm={12} md lg={10}>
        <Row className="border border-success">
          <Col xs sm={12} md lg={4} className="border border-success">
            project
          </Col>
          <Col xs sm={12} md lg={4} className="border border-success">
            project
          </Col>
          <Col xs sm={12} md lg={4} className="border border-success">
            project
          </Col>
        </Row>
      </Col>
    );
  }
}

export default ProjectShowcase;
