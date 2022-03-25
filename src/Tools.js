import React from "react";
import Icons from "./Icons";
import {Link} from "react-router-dom";

export default function Tools(props) {

	return (
		<div className='content'>

			<div>
				<a href='https://flightdeck.desertskyrangers.org/'>
					<img height="300" src="/screenshots/flightdeck.png" alt="FlightDeck Screenshot" className="embedded right"/>
				</a>
				<h1>{Icons.FLIGHTDECK_H1} FlightDeck</h1>
				<p>
					Welcome to the FlightDeck,
					your personal destination for UAV management, flight log and
					pilot data.
				</p>
				<div>
					<a href='https://flightdeck.desertskyrangers.org/register'>
						<button className='action-button'>Create an Account</button>
					</a>
					<a href='https://flightdeck.desertskyrangers.org/login'>
						<button className='action-button'>Login</button>
					</a>
				</div>
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
				</p></div>

			<p>
				Features include:
			</p>
			<ul>
				<li>Aircraft and battery management</li>
				<li>Flight timing and entry</li>
				<li>Pilot, aircraft and battery metrics</li>
				<li>Public and private user dashboards</li>
				<li>...new features released regularly</li>
			</ul>

			<h2>Project Participation</h2>
			<p>
				Visit the <a href='https://github.com/desertskyrangers/flightdeck/'>FlightDeck project page</a> for information
				about <a href='https://github.com/desertskyrangers/flightdeck/milestones'>upcoming versions and features</a>,
				or to <a href='https://github.com/desertskyrangers/flightdeck/issues'>view or report issues and enhancement requests</a>.
			</p>

		</div>
	)
}
