import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

const NavBar = () => (
  <Styles>
    <Navbar expand='lg'>
      <Navbar.Brand href='/'>Code Life</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/contact' className='nav-link'>
              Contact
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavBar;
