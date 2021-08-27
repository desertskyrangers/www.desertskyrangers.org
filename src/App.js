import './App.css';
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

export default class App extends React.Component {

	render() {
		return (
			<div className="app">
				<Header/>
				<div className='content'>
					<div className="row">
						<div className="column menu">
						</div>
						<div className="column">
							<h2>About Us</h2>
							<p>
								The Desert Sky Rangers is a group of radio control aviation enthusiasts working to
								develop knowledge and skill through study and experiment with unmanned aerial vehicles.
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
							</p>
							<h5><a href=""><FontAwesomeIcon icon={faMapMarkerAlt}/></a> Pony Express Elementary</h5>
							<p>
								A large rectangular field with only a few trees next to the school. This
								field provides a long and wide field perfect for beginner pilots and
								experts alike. Due to the open space to the northeast there are no houses
								in the immediate area. However, please do not fly during school hours.
							</p>
							<h5><a href="https://slco.org/parks/wardle-fields-regional-park/"><FontAwesomeIcon icon={faMapMarkerAlt}/></a> Wardle Fields Regional Park</h5>
							<p>
								Large open fields including a large, bowl shaped field not marked for
								sports. There are only a few small trees near the field and a gently
								sloping hill on the edge of the bowl.
							</p>
						</div>
						<div className="column news">
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}

}
