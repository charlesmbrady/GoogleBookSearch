import React, { useEffect, useState } from "react";
import './style.css';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

function Navi() {
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        console.log("hello Nav bar");
    }, []);


    return (
        <div>
            <Navbar className="navi" color="light" light expand="md">
                <Link to="/" className="navbar-brand">Charles Brady</Link>
                <NavbarToggler onClick={toggler} />
                <Collapse isOpen={toggle} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/charlesmbrady" target="_blank" onClick={toggler}>GitHub</NavLink>
                        </NavItem>
                        {/* <NavItem> TODO: add this back once I have something to put there
                            <Link to="/about" className="nav-link">About</Link>
                        </NavItem> */}
                        <NavItem>
                            <Link to="/portfolio" className="nav-link" onClick={toggler}>Portfolio</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/resume" className="nav-link" onClick={toggler}>Resume</Link>
                        </NavItem>
                        {/* <NavItem>
                            <Link to="/resources" className="nav-link">Resources</Link>
                        </NavItem> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    );

}

export default Navi;
