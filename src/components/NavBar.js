import { useState } from "react";
import {Navbar, Container, Nav} from "react-bootstrap"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [expanded, setExpanded] = useState(false);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const onToggleNavBar = () => {
        setExpanded(!expanded);
    }
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <p>WELCOME TO MY PORTFOLIO</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" onClick={onToggleNavBar}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About</Nav.Link>
                        <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Work Experience</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Personal Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
            

        </Navbar>
    )
}