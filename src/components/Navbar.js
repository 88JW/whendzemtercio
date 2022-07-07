import React, { Component } from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Ciekawostki from './Ciekawostki';
import Home from './Home';
import Kalkulator from './Kalkulator';
import "../App.css";

export default class navbar extends Component {
    render() {
        return (

            <div>
                <Router className="menu" >
                    <div className='Navstyle'>
                        <Navbar expand="md" variant="dark">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/kaklulator" >Kalkulator</Nav.Link>
                                        <Nav.Link as={Link} to="/ciekawostki" >Ciekawostki</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                    <div>

                        <Routes>
                            <Route path="/kaklulator" element={<Kalkulator />} />
                            <Route path="/ciekawostki" element={<Ciekawostki />} />
                            <Route path="/" element={<Home />} />
                        </Routes>

                    </div >
                </Router >

            </div>
        )
    }
}
