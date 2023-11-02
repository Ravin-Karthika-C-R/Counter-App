import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar className="bg-warning">
    <Container>
      <Navbar.Brand href="#home" className="ms-5 p-1 text-center">
        <img
          alt=""
          src="https://i.postimg.cc/DZ4VcDPn/Untitled-design.png"
          width="70"
          height="50"
          className="d-inline-block align-top"
        />{' '}
        Restaurant Finder 
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
export default Header