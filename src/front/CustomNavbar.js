import React, {Component} from 'react';
import {Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap'
import {CustomDatePicker} from "./CustomDatePicker";

export default class CustomNavbar extends Component {

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

    optionalDropdown(title) {
        if (this.props.items) {
            return <NavDropdown id={title} title={title}>
                {this.props.items}
            </NavDropdown>
        }
        return '';
    }

    render() {
        return (
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href='/'>NBA Stats</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href='/rosters'>
                            Rosters
                        </NavItem>
                        <NavItem onClick={this.click.bind(this)}>
                            Boxscores
                            <CustomDatePicker showDatePicker={this.setClick.bind(this)}/>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        {this.optionalDropdown('Games')}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}