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
							<h2>{Icons.TAKEOFF} Fall Flying Season Arrives!</h2>
							<p>
								In spite of fall starting with record breaking temperatures, the
								<a href="articles/northern-utah-flying-season-2021-01">fall flying season</a>
								has arrived. Temperatures will fall over the next few months and
								daylight hours will quickly disappear. Flying in the morning will
								be chilly and flying in the evening will become more comfortable.
							</p>
						</div>

					</div>
					<div className="news column">
					</div>
				</div>
			</div>
		);
	}

}
