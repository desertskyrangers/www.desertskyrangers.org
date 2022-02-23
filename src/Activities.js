import React from 'react';
import Icons from "./Icons";

export default class Activities extends React.Component {

	render() {
		return (
			<div className='content'>

				<h2>{Icons.RALLY} Jan 2022 Ranger Rally</h2>
				<p>
					We held the Jan 2022 Ranger Rally on Saturday, Jan 29th
					at <a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27">{Icons.LOCATION} Wardle Fields Regional Park</a>.
					It was a cold morning with temperatures just above freezing. Several of us
					got to try out new equipment and aircraft that we received over the
					holidays. Hudson was able to maiden his new Bixler 2. Noah flew his
					rebuilt FliteTest Arrow successfully and we all got a birdseye view from
					Mark's new FPV setup on his Typhoon III. Blaine also joined the fun
					with his Bixler and giant Volantex Ranger 2000.
					<figure>
						<img className='photo' src='/photos/2022-01-29-hudson-bixler-1.jpeg' alt='DRS Ranger Rally'/>
						<figcaption>Hudson's new Bixler 2.</figcaption>
					</figure>
				</p>

				<h2>{Icons.RALLY} Nov 2021 Ranger Rally</h2>
				<figure>
					<img className='photo' src='/photos/dsr-ranger-rally-2021-11-20.jpg' alt='DRS Ranger Rally'/>
					<figcaption>Hudson at the controls, Mark and Percy looking on.</figcaption>
				</figure>
				<p>
					We held an impromptu Ranger Rally on Saturday, Nov 20th. For the first time we had all members
					of the club available for <a href='/about'>group photo</a> and had a chilly morning of
					flying. Despite the cool weather we had a great time getting together, increasing our flight
					times and sharing stories.
				</p>

			</div>
		)
	}

}
