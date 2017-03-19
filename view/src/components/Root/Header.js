import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

import SiderBar from '../Header/Sidebar';

export default class Header extends Component {


	render() {
		return (
			<div className="l-header">
				<div>
					성경제목
				</div>
				<div>
					<SiderBar name="11">11</SiderBar>
					<SiderBar name="22">12</SiderBar>
					<SiderBar name="33">13</SiderBar>
				</div>
			</div>
		)
	}
}