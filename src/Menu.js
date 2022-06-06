import React from "react";
import {Link} from "react-router-dom";

export default function Menu(props) {

	return (

		<div className='menu'>
			<div className='menuitem'><Link to='/activities'><h4 className='no-margin'>Activities</h4></Link></div>
			<div className='menuitem'><Link to='/articles'><h4 className='no-margin'>Articles</h4></Link></div>
			<div className='menuitem'><Link to='/tools'><h4 className='no-margin'>Tools</h4></Link></div>
			<div className='menuitem'><Link to='/plans'><h4 className='no-margin'>Plans</h4></Link></div>
		</div>
	)

}
