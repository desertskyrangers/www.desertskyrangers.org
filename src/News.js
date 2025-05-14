import './App.css';
import React from "react";
import {Link} from "react-router-dom";

export default class News extends React.Component {

	render() {
		return (
			<div className="news column">
				<Link to='/events' className='title infoitem'>Event Schedule</Link>
				<Link to='/events' className='infoitem event schedule'>
					<h5>2025</h5>
					<h6 className='complete'>Feb 22 - Ranger Rally</h6>
					<h6>May 17 - Ranger Rally</h6>
					<h6>Aug 16 - Ranger Rally</h6>
					<h6>Oct 25 - Ranger Rally</h6>
				</Link>
				<Link to='/events' className='infoitem event schedule'>
					<h5>2026</h5>
					<h6>Feb - Ranger Rally</h6>
					<h6>May - Ranger Rally</h6>
					<h6>Aug - Ranger Rally</h6>
					<h6>Oct - Ranger Rally</h6>
				</Link>
			</div>
		);
	}

}
