import './App.css';
import React from "react";
import {Link} from "react-router-dom";

export default class News extends React.Component {

	render() {
		return (
			<div className="news column">
				<Link to='/events' className='title infoitem'>Event Schedule</Link>
				<Link to='/events' className='infoitem event schedule'>
					<h5>No Planned Events</h5>
					{/*<h6>Feb - Ranger Rally</h6>*/}
					{/*<h6>May - Ranger Rally</h6>*/}
					{/*<h6>Aug - Ranger Rally</h6>*/}
					{/*<h6>Oct - Ranger Rally</h6>*/}
				</Link>
			</div>
		);
	}

}
