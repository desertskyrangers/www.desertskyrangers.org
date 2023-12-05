import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
import ARTICLE_2022_07_19_GETTING_STARTED from "./articles/ARTICLE_2022_07_19_GETTING_STARTED";
import ARTICLE_2022_07_26_CHECKLISTS from "./articles/ARTICLE_2022_07_26_CHECKLISTS";
import ARTICLE_2023_06_30_REMOTEID from "./articles/ARTICLE_2023_06_30_REMOTEID";
import Support from "./Support";
import Events from "./Events";

export default function App() {

	return (
		<Router>
			<div className="app">
				<Header/>
				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/about" element={<About/>}/>
					<Route exact path="/activities" element={<Activities/>}/>
					<Route exact path="/contact" element={<Contact/>}/>
					<Route exact path="/events" element={<Events/>}/>
					<Route exact path="/legal" element={<Legal/>}/>
					<Route exact path="/locations" element={<Locations/>}/>
					<Route exact path="/members" element={<Members/>}/>
					<Route exact path="/plans" element={<Plans/>}/>
					<Route exact path="/safety" element={<Safety/>}/>
					<Route exact path="/support" element={<Support/>}/>
					<Route exact path="/tools" element={<Tools/>}/>
					<Route exact path="/tools/flightdeck" element={<Tools/>}/>

					<Route exact path="/articles" element={<Articles/>}/>
					<Route exact path="/articles/2023-06-30-remoteid" element={<ARTICLE_2023_06_30_REMOTEID/>}/>
					<Route exact path="/articles/2022-07-25-checklists" element={<ARTICLE_2022_07_26_CHECKLISTS/>}/>
					<Route exact path="/articles/2022-07-19-getting-started" element={<ARTICLE_2022_07_19_GETTING_STARTED/>}/>
					<Route exact path="/articles/northern-utah-flying-season-2021-01" element={<NorthernUtahFlyingSeason/>}/>
					<Route exact path="/articles/aa-transmitter-battery-study-2021-01" element={<AaTransmitterBatteryStudy/>}/>

					{/* Default route */}
					<Route element={<NotFound/>}/>
				</Routes>
				<Footer/>
			</div>
		</Router>
	)

}
