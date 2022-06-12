import React from "react";

export default function Plans(props) {

	return (
		<div className='content'>

			<div>
				<h1>DSR Aircraft Plans</h1>
			</div>

			<div className='plans'>
				<h2 id="dsr-001"><img className='icon' src='/plans/dsr-001/dsr-001-v1-photo.jpeg' alt="DSR-001"/> DSR-001 Aquila</h2>
				<a href="/plans/dsr-001/dsr-001-v1-overview.pdf">Aircraft Overview</a><br/>
				<a href="/plans/dsr-001/dsr-001-v1-fuselage.pdf">Fuselage Plans</a><br/>
				<a href="/plans/dsr-001/dsr-001-v1-wing.pdf">Wing Plans</a>
				<a href="https://www.thingiverse.com/thing:5409435">3D Parts</a>
				<div className='hbox-wrappable'>
					<figure>
						<img className='photo' src='/photos/aircraft/dsr-001/dsr-001-quiche-glen.jpeg' alt='DSR-001'/>
						<figcaption>The original DSR-001 designed and built by Glen.</figcaption>
					</figure>
					<figure>
						<img className='photo' src='/photos/aircraft/dsr-001/dsr-001-lawn-dart-steve.jpeg' alt='DSR-001'/>
						<figcaption>Steve's DSR-001, the Lawn Dart.</figcaption>
					</figure>
					<figure>
						<img className='photo' src='/photos/aircraft/dsr-001/dsr-001-noah.jpeg' alt='DSR-001'/>
						<figcaption>Noah's DSR-001 from the June 2022 build day.</figcaption>
					</figure>
				</div>
			</div>

		</div>
	)

}
