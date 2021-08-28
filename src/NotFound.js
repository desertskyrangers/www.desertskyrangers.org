import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFrown} from '@fortawesome/free-solid-svg-icons';

export default class NotFound extends React.Component {

	render() {
		return (
			<div className='content'>
				<h1><FontAwesomeIcon icon={faFrown}/> Link Not Found</h1>

				<p>
					The URL you requested is not found on this site! This might be due
					to a bad external link, a bad internal link or simply a typing
					error in the navigation bar.
				</p>
			</div>
		)
	}

}
