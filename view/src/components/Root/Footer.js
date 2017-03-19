/**
 * Created by ksb on 17. 1. 29.
 */
import React, {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class Footer extends Component {

    render() {
        return (
            <div className="l-footer">
                <div className="l-inner l-float-clear">
                    <div className="l-nav">
                        <div className="l-nav-inner">
                            <ul>
                                <li><a href="#">태그1</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="l-right l-copyright">
                        <span>© BookStorage 2017 by</span>
                        <a href="#">Strangelight</a>
                    </div>
                </div>
            </div>
        )
    }

}