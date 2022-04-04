import React from 'react'
import "./Navigation.css"
import { Container, Row, Col } from "react-bootstrap"
import {
    Link
} from 'react-router-dom';
import Plate from "../../images/Logo.png"
import { Navbar, Nav } from "react-bootstrap"


const Navigation = () => {
    return (
        <div className = "nav-wrapper">
        <img src={Plate} className="logo"/>
        <Navbar fixed="top" collapseOnSelect expand="md" className='navbar'>
           
            <Container fluid className="navbar-container">
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                        <Nav.Link as={Link} to="/" className="navitem">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us" className="navitem">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/goals" className="navitem">Goals</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    )
}

export default Navigation