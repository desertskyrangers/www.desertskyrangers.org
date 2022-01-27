import React from "react";
import {Link} from "react-router-dom";

export default function Menu(props) {

	return (

		<div className='menu'>
			<div className='menuitem'><Link to='/activities'><h4 className='no-margin'>Activities</h4></Link></div>
			<div className='menuitem'><Link to='/articles'><h4 className='no-margin'>Articles</h4></Link></div>
			<div className='menuitem'><Link to='/tools'><h4 className='no-margin'>Tools</h4></Link></div>
			<div className='menuitem'><Link to='/about'><h4 className='no-margin'>About</h4></Link></div>
			<div className='menuitem'><a href='https://flightdeck.desertskyrangers.org/login' className='hbox'><img width='32' height='32' src='https://flightdeck.desertskyrangers.org/logo.png' alt="DSR"/><h4 className='no-margin'>FlightDeck</h4></a></div>
		</div>
	)

}
