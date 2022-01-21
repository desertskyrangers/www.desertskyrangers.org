import React from "react";

export default function FlightDeck(props) {

	return (
		<div className='content'>

			<div className='banner'>
				<img width='64' height='64' src='https://flightdeck.desertskyrangers.org/logo.png' alt="DSR"/>
				<h1>FlightDeck</h1>
				<div className='gap-2'/>
				<a href='https://flightdeck.desertskyrangers.org/register'>
					<button className='action-button'>Create an Account</button>
				</a>
				<a href='https://flightdeck.desertskyrangers.org/login'>
					<button className='action-button'>Log In</button>
				</a>
			</div>

			<p>
				Welcome to the FlightDeck, your personal destination for UAV management,
				flight logging and pilot data. Built on modern cloud and web technology,
				FlightDeck is your one stop for all your UAV pilot needs. Features include:
			</p>
			<ul>
				<li>Aircraft asset management</li>
				<li>Battery asset management</li>
				<li>Flight logging</li>
				<li>Flight timing</li>
				<li>Pilot metrics</li>
				<li>...new features released regularly</li>
			</ul>

		</div>
	)
}
