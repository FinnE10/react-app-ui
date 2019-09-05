import * as React from "react";
import { Component } from "react";
import { Navbar } from 'react-bootstrap'

class Navigation extends Component{
    render() {
        return (    
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Finn Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Navbar>
        )
    }
}
export default Navigation;