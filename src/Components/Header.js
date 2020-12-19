import React from "react"
import {Container, Nav, Navbar, NavbarBrand, NavbarText, NavItem, NavLink} from "reactstrap"
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <Container fluid>
        <Navbar expand="md" color="info" className="text-warning">
        <NavbarBrand tag={Link} to="/" className="text-warning">QUIZZY </NavbarBrand>
        <Nav className="ml-auto">
        <NavItem>
        <NavLink tag={Link} to="/" className="text-warning">Home</NavLink>
        </NavItem>
        <NavItem>
        <NavLink tag={Link} to="/quizsection" className="text-warning">Quiz</NavLink>
        </NavItem>
        </Nav>
        </Navbar>
        </Container>
        
    )
}

export default Header;