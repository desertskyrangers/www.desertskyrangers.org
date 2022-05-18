import React from 'react';
import Icons from "./Icons";

export default class Contact extends React.Component {

	render() {
		return (
			<div className='content'>
				<div>
					<div>
						<h1>{Icons.CONTACT} Contact Us</h1>
						<br/>
						Send email to: <a href='mailto:contact@desertskyrangers.org'>contact@desertskyrangers.org</a>
					</div>
				</div>
			</div>
		)
	}

}
