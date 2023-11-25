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
						<a href="https://groupme.com/join_group/92491185/smZWqFGQ" className="infoitem">{Icons.GROUPME} Join us on GroupMe</a>
						<Link to="/locations" className="infoitem">{Icons.LOCATION} Where We Fly</Link>
						<Link to="/safety" className="infoitem">{Icons.SAFETY} Event Safety</Link>
						<Link to='/support' className='infoitem'>{Icons.HANDSHAKE} How to Support Us</Link>
						<Link to='/tools/flightdeck' className="infoitem">{Icons.FLIGHTDECK}FlightDeck</Link>
					</div>

					<div className="column">

						{/*<div className='announcement'>*/}
						{/*	<h2>{Icons.DESERT_SKY_RANGERS} Fall Ranger Rally!</h2>*/}
						{/*	<p>*/}
						{/*		Calling all Rangers and friends! The Fall Ranger Rally will be*/}
						{/*		held on Saturday, October 15th at 9am*/}
						{/*		at <a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional Park</a>. In*/}
						{/*		order to participate in flying events you must follow*/}
						{/*		all <Link to="/safety">Event Safety</Link> rules. Spectators are welcome.*/}
						{/*	</p>*/}
						{/*	<div className='row space-evenly'>*/}
						{/*		<div className='column'>*/}
						{/*			<p>*/}
						{/*				Event activities include:*/}
						{/*			</p>*/}
						{/*			<ul>*/}
						{/*				<li>Open flying</li>*/}
						{/*				<li>Flight Demonstrations</li>*/}
						{/*				<li>Static Demonstrations</li>*/}
						{/*				<li>Flight Competitions</li>*/}
						{/*				<li>Socializing</li>*/}
						{/*				<li>...and more</li>*/}
						{/*			</ul>*/}
						{/*		</div>*/}
						{/*		<div className='column'>*/}
						{/*			<p>Rally Information:</p>*/}
						{/*			<ul>*/}
						{/*				<li><a href='https://drive.google.com/file/d/10b7U2rPOQPHwd5-MgdfxUihurRs94K5C/view?usp=sharing'>Ranger Rally Data Sheet</a></li>*/}
						{/*				<li><a href='https://drive.google.com/file/d/1sulwYF7Tn2Kt38r0y2eZ7GyDHq7TNt5y/view?usp=sharing'>Ranger Rally Wardle Fields Map</a></li>*/}
						{/*			</ul>*/}
						{/*		</div>*/}
						{/*	</div>*/}
						{/*</div>*/}

						<div className='announcement'>
							<h2>{Icons.RALLY} Fall Ranger Rally</h2>
							<p>
								The Fall Ranger Rally was a success and concludes the flight
								rallies for 2023. Check
								the <Link to='/activities'>Activities</Link> page
								for details on all the activities this year.
							</p>
						</div>

						{/*<div className='announcement'>*/}
						{/*	<h2>{Icons.DESERT_SKY_RANGERS} Spring Flying Season Has Arrived</h2>*/}
						{/*	<p>*/}
						{/*		The <a href="articles/northern-utah-flying-season-2021-01">spring flying season</a> has*/}
						{/*		arrived. The temps are still below normal this year and*/}
						{/*		we have received a lot of snow (good for us). The winter flying*/}
						{/*		season has also been building season for many of us, as we try*/}
						{/*		out new designs and get ready for the new year. We are looking*/}
						{/*		forward to getting out more as the temperatures warm up.*/}
						{/*	</p>*/}
						{/*</div>*/}

						{/*<div className='announcement'>*/}
						{/*	<h2>{Icons.DESERT_SKY_RANGERS} Summer Flying Season Has Arrived</h2>*/}
						{/*	<p>*/}
						{/*		The <a href="articles/northern-utah-flying-season-2021-01">spring flying season</a> has*/}
						{/*		arrived. The temps are still below normal this year and*/}
						{/*		we have received a lot of snow (good for us). The winter flying*/}
						{/*		season has also been building season for many of us, as we try*/}
						{/*		out new designs and get ready for the new year. We are looking*/}
						{/*		forward to getting out more as the temperatures warm up.*/}
						{/*	</p>*/}
						{/*</div>*/}

						<div className='announcement'>
							<h2>{Icons.DESERT_SKY_RANGERS} Fall Flying Season Has Arrived</h2>
							<p>
								The <a href="articles/northern-utah-flying-season-2021-01">fall flying season</a> has
								arrived. The temps are still above normal for this time of year
								and we have enjoyed some extended warm-ish evening flying.
								Temperatures will continue to fall as we move towards winter,
								providing crisp flying conditions and clearing the flying fields
								as sports practices wrap up for the year. Looking forward to the
								Fall Ranger Rally and some Thanksgiving weekend flying.
							</p>
						</div>

						{/*<div className='announcement'>*/}
						{/*	<h2>{Icons.DESERT_SKY_RANGERS} Winter Flying Season Has Arrived</h2>*/}
						{/*	<p>*/}
						{/*		The <a href="articles/northern-utah-flying-season-2021-01">spring flying season</a> has*/}
						{/*		arrived. The temps are still below normal this year and*/}
						{/*		we have received a lot of snow (good for us). The winter flying*/}
						{/*		season has also been building season for many of us, as we try*/}
						{/*		out new designs and get ready for the new year. We are looking*/}
						{/*		forward to getting out more as the temperatures warm up.*/}
						{/*	</p>*/}
						{/*</div>*/}

					</div>

					<div className="news column">
						<div>
							<p className='title'>Events</p>
						</div>
						<div>
							<h5>2023</h5>
							<h6>Dec 09 - Ranger Rendezvous</h6>
							<h5>2024</h5>
							<h6>Feb 17 - Ranger Rally</h6>
							<h6>May 18 - Ranger Rally</h6>
							<h6>Aug 17 - Ranger Rally</h6>
							<h6>Oct 19 - Ranger Rally</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
