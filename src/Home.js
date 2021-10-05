import './App.css';
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {

	render() {
		return (
			<div className='content'>
				<div className="row">
					<div className="column menu">
					</div>
					<div className="column">

						<h2>2021 Warm Flying Season Coming to an End</h2>
						<p>
							The warm weather for the 2021 flying season will be coming to an
							end soon with colder weather setting in during October and fewer
							daylight hours. If you are flying in cold temperatures, be sure
							you know your limits. If your fingers are cold and stiff you
							cannot control your aircraft well. Use a hat to keep your ears
							warm, even a slight breeze takes the heat out of you.
						</p>

						<h2>Where We Fly</h2>
						<p>
							If you're wondering what's up in the sky, it might just be us hanging
							out at some of our favorite locations:
						</p>
						<h5><a href="https://goo.gl/maps/i3NkAMGppHkqknxw6"><FontAwesomeIcon icon={faMapMarkerAlt}/></a> Morning Cloak Park</h5>
						<p>
							A small, bowl shaped park surrounded by small trees. This park is
							popular with the group due to the proximity of several members.
							Mark has a <a href="http://mark.soderquist.net/weather/">weather
							station</a> nearby that gives realtime flight conditions for the
							area.
						</p>
						<h5><a href="https://goo.gl/maps/oLuZKi1qZzowQPj58"><FontAwesomeIcon icon={faMapMarkerAlt}/></a> Pony Express Elementary</h5>
						<p>
							A large rectangular field with only a few trees next to the school. This
							field provides a long and wide field perfect for beginner pilots and
							experts alike. Due to the open space to the northeast there are no houses
							in the immediate area. However, please do not fly during school hours.
						</p>
						<h5><a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27"><FontAwesomeIcon icon={faMapMarkerAlt}/></a> Wardle Fields Regional Park</h5>
						<p>
							<a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional Park</a> has
							large open fields including a large, bowl shaped field not marked for
							sports. There are only a few small trees near the field and a gently
							sloping hill on the edge of the bowl.
						</p>
					</div>
					<div className="column news">
					</div>
				</div>
			</div>
		);
	}

}
