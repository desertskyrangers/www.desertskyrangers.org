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
						<Link to='/tools/flightdeck' className="infoitem">{Icons.FLIGHTDECK}FlightDeck</Link>
						<Link to="/safety" className="infoitem">{Icons.SAFETY} Safety Rules</Link>
						<Link to="/locations" className="infoitem">{Icons.LOCATION} Where We Fly</Link>
					</div>
					<div className="column">

						<div className='announcement'>
							<h2>{Icons.DESERT_SKY_RANGERS} August 2022 Ranger Rally</h2>
							<p>
								The August 2022 Ranger Rally is scheduled for Saturday, August
								13 at 9am at <a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27">{Icons.LOCATION} Wardle Fields Regional Park</a> in Bluffdale. We invite all DSR
								members, family, friends and visitors to attend. <Link to='/safety'>Please follow
								all club and FAA rules</Link> while enjoying our event.
							</p>
						</div>

						<div className='announcement'>
							<h2>{Icons.TAKEOFF} Summer Flying Season Arrives!</h2>
							<p>The summer <a href="articles/northern-utah-flying-season-2021-01">
								flying season</a> is here. The temperature is hot and the daylight
								is long. Be sure to keep your batteries cool with shade on the
								ground and plenty of ventilation while flying. Stay hydrated and
								pay attention to the weather as summer thunderstorms may pop up at
								any time.
							</p>
						</div>

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
