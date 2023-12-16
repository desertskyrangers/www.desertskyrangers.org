import './App.css';
import React from "react";
import {Link} from "react-router-dom";

export default class News extends React.Component {

	render() {
		return (
			<div className="news column">
				<div>
					<h3>Events</h3>
				</div>
				<div>
					<h5>2024</h5>
					<h6>Feb 17 - Ranger Rally</h6>
					<h6>May 18 - Ranger Rally</h6>
					<h6>Aug 17 - Ranger Rally</h6>
					<h6>Oct 19 - Ranger Rally</h6>
				</div>
				&nbsp;
				<div>
					<Link to='/events' className='title infoitem'>Full Schedule</Link>
				</div>
			</div>
		);
	}

}
