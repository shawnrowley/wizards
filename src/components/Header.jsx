import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Washington Wizards</Navbar.Brand>
          </LinkContainer>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
