import React from "react";

export default class Header extends React.Component {

	render() {
		return (
			<div className='header'>

				<div className="row center">
					<div className="column"><img width='128' height='128' src='/logo.png' alt="DSR"/></div>

					<div className="column">
						<h1 className='no-margin'>Desert Sky Rangers</h1>
						<h6 className='no-margin'>UAV flying club</h6>
					</div>

				</div>

				<div className='menu'>
					<div className='menuitem'><a href='activities'><h4 className='no-margin'>Activities</h4></a></div>
					<div className='menuitem'><a href='articles'><h4 className='no-margin'>Articles</h4></a></div>
					<div className='menuitem'><a href='about'><h4 className='no-margin'>About</h4></a></div>
				</div>

			</div>
		)
	}

}
