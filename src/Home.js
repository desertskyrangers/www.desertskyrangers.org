import './App.css';
import React from "react";
import Icons from "./Icons";
import {Link} from "react-router-dom";

export default class Home extends React.Component {

	render() {
		return (
			<div className='content'>
				<div className="row">
					<div className="column menu">
					</div>
					<div className="column">

						<h2>{Icons.RALLY} Feb 2022 Ranger Rally</h2>
						<p>
							We held the Feb 2022 Ranger Rally on Saturday, Feb 12th
							at <a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27">{Icons.LOCATION} Wardle Fields Regional Park</a>.
							This time we chose to fly in the afternoon which turned out to be
							a great choice because the wind calmed down and the temperatures
							came up to give us fantastic flying weather. Micah brought his dad
							out to fly with us along with a beautiful modified Piper Cub.
							Hudson put in several more flights on his Bixler II and had great
							landings. Noah flew his Bixler and Arrow. Unfortunately the Arrow
							had a spectacular nose-in landing so he will be working on a new
							build soon. Glen brought out several new aircraft. His biplane
							struggled to get off the ground due to the long grass and even
							then the flights were nothing more than a hop. His Cronos I had
							its maiden flight and after putting in a 4S battery flew nicely.
							Last, but not least, Holden got one launch with his new rocket.
							We're not sure how high it went but we were glad the parachute did
							not fully deploy so it came down nearby. All in all, a good day!
						</p>

						<h2>{Icons.FLIGHTDECK_H2} Announcing FlightDeck!</h2>
						<p>
							Welcome to the <Link to='/flightdeck'>FlightDeck</Link>, your personal destination for UAV management,
							flight logging and pilot data.
						</p>

						<h2>{Icons.LOCATION} Where We Fly</h2>
						<p>
							If you're wondering what's up in the sky, it might just be us hanging
							out at some of our favorite locations:
						</p>
						<h5><a href="https://goo.gl/maps/i3NkAMGppHkqknxw6">{Icons.LOCATION}</a> Morning Cloak Park (Thursdays before sunset)</h5>
						<p>
							A small, bowl shaped park surrounded by small trees. This location
							is a bit challenging to fly at due to the small field and
							surrounding trees but is popular with the group due to the
							proximity of several members. Mark maintains
							a <a href="https://mark.soderquist.net/weather/">weather station</a> nearby
							that gives realtime flight conditions for the area.
						</p>
						<h5><a href="https://goo.gl/maps/oLuZKi1qZzowQPj58">{Icons.LOCATION}</a> Pony Express Elementary (some Saturday mornings)</h5>
						<p>
							A large rectangular field with only a few trees next to the school. This
							field provides a long and wide field perfect for beginner pilots and
							experts alike. Due to the open space to the northeast there are no houses
							in the immediate area. However, please do not fly during school hours.
						</p>
						<h5><a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27">{Icons.LOCATION}</a> Wardle Fields Regional Park (some Saturday mornings)</h5>
						<p>
							<a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional
								Park</a> has
							large open fields including a large, bowl shaped field not marked for
							sports. There are only a few small trees near the field and a gently
							sloping hill on the edge of the bowl.
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
