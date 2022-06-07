import React from "react";

export default function Plans(props) {

	return (
		<div className='content'>

			<div>
				<h1>DSR Aircraft Plans</h1>
			</div>

			<div className='plans'>
				<h2><img className='photo' src='/plans/dsr-001/dsr-001-v1-photo.jpeg' alt="DSR-001"/> DSR-001 Aquila</h2>
				<a href="/plans/dsr-001/dsr-001-v1-overview.pdf">Aircraft Overview</a><br/>
				<a href="/plans/dsr-001/dsr-001-v1-fuselage.pdf">Fuselage Plans</a><br/>
				<a href="/plans/dsr-001/dsr-001-v1-wing.pdf">Wing Plans</a>
			</div>

		</div>
	)

}
