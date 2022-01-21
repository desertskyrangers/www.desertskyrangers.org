import React from "react";
import Menu from "./Menu";

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

				<Menu/>

			</div>
		)
	}

}
