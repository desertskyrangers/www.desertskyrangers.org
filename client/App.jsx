import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Activities from "./Activities";
import Legal from "./Legal";
import Members from "./Members";
import Safety from "./Safety";
import NotFound from "./NotFound";

import Footer from "./Footer";
import Articles from "./articles/Articles";
import AaTransmitterBatteryStudy from "./articles/AaTransmitterBatteryStudy";
import NorthernUtahFlyingSeason from "./articles/NorthernUtahFlyingSeason";
import Tools from "./Tools";
import Locations from "./Locations";
import Contact from "./Contact";
import Plans from "./Plans";
import ARTICLE_2024_02_19_ANTENNA_ORIENTATION from "./articles/ARTICLE_2024_02_19_ANTENNA_ORIENTATION";
import ARTICLE_2023_12_16_GETTING_STARTED from "./articles/ARTICLE_2023_12_16_GETTING_STARTED";
import ARTICLE_2022_07_19_GETTING_STARTED from "./articles/ARTICLE_2022_07_19_GETTING_STARTED";
import ARTICLE_2022_07_26_CHECKLISTS from "./articles/ARTICLE_2022_07_26_CHECKLISTS";
import ARTICLE_2023_06_30_REMOTEID from "./articles/ARTICLE_2023_06_30_REMOTEID";
import Donate from "./Donate";
import Events from "./Events";

export default function App() {

	return (
		<Router>
			<div className="app">
				<Header/>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/about" element={<About/>}/>
					<Route path="/activities" element={<Activities/>}/>
					<Route path="/contact" element={<Contact/>}/>
					<Route path="/events" element={<Events/>}/>
					<Route path="/legal" element={<Legal/>}/>
					<Route path="/locations" element={<Locations/>}/>
					<Route path="/members" element={<Members/>}/>
					<Route path="/plans" element={<Plans/>}/>
					<Route path="/safety" element={<Safety/>}/>
					<Route path="/donate" element={<Donate/>}/>
					<Route path="/tools" element={<Tools/>}/>
					<Route path="/tools/flightdeck" element={<Tools/>}/>

					<Route path="/articles" element={<Articles/>}/>
					<Route path="/articles/getting-started" element={<ARTICLE_2023_12_16_GETTING_STARTED/>}/>
					<Route path="/articles/2024-02-19-antenna-orientation" element={<ARTICLE_2024_02_19_ANTENNA_ORIENTATION/>}/>
					<Route path="/articles/2023-12-16-getting-started" element={<ARTICLE_2023_12_16_GETTING_STARTED/>}/>
					<Route path="/articles/2023-06-30-remoteid" element={<ARTICLE_2023_06_30_REMOTEID/>}/>
					<Route path="/articles/2022-07-25-checklists" element={<ARTICLE_2022_07_26_CHECKLISTS/>}/>
					<Route path="/articles/2022-07-19-getting-started" element={<ARTICLE_2022_07_19_GETTING_STARTED/>}/>
					<Route path="/articles/northern-utah-flying-season-2021-01" element={<NorthernUtahFlyingSeason/>}/>
					<Route path="/articles/aa-transmitter-battery-study-2021-01" element={<AaTransmitterBatteryStudy/>}/>

					{/* Default route */}
					<Route element={<NotFound/>}/>
				</Routes>
				<Footer/>
			</div>
		</Router>
	)

}
