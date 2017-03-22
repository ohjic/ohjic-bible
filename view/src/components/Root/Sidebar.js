/**
 * Created by ksb on 17. 1. 29.
 */
import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class SiderBar extends Component {

    render() {
        return (
            <div className="menu-item">
                <i className={this.props.iconName}></i>
            </div>
        )
    }
}


