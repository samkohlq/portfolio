import React from "react";

import { Col } from "react-bootstrap";

class NavBar extends React.Component {
  render() {
    return (
      <Col xs sm md={12} lg={2} className="border border-warning pb-4">
        <h1 className="text-dark mb-0">sklq</h1>
        <div>
          <a className="text-secondary" href="#aboutpage">
            about
          </a>
        </div>
        <div>
          <a className="text-secondary" href="#projects">
            projects
          </a>
        </div>
        <div className="mt-5">
          <a
            className="text-secondary small"
            href="https://github.com/samkohlq/"
          >
            : github
          </a>
        </div>
        <div>
          <a
            className="text-secondary small"
            href="https://www.linkedin.com/in/samkohlq/"
          >
            : linkedin
          </a>
        </div>
        <div>
          <a className="text-secondary small" href="mailto:samkohlq@gmail.com">
            : samkohlq@gmail.com
          </a>
        </div>
      </Col>
    );
  }
}

export default NavBar;
