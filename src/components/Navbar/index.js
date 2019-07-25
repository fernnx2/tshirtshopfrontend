import React, {Component} from 'react'
import {Navbar, NavItem, Dropdown, Divider} from 'react-materialize'
import M from "materialize-css";
export default class NavbarWC extends Component {

  componentDidMount() {
    M.AutoInit();
}

    render() {
        return (
            <Navbar brand={
              <NavItem>
              <img src="img/tshirtshop.png"></img>
            </NavItem>
            } alignLinks="right" className="blue">
             
                <NavItem href="">
                    LogIn
                </NavItem>
                <NavItem href="components.html">
                    SingIn
                </NavItem>
                <Dropdown trigger={< a />}>
                    <a href="#">
                        one
                    </a>
                    <a href="#">
                        two
                    </a>
                    <Divider/>
                    <a href="#">
                        three
                    </a>
                </Dropdown>
            </Navbar>
        );
    }
}