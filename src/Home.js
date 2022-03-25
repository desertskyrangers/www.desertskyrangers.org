import './App.css';
import React from "react";
import Icons from "./Icons";
import {Link} from "react-router-dom";

export default class Home extends React.Component {

	render() {
		return (
			<div className='content'>
				<div className="row">
					<div className="info column">
						<Link to="/locations" className="infoitem">{Icons.LOCATION} Where We Fly</Link>
					</div>
					<div className="column">

						<div className='announcement'>
							<a href='https://flightdeck.desertskyrangers.org/'>
								<img height="300" src="/screenshots/flightdeck.png" alt="FlightDeck Screenshot" className="embedded right"/>
							</a>
							<h1>{Icons.FLIGHTDECK_H1} FlightDeck</h1>
							<p>
								Welcome to the <Link to='/tools/flightdeck'>FlightDeck</Link>,
								your personal destination for UAV management, flight log and
								pilot data.
							</p>
							<p>
								FlightDeck is a resource for advanced and novice RC enthusiasts
								alike. Your FlightDeck features will enhance your flight
								experience with flight time data collection, fleet management,
								aircraft inventory and statistics, and accessory inventory
								tracking. Your FlightDeck Dashboard includes the ability to time
								and log your flights for each of your aircraft. These flight
								logs can then be used to provide valuable statistics for you as
								a pilot, aircraft owner, or just an observer.
							</p>
							<p>
								Recent enhancements to the FlightDeck now include adding
								individual aircraft specs from wingspan and weight to wing area
								and wing loading for each aircraft. Additionally, sharing your
								fleet information with your colleagues, friends as family makes
								FlightDeck a tool for tracking your skills as a pilot,
								collaborating on shared objectives with fellow pilots, and
								growing the sport of RC aviation.
							</p>
						</div>

						<h2>{Icons.TAKEOFF} Spring Flying Season Arrives!</h2>
						<p>The spring <a href="articles/northern-utah-flying-season-2021-01">
							flying season</a> is here. While the weather can still be
							cold, there is more sunlight and daylight hours. Now is a good time
							to check your flight box, charge the batteries and prepare for
							some good flying in 2022.
						</p>

					</div>
					<div className="news column">
						<div>
							<div className='title'>Weather Humor</div>
							<p>Why was the storm so dark and gloomy?<br/>- Because it was "mis-thunder-stood".</p>
							<p>Why do clouds feel overlooked?<br/>- Because they're in "di-skies".</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
