import './App.css';
import React from "react";
import Icons from "./Icons";
import {Link} from "react-router-dom";

export default class Info extends React.Component {

	render() {
		return (
			<div className="info column">
				<a href="https://groupme.com/join_group/92491185/smZWqFGQ"
					 className="infoitem">{Icons.GROUPME} Join us on GroupMe</a>
				<Link to="/articles/getting-started" className="infoitem">{Icons.TAKEOFF} Getting Started</Link>
				<Link to="/locations" className="infoitem">{Icons.LOCATION} Where We Fly</Link>
				<Link to="/safety" className="infoitem">{Icons.SAFETY} Event Safety</Link>
				<Link to="/contact" className="infoitem">{Icons.CONTACT} Contact Us</Link>
				<Link to='/donate' className='infoitem'>{Icons.HANDSHAKE} How to Support Us</Link>
				<Link to='/tools/flightdeck' className="infoitem">{Icons.FLIGHTDECK}FlightDeck</Link>
			</div>
		);
	}

}
