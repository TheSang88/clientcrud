import React, { Component } from 'react';
import { Navbar, Nav, Collapse, BImg } from 'bootstrap-4-react';

export default class Navb extends Component {
    render() {

        return (
            <React.Fragment>
                <Navbar expand="lg" dark bg="dark" mb="0">
                    <Navbar.Brand href="/">
                        <BImg
                            src={"favicon.ico"}
                            width="30"
                            height="30"
                            display="inline-block"
                            align="top"
                            mr="1"
                        />
                        Human Resources
                    </Navbar.Brand>

                    <Navbar.Toggler target="#navbarColor1" />
                    <Collapse navbar id="navbarColor1">
                        <Navbar.Nav mr="auto">
                            <Nav.ItemLink href="list">list</Nav.ItemLink>
                            <Nav.ItemLink href="create">create</Nav.ItemLink>

                        </Navbar.Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}