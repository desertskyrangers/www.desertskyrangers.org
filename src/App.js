import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Activities from "./Activities";
import Legal from "./Legal";
import Members from "./Members";
import NotFound from "./NotFound";

import Footer from "./Footer";
import Articles from "./articles/Articles";
import AaTransmitterBatteryStudy from "./articles/AaTransmitterBatteryStudy";
import NorthernUtahFlyingSeason from "./articles/NorthernUtahFlyingSeason";
import Tools from "./Tools";

export default function App() {

	return (
		<Router>
			<div className="app">
				<Header/>
				<Routes>
					<Route exact path="/" element={<Home/>}/>
					<Route exact path="/about" element={<About/>}/>
					<Route exact path="/activities" element={<Activities/>}/>
					<Route exact path="/legal" element={<Legal/>}/>
					<Route exact path="/members" element={<Members/>}/>
					<Route exact path="/tools" element={<Tools/>}/>

					<Route exact path="/articles" element={<Articles/>}/>
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
