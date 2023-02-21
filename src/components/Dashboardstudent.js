import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../images/logo.png';
import Profile from '../images/profile.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Dashboardstudent() {
  return (
    <>
    <Navbar className='fixed-top' collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor: '#004aad'}}  >
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Logo" width="50" height="50"/>School Portal</Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler" style={{width: '70px'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation"/>
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to = "#" style={{textDecoration: 'none'}}><Nav.Link href="#pricing">Home</Nav.Link></Link>
            <Link to = "/Enrollmentform" style={{textDecoration: 'none'}}><Nav.Link href="#pricing">Enrollment</Nav.Link></Link>
            <Link to = "/Schedule" style={{textDecoration: 'none'}}><Nav.Link href="#pricing">Schedule</Nav.Link></Link>
            <Link to = "/gradestudent" style={{textDecoration: 'none'}}><Nav.Link href='#dfs'>Grades</Nav.Link></Link>
            <Link to = "/accountstudent" style={{textDecoration: 'none'}}><Nav.Link href="#memes">Account</Nav.Link></Link>
            </Nav>

            <Nav>
            <Nav.Link href="#deets">Appointment</Nav.Link>
            <Nav.Link href="#deets">Announcement</Nav.Link>
            <Nav.Link><img src={Profile} alt="Logo" width="30" height="30"/></Nav.Link>
            </Nav>
          
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
    </>
  )
}

export default Dashboardstudent