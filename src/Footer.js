import React from "react";
import CopyrightText from "./CopyrightText";

export default class Footer extends React.Component {

	render() {
		return (
			<div className='footer'>
				<div className='copyright'><a href='/legal'><CopyrightText/></a></div>
				<div className='tag-line'><q>When flying inverted, down is up, and up is expensive.</q> -Unknown</div>
			</div>
		)
	}

}
