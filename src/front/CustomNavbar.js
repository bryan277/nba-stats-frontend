import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap'
import {CustomDatePicker} from "./CustomDatePicker";

export class CustomNavbar extends Component {

    constructor() {
        super();
        this.click = this.click.bind(this);
        this.setClick = this.setClick.bind(this);
    }

    click() {
        return this.clickChild();
    }

    setClick(click) {
        this.clickChild = click;
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        NBA Stats
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem href='rosters'>
                        Rosters
                    </NavItem>
                    <NavItem onClick={this.click.bind(this)}>
                        Boxscores
                        <CustomDatePicker showDatePicker={this.setClick.bind(this)}/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }

}