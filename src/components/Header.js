import React from 'react'
import {Nav,Navbar, NavItem, Image,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () =>(
    <Navbar bsStyle="inverse">
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">NGUYEN THANH HAI</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <NavItem onClick={() => this.props.handleClickLogin()} >Login</NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)


export default Header