import React, {PropTypes, Component} from 'react';
import {Grid, Glyphicon} from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<div className="l-main-container">
				<div className="l-featured">
					<div className="l-feat-left l-feat-head">
						<h2>
							Freebie: Drone Icons (AI, Sketch, SVG, PNG, Iconjar)
						</h2>
					</div>
					<div className="l-feat-right l-feat-body">
						<div className="l-feat-foot">
							<a className="l-read-more" href="#">
								Read more
								<Glyphicon glyph="arrow-right" />
							</a>
						</div>
					</div>
				</div>
				<div className="l-featured">
					<div className="l-box">
						box1
					</div>
				</div>
			</div>
		)
	}
}
