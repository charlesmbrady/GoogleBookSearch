<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0
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

<<<<<<< HEAD
function Nav() {
=======
function Navi() {
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle(!toggle);
    }
<<<<<<< HEAD
=======

    useEffect(() => {
        console.log("hello Nav bar");
    }, []);

>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0

    return (
        <div>
            <Navbar className="navi" color="light" light expand="md">
<<<<<<< HEAD
                <Link to="/" className="navbar-brand">GoogleBooks Search</Link>
=======
                <Link to="/" className="navbar-brand">Charles Brady</Link>
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0
                <NavbarToggler onClick={toggler} />
                <Collapse isOpen={toggle} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
<<<<<<< HEAD
                            <Link to="/" className="nav-link" onClick={toggler}>Search</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/saved" className="nav-link" onClick={toggler}>View Saved Books</Link>
                        </NavItem>
=======
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
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    );

<<<<<<< HEAD
export default Nav;
=======
}

export default Navi;
>>>>>>> 3ff8e3c7c14c6759853c3b01d4492814d4a067e0
