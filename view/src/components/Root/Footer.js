/**
 * Created by ksb on 17. 1. 29.
 */
import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import SiderBar from './Sidebar';

export default class Footer extends Component {

    render() {
        return (
            <div className="menu">
                <SiderBar name="menu4"></SiderBar>
                <SiderBar name="menu5"></SiderBar>
                <SiderBar name="menu6"></SiderBar>
            </div>
        )
    }

}