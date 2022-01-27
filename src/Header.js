import React from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";

export default class Header extends React.Component {

	render() {
		return (
			<div className='header'>

				<div className="row center">
					<div className="column">
						<Link to='/'><img width='64' height='64' src='/logo.png' alt="DSR"/></Link>
					</div>

					<div className="column">
						<Link to='/'><h3 className='no-margin'>Desert Sky Rangers</h3></Link>
						<div>UAV Flying Club</div>
					</div>
				</div>

				<Menu/>

			</div>
		)
	}

}
