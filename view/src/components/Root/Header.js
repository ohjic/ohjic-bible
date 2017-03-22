import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import SiderBar from './Sidebar';

export default class Header extends Component {


	render() {
		return (
			<div className="l-header">
				<div className="l-logo">
					성경제목
				</div>
				<div className="menu">
					<SiderBar iconName="icon-left-open"></SiderBar>
					<SiderBar iconName="icon-right-open"></SiderBar>
					<SiderBar iconName="icon-star-filled"></SiderBar>
					<SiderBar iconName="icon-th-list"></SiderBar>
				</div>
			</div>
		)
	}
}