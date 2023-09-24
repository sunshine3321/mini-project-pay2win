import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/logo-1.png'

function Header() {
  return (
    <Navbar sticky="top" className="header-color">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              // width="100"
              // height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />

          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='m-2 text-white'>หน้าหลัก</Nav.Link>
            <Nav.Link href="#home" className='m-2 text-white'>เติมเกมส์</Nav.Link>
            <Nav.Link href="#home" className='m-2 text-white'>โปรโมชั่น</Nav.Link>
            <Nav.Link href="#home" className='m-2 text-white'>เกี่ยวกับ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Header