import Icons from "./Icons";

export default function Safety() {

	return (
		<div className='content'>
			<h1>{Icons.SAFETY} Event Safety Rules</h1>

			<p>
				All participants and spectators are expected to follow federal, local
				and club safety rules.
			</p>

			<h2>Desert Sky Rangers Rules</h2>
			<ul>
				<li>To fly your aircraft in club events you must be approved by a club flight instructor</li>
				<li>You must show proof of passing The Recreational UAS Safety Test (TRUST) test</li>
				<li>You must show proof of FAA registration</li>
				<li>All aircraft must have an FAA registration number</li>
				<li>Follow event manager instructions</li>
			</ul>

			<h2>FAA Rules</h2>
			<ul>
				<li><a href='https://www.faa.gov/uas/recreational_flyers'>FAA Rules for Recreational Flyers</a></li>
			</ul>
			<ul>
				<li>Fly at or below 400 feet</li>
				<li>Keep your aircraft within the visual line of sight</li>
				<li>Do not operate your aircraft in a dangerous manner</li>
				<li>Take The Recreational UAS Safety Test (TRUST) test and <b>carry proof of passage</b></li>
				<li>Have current FAA registration and <b>carry proof of registration</b></li>
				<li>Mark all aircraft with registration number</li>
			</ul>

			<h2>Local Rules</h2>
			<ul>
			<li><a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional Park</a></li>
			</ul>

		</div>
	)

}
