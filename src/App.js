import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./Header";
import HeaderThin from "./HeaderThin";
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

export default class App extends React.Component {

	render() {
		var atHome=window.location.pathname==='/';
		return (
			<div className="app">
				{atHome?<Header/>:<HeaderThin/>}
				<Router>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/about" component={About}/>
						<Route exact path="/activities" component={Activities}/>
						<Route exact path="/legal" component={Legal}/>
						<Route exact path="/members" component={Members}/>

						<Route exact path="/articles" component={Articles}/>
						<Route exact path="/articles/northern-utah-flying-season-2021-01" component={NorthernUtahFlyingSeason}/>
						<Route exact path="/articles/aa-transmitter-battery-study-2021-01" component={AaTransmitterBatteryStudy}/>

						{/* Default route */}
						<Route component={NotFound}/>
					</Switch>
				</Router>
				<Footer/>
			</div>
		);
	}

}
