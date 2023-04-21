import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="navbar-container" variant="dark">
        <Container className="navbar-brand-container">
          <Navbar.Brand onClick={() => navigate("/")}>TranSan</Navbar.Brand>
        </Container>
        <Container className="navbar-links-container">
          <Nav className="navbar-links">
            <Nav.Link onClick={() => navigate("/")}>Inicio</Nav.Link>
            <Nav.Link onClick={() => navigate("/cotizacion")}>
              Cotizaciones
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/servicios")}>
              Servicios
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/acerca")}>Acerca De</Nav.Link>
            {/*             <Nav.Link onClick={() => navigate("/ayuda")}>Ayuda</Nav.Link>
             */}{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
