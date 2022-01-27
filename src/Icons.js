import React from "react";
import {faMapMarkerAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Icons {

	FLIGHTDECK_H2 = <img style={{width:'3rem',height:'3rem', margin:'-0.5rem -0.5rem -0.5rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	LOCATION  = <FontAwesomeIcon icon={faMapMarkerAlt}/>
	RALLY  = <FontAwesomeIcon icon={faUsers}/>

}


const instance = new Icons()
Object.freeze(instance)
export default instance
