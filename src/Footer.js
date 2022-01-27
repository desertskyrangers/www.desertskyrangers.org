import React from "react";
import CopyrightText from "./CopyrightText";
import {Link} from "react-router-dom";

export default class Footer extends React.Component {

	render() {
		return (
			<div className='footer'>
				<div className='copyright'><Link to='/legal'><CopyrightText/></Link></div>
				<div className='tag-line'><q>When flying inverted, down is up, and up is expensive.</q> -Unknown</div>
			</div>
		)
	}

}
