import * as React from "react";
import { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

class Navigation extends Component{
    render() {
        return (    
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Navbar.Brand>Finn Trenholm</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Nav>
                <Nav>
                    <Nav.Link href="https://www.instagram.com/finntrenholm/"><FontAwesomeIcon icon={faInstagram} /></Nav.Link>
                    <Nav.Link href="https://github.com/FinnE10/react-app-ui"><FontAwesomeIcon icon={faGithub} /></Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}
export default Navigation;