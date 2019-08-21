import React, { useState } from "react";
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

function Nav() {
    const [toggle, setToggle] = useState(false);

    const toggler = () => {
        setToggle(!toggle);
    }

    return (
        <div>
            <Navbar className="navi" color="light" light expand="md">
                <Link to="/" className="navbar-brand">GoogleBooks Search</Link>
                <NavbarToggler onClick={toggler} />
                <Collapse isOpen={toggle} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/" className="nav-link" onClick={toggler}>Search</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/saved" className="nav-link" onClick={toggler}>View Saved Books</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Nav;