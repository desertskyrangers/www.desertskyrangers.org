import Icons from "./Icons"

export default function Support() {

	return (
		<div className='content'>
			<h1>{Icons.HANDSHAKE} Club Support</h1>

			<h2>Donations</h2>
			<p>
				In order to run the club there are some operating costs for the web site,
				the FlightDeck application, domain registration as well as activity costs
				for the Ranger Rallies and other club activities.
			</p>
			<p>
				We accept financial donations to the club via Venmo:
			</p>
			<img className='venmo qrcode' src='venmo.qrcode.svg' alt='Venmo QR Code'/>

		</div>
	)

}
