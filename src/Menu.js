import React from "react";

export default function Menu(props) {

	return (
		<div className='menu'>
			<div className='menuitem'><a href='flightdeck'><h4 className='no-margin'>FlightDeck</h4></a></div>
			<div className='menuitem'><a href='activities'><h4 className='no-margin'>Activities</h4></a></div>
			<div className='menuitem'><a href='articles'><h4 className='no-margin'>Articles</h4></a></div>
			<div className='menuitem'><a href='about'><h4 className='no-margin'>About</h4></a></div>
		</div>
	)

}
