import React from "react";

export default function GettingStarted(props) {

	return (
		<div className='content'>

			<h1>Getting Started</h1>

			<p>
				We are regularly asked what equipment we recommend to get started in
				the radio controlled aircraft hobby. There are usually several things
				to consider when choosing equipment. If you are "just" checking out
				the hobby or have a passing interest, you might consider using a
				computer flight simulator before you invest time and money in physical
				aircraft. If you an aviation enthusiast looking to increase your
				participation in the sport, this page is for you.
			</p>

			<h2>Aircraft</h2>
			<div className="row product">
				<p>
					<img src="https://cdn-global-hk.hobbyking.com/media/catalog/product/cache/1/image/660x415/17f82f742ffe127f42dca9de82fb58b1/1/7/178758_2_1.jpg" alt="Bixler II" align="left"/>
					We generally recommend that the first airplane you fly is gentle,
					durable and reasonably inexpensive. The aircraft we usually recommend
					is the <a href="https://hobbyking.com/en_us/h-king-bixler-2-pnf-glider-epo-1500mm-59.html">Hobby King Bixler II</a>.
					The PNF(plug-n-fly) version comes with most of the hardware installed,
					and requires the least amount of effort to assemble. This kit only
					needs three other things in order to fly, a battery, a charger and a
					radio.
				</p>
			</div>

			<h2>Battery</h2>
			<div className="row product">
				<p>
					<img src="https://cdn-global-hk.hobbyking.com/media/catalog/product/cache/1/image/660x415/17f82f742ffe127f42dca9de82fb58b1/t/u/turnigy-2200mah-3s-25c-lipo-pack-t2200-3s-25.jpg" alt="Battery" align="left"/>
					For the Bixler II we follow the manufacturer recommendation of a
					2200mAh 3S battery like the <a href="https://hobbyking.com/en_us/turnigy-2200mah-3s-25c-lipo-pack.html">Turnigy 2200mAh 3S 25C Lipo Pack</a>.
					One battery will give you 10-12 mins of flight time under normal
					circumstances. After you get proficient with flying you aircraft you
					will probably want to have multiple batteries so you can fly more
					often.
				</p>
			</div>

			<h2>Charger</h2>
			<div className="row product">
				<p>
					<img src="https://m.media-amazon.com/images/I/71m2iaY8uGL._AC_SL1500_.jpg" alt="Charger" align="left"/>
					There are a lot of options for battery chargers that it can be hard to
					find one that suits your needs. We recommend a simple charger to start
					with that can be plugged into a wall socket like the <a href="https://www.amazon.com/Battery-Charger-Hiyiton-Discharger-Connectors/dp/B096LWLD39">Hiyiton Lipo Batter Charger</a>.
					This charger comes with the power supply and cables you will need for
					your battery. The important part is that it has the yellow XT60
					connector that matches your battery.
				</p>
			</div>

			<h2>Radio</h2>
			<div className="row product">
				<p>
					<img src="https://m.media-amazon.com/images/I/61YKTG2bdsL._AC_SL1000_.jpg" alt="Radio" align="left"/>
					The radio is the way that you will control your aircraft. There are
					many brands of radio offering lots of options. An inexpensive beginner
					radio we recommend is the <a href="https://www.amazon.com/Flysky-FS-i6X-Transmitter-FS-iA6B-Receiver/dp/B0744DPPL8">FlySky i6X</a>.
					This radio will come with one receiver to be put in your aircraft.
					The transmitter can support more than one aircraft and other receivers
					may be purchased without buying another transmitter, thus reducing the
					cost of having more aircraft.
				</p>
			</div>

		</div>
	)

}
