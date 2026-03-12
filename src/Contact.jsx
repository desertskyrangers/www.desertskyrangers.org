import React from 'react';
import Icons from "./Icons";

export default class Contact extends React.Component {

	render() {
		return (
			<div className='content'>
				<div>
					<div>
						<h1>{Icons.CONTACT} Contact Us</h1>

						<h2>General Questions</h2>
						<a href='mailto:contact@desertskyrangers.org'>contact@desertskyrangers.org</a>

						<h2>Coordinator</h2>
						<h3>Mark Soderquist</h3>
						<a href='mailto:mark@desertskyrangers.org'>mark@desertskyrangers.org</a>

					</div>
				</div>
			</div>
		)
	}

}
