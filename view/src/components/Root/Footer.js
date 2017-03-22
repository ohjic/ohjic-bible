/**
 * Created by ksb on 17. 1. 29.
 */
import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import SiderBar from './Sidebar';

export default class Footer extends Component {

    render() {
        return (
            <div className="menu l-footer">
                <SiderBar name="성경" component={SiderBar}></SiderBar>
                <SiderBar name="설정"></SiderBar>
            </div>
        )
    }

}