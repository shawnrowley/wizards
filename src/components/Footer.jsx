import React from "react";
import CopyRight from "../components/CopyRight";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <CopyRight name="Shawn Rowley" year="2021" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
