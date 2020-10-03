import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Dog Days Rescue</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Item><Nav.Link href="/">ABOUT US</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/AdoptableDogs">ADOPTABLE DOGS</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/AdoptionApplication">ADOPTION APPLICATION</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/FosterApplication">FOSTER APPLICATION</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)

export default NavigationBar;