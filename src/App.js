import "./App.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./Header";
import LightHeader from "./LightHeader";
import Home from "./Home";
import About from "./About";
import Legal from "./Legal";
import Members from "./Members";
import NotFound from "./NotFound";
import Footer from "./Footer";

export default class App extends React.Component {

	render() {
		var atHome=window.location.pathname==='/';
		return (
			<div className="app">
				{atHome?<Header/>:<LightHeader/>}
				<Router>
					<Switch>
						<Route exact path="/about" component={About}/>
						<Route exact path="/members" component={Members}/>
						<Route exact path="/legal" component={Legal}/>
						<Route exact path="/" component={Home}/>

						{/* Default route */}
						<Route component={NotFound}/>
					</Switch>
				</Router>
				<Footer/>
			</div>
		);
	}

}
