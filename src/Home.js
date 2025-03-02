import './App.css';
import React from "react";
import Icons from "./Icons";
import News from "./News";
import Info from "./Info";

export default class Home extends React.Component {

	getSeasonMessage() {
		let month = new Date().getMonth();

		let content;
		if (month > 1 && month < 5) {
			content = <div className='announcement'>
				<h2>{Icons.SPRING} Spring Flying Season Has Arrived</h2>
				<p>
					The <a href="articles/northern-utah-flying-season-2021-01">spring flying season</a> has
					arrived. The temperatures are fluctuating as normal this year and
					there are more windy days than calm. The winter flying
					season has also been building season for many of us, as we try
					out new designs and get ready for the new year. We are looking
					forward to getting out more as the temperatures warm up.
				</p>
			</div>;
		} else if (month < 8) {
			content = <div className='announcement'>
				<h2>{Icons.SUMMER} Summer Flying Season Has Arrived</h2>
				<p>
					The <a href="articles/northern-utah-flying-season-2021-01">summer flying season</a> has
					arrived. The temps are temperatures are above normal this year,
					and the flying has been tough on pilots and planes. We expect
					monsoon moisture to move in soon, bringing slightly cooler
					temps, but also more wind, rain and wet fields.
				</p>
			</div>;
		} else if (month < 11) {
			content = <div className='announcement'>
				<h2>{Icons.FALL} Fall Flying Season Has Arrived</h2>
				<p>
					The <a href="articles/northern-utah-flying-season-2021-01">fall flying season</a> has
					arrived. The temps are still above normal for this time of year
					and we have enjoyed some extended warm-ish evening flying.
					Temperatures will continue to fall as we move towards winter,
					providing crisp flying conditions and clearing the flying fields
					as sports practices wrap up for the year. Looking forward to the
					Fall Ranger Rally and some Thanksgiving weekend flying.
				</p>
			</div>;
		} else {
			content = <div className='announcement'>
				<h2>{Icons.WINTER} Winter Flying Season Has Arrived</h2>
				<p>
					The <a href="articles/northern-utah-flying-season-2021-01">winter flying season</a> has
					arrived. The temps are chilly, but around normal for this time of year. The snow has
					started falling already, so we are hoping for a good snow season. For the rugged pilots
					out there, don't forget to dress warm. For those staying warm indoors, we would love to
					hear about your winter building projects and what you are planning for spring. Don't
					forget we have a winter Ranger Rally coming up in February.
				</p>
			</div>;
		}

		return <div>{content}</div>;
	}

	render() {
		return (
			<div className='content'>
				<div className="row">

					<Info/>

					<div className="column">

						<div className='announcement'>
							<h2>{Icons.DESERT_SKY_RANGERS} Desert Sky Rangers</h2>
							<p>
								Founded in 2021, the Desert Sky Rangers is a group of radio control aviation enthusiasts
								working to develop knowledge and skill through study and experiment with unmanned aerial
								vehicles. Originally just a small group of friends, the group has grown to include
								neighbors and friends of friends. Aspiring pilots and engineers of all ages are welcome
								to join us to learn to fly, enjoy flight time, and generally get together to talk about
								flying.
							</p>
						</div>
						<div className='hbox-wrappable'>
							<figure>
								<a href='https://photos.app.goo.gl/4pLGvZZQJc7y6ENo7'>
									<img className='photo'
											 src='https://lh3.googleusercontent.com/pw/ADCreHfFyXSpEBy6Ewzqm35syYfLuj5yic_jBEzTU1zKkQ-_JQPz9owUO6LInEaep4dv5W-YyuRZ2wfeD8SlBuEnIpkRwhRSYqWr6nMV6bU8C9nVY7TJdx9PXG_-Ac8cj6WQjm9xjvXW_2J9SAYkjquPWBNoLw=w2342-h1764-s-no-gm'
											 alt='DSR Ranger Rally'/>
								</a>
							</figure>

							<figure>
								<a href='https://photos.app.goo.gl/Pk4LwoPbhzXnbdgT7'>
									<img className='photo' src='/photos/2022-10-15-ranger-rally.jpg'
											 alt='DSR Ranger Rally'/>
								</a>
							</figure>
						</div>

						{this.getSeasonMessage()}

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

					</div>

					<News/>

				</div>
			</div>
		);
	}

}
