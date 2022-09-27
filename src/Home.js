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
							<h2>{Icons.DESERT_SKY_RANGERS} Fall Ranger Rally!</h2>
							<p>
								Calling all Rangers and friends! The Fall Ranger Rally will be
								held on Saturday, October 15th at 9am
								at <a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional	Park</a>. In
								order to participate in flying events you must follow
								all <Link to="/safety">Safety Rules</Link>. Spectators are welcome.
							</p>
							<p>
								Event activities include:
							</p>
							<ul>
								<li>Open flying</li>
								<li>Flight Demonstrations</li>
								<li>Static Demonstrations</li>
								<li>Flight Competitions</li>
								<li>Socializing</li>
								<li>...and more</li>
							</ul>
						</div>

						<div className='announcement'>
							<h2>{Icons.TAKEOFF} Fall Flying Season Arrives!</h2>
							<p>
								In spite of fall starting with record breaking temperatures, the <a href="articles/northern-utah-flying-season-2021-01">fall flying season</a>
								has arrived. Temperatures will fall over the next few months and
								daylight hours will quickly disappear. Flying in the morning will
								be chilly and flying in the evening will become more comfortable.
							</p>
						</div>

					</div>
					<div className="news column">
						<div>
							<p className='title'>Ranger Rallies</p>
						</div>
						<div>
							<h5>2022</h5>
							<h6>Aug 13 - Wardle Fields</h6>
							<h6>Oct 15 - Wardle Fields</h6>
						</div>
						<div>
							<h5>2023</h5>
							<h6>Feb 18 - Wardle Fields</h6>
							<h6>Apr 22 - Wardle Fields</h6>
							<h6>Aug 19 - Wardle Fields</h6>
							<h6>Oct 21 - Wardle Fields</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
