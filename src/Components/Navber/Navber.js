import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../Image/Logo.png'
import './Navber.css'

const Navber = ({color}) => {
    return (
        <div>
            <Container className="navbar-body">
            <Navbar expand="lg">
                <Navbar.Brand>
                    <Link to="/home">
                        <img className="logo"src={logo} alt="" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="">
                        <input type="text" className="header-input" placeholder="Search your Destination..." />
                    </Form>
                    <Nav className="ml-auto">
                        <Link className={`nav-item ${color}`} to="/home">Home</Link>
                        <Link className={`nav-item ${color}`} to="/">Blog</Link>
                        <Link className={`nav-item ${color}`} to="/">Contact</Link>
                        <Link  to="/login"><Button variant="warning" className="ml-2 m-sm-2" >Login</Button></Link>
                              
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </div>
    );
};

export default Navber;