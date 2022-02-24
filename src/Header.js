import React from "react";
import Menu from "./Menu";
import {Link} from "react-router-dom";
import Icons from "./Icons";

export default class Header extends React.Component {

	render() {
		return (
			<div className='header'>

				<div className="row center">
					<Link to='/'>{Icons.DESERT_SKY_RANGERS}&nbsp;&nbsp;</Link>

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
