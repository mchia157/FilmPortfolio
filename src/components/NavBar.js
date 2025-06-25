import { useState } from "react";
import {Navbar, Container, Nav} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Container className="custom-navbar-container">
                <Navbar.Brand href="#home" className="me-auto">
                    <p>WELCOME TO MY PORTFOLIO</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" onClick={onToggleNavBar}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About</Nav.Link>
                        <Nav.Link href="#work-experience" className={activeLink === 'work' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Work Experience</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Personal Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
            

        </Navbar>
    )
}