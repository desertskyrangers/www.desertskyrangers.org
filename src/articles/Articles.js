import React from 'react';
import Icons from "../Icons";

export default class Articles extends React.Component {

	render() {
		return (
			<div className='content'>

				<h6><a href="articles/2024-02-19-antenna-orientation">{Icons.TAKEOFF} 2024-02-19 Antenna Orientation</a></h6>
				<h6><a href="articles/2023-12-16-getting-started">{Icons.TAKEOFF} 2023-12-16 Getting Started</a></h6>
				<h6><a href="articles/2023-06-30-remoteid">{Icons.TAKEOFF} 2023-06-30 Remote ID</a></h6>
				<h6><a href="articles/2022-07-25-checklists">{Icons.TAKEOFF} 2022-07-25 Checklists</a></h6>
				<h6><a href="articles/2022-07-19-getting-started">{Icons.TAKEOFF} 2022-07-19 Getting Started</a></h6>
				<h6><a href="articles/northern-utah-flying-season-2021-01">{Icons.CALENDAR} 2021-01-11 Northern Utah Flying Season</a></h6>
				<h6><a href="articles/aa-transmitter-battery-study-2021-01">{Icons.BATTERY} 2021-01-11 AA Transmitter Battery Study</a></h6>

			</div>
		)
	}

}
