import React from "react";

export default class Header extends React.Component {

	render() {
		return (
			<div className='header'>

				<div className="row center">
					<div className="column"><img width='128' height='128' src='logo.png' alt="DSR"/></div>

					<div className="column">
						<h1>Desert Sky Rangers</h1>
						<h6>UAV flying club</h6>
					</div>
				</div>

			</div>
		)
	}

}
