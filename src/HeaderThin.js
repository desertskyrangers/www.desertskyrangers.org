import React from "react";

export default class HeaderThin extends React.Component {

	render() {
		return (
			<div className='header'>

				<div className="row center">
					<div className="column">
						<a href='/'><img width='64' height='64' src='/logo.png' alt="DSR"/></a>
					</div>

					<div className="column">
						<a href='/'><h3 className='no-margin'>Desert Sky Rangers</h3></a>
					</div>
				</div>

			</div>
		)
	}

}
