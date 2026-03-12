import Icons from "./Icons";
import React from "react";

export default function Locations() {

	return (
		<div className='content'>
			<h1>{Icons.LOCATION} Where We Fly</h1>
			<p>
				If you're wondering what's up in the sky, it might just be us hanging
				out at some of our favorite locations:
			</p>
			<h5><a href="https://goo.gl/maps/i3NkAMGppHkqknxw6">{Icons.LOCATION}</a> Morning Cloak Park (Evenings before sunset)</h5>
			<p>
				A small, bowl shaped park surrounded by small trees. This location
				is a bit challenging to fly at due to the small field and
				surrounding trees but is popular with the group due to the
				proximity of several members. Mark maintains
				a <a href="https://mark.soderquist.net/weather/">weather station</a> nearby
				that gives realtime flight conditions for the area.
			</p>
			<h5><a href="https://goo.gl/maps/oLuZKi1qZzowQPj58">{Icons.LOCATION}</a> Pony Express Elementary (some Saturday mornings)</h5>
			<p>
				A large rectangular field with only a few trees next to the school. This
				field provides a long and wide field perfect for beginner pilots and
				experts alike. Due to the open space to the northeast there are no houses
				in the immediate area. However, please do not fly during school hours.
			</p>
			<h5><a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27">{Icons.LOCATION}</a> Wardle Fields Regional Park (some Saturday mornings)</h5>
			<p>
				<a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional
					Park</a> has
				large open fields including a large, bowl shaped field not marked for
				sports. There are only a few small trees near the field and a gently
				sloping hill on the edge of the bowl.
			</p>
		</div>
	)

}
