import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

function NavBar({ snacks, drinks }) {
    const snackCount = snacks ? snacks.length : 0;
    const drinkCount = drinks ? drinks.length : 0;

    return (
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/snacks">
                        Snacks ({snackCount})
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/drinks">
                        Drinks ({drinkCount})
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/add/snack">
                        Add Snack
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/add/drink">
                        Add Drink
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavBar;


/**import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

function NavBar({ snacks, drinks }) {
    return (
        <Navbar color="light" light expand="md">
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={Link} to="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/snacks">
                        Snacks ({snacks && snacks.length})
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/drinks">
                        Drinks ({drinks && drinks.length})
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/add/snack">
                        Add Snack
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/add/drink">
                        Add Drink
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default NavBar; **/
