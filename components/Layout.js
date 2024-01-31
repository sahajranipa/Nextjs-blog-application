import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container className={style.nav_container}>
          <h1>
            <Navbar.Brand href="/">Nextjs Blogs</Navbar.Brand>
          </h1>
          <Nav className="me-auto navlinks">
            <Nav.Link style={{ marginRight: "3em" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link href="/blog">Blogs</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <main>{children}</main>
    </>
  );
};

export default Layout;
