import React from 'react';

export default class About extends React.Component {

	render() {
		return (
			<div className='content'>

				<h1>About Us</h1>

				<img className='photo' src='/photos/dsr-club-2021-11-20.jpg' alt='DSR Club'/>

				<p>
					Founded in 2021, the Desert Sky Rangers is a group of radio control aviation
					enthusiasts working to develop knowledge and skill through study and experiment
					with unmanned aerial vehicles. Originally just a small group of friends,
					the group has grown to include neighbors and friends of friends. Aspiring
					pilots and engineers of all ages are welcome to join us to learn to fly,
					enjoy flight nights and generally get together to talk about flying.
				</p>

			</div>
		)
	}

}
