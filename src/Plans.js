import React from "react";

export default function Plans(props) {

	return (
		<div className='content'>

			<div>
				<h1>DSR Aircraft Plans</h1>
			</div>

			<div className='plans'>
				<h2><img style={{width: '4rem', height: '4rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='/plans/dsr-001/DSR_001.png' alt="DSR-001"/> DSR-001</h2>
				<a href="/plans/dsr-001/DSR_001 v1-Overview.pdf">Aircraft Overview</a><br/>
				<a href="/plans/dsr-001/DSR_001 v1-Fuselage.pdf">Fuselage Plans</a><br/>
				<a href="/plans/dsr-001/DSR_001 v1-Wing.pdf">Wing Plans</a>
			</div>

		</div>
	)

}
