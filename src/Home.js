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
						<Link to="/locations" className="infoitem">{Icons.LOCATION} Where We Fly</Link>
						<Link to="/safety" className="infoitem">{Icons.SAFETY} Event Safety</Link>
						<Link to='/support' className='infoitem'>{Icons.HANDSHAKE} How to Support Us</Link>
						<a href="https://twitter.com/desertskyranger?ref_src=twsrc%5Etfw" className="infoitem">{Icons.TWITTER} Follow Us on Twitter</a>
						<a href="https://www.instagram.com/desertskyrangers/" className="infoitem">{Icons.INSTAGRAM} Follow Us on Instagram</a>
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
							<h2>{Icons.RALLY} Spring Ranger Rally</h2>
							<p>
								Calling all Rangers and friends! The Spring Ranger Rally is this coming Saturday, May 20 at 9am
								at <a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional Park</a>. In
								order to participate in flying events you must follow
								all <Link to="/safety">Event Safety</Link> rules. Spectators are welcome.
							</p>
						</div>

						<div className='announcement'>
							<h2>{Icons.RALLY} Summer Ranger Rally</h2>
							<p>
								Calling all Rangers and friends! The Summer Ranger Rally will be Saturday, Aug 19 at 9am at
								the <a href="https://www.blm.gov/visit/bonneville-salt-flats">Bonneville Salt Flats</a>.
								This is a special location for our rallies and requires extra
								planning due to the distance required to drive. For those in the
								Riverton area it will take right at two hours of travel. More
								details will be provided as we get closer. In
								order to participate in flying events you must follow
								all <Link to="/safety">Event Safety</Link> rules. Spectators are welcome.
							</p>
						</div>

						<div className='announcement'>
							<h2>{Icons.DESERT_SKY_RANGERS} Spring Flying Season Has Arrived</h2>
							<p>
								The <a href="articles/northern-utah-flying-season-2021-01">spring flying season</a> has
								arrived. The temps are still below normal this year and
								we have received a lot of snow (good for us). The winter flying
								season has also been building season for many of us, as we try
								out new designs and get ready for the new year. We are looking
								forward to getting out more as the temperatures warm up.
							</p>
						</div>

					</div>

					<div className="news column">
						<div>
							<p className='title'>Ranger Rallies</p>
						</div>
						<div>
							<h5>2023</h5>
							<h6>Feb 18 - Wardle Fields</h6>
							<h6>May 20 - Wardle Fields</h6>
							<h6>Aug 19 - Bonneville Salt Flats</h6>
							<h6>Oct 21 - Wardle Fields</h6>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
