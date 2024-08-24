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
					<h6 className='complete'>Feb 17 - Ranger Rally</h6>
					<h6 className='complete'>May 18 - Ranger Rally</h6>
					<h6 className='complete'>Aug 17 - Ranger Rally</h6>
					<h6>Oct 19 - Ranger Rally</h6>
					<h5>2025</h5>
					<h6>Stay Tuned</h6>
				</div>
				&nbsp;
				<div>
					<Link to='/events' className='title infoitem'>Full Schedule</Link>
				</div>
			</div>
		);
	}

}
