import React from "react";
import {faBatteryFull, faExclamation, faCalendar, faMapMarkerAlt, faPlaneDeparture, faAddressCard, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Icons {

	ABOUT = <FontAwesomeIcon icon={faExclamation}/>
	BATTERY = <FontAwesomeIcon icon={faBatteryFull}/>
	TAKEOFF = <FontAwesomeIcon icon={faPlaneDeparture}/>
	CALENDAR = <FontAwesomeIcon icon={faCalendar}/>
	CONTACT = <FontAwesomeIcon icon={faAddressCard}/>
	DESERT_SKY_RANGERS = <img style={{width: '4rem', height: '4rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='/logo.png' alt="DSR"/>
	FLIGHTDECK_H1 = <img style={{width: '4rem', height: '4rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	FLIGHTDECK_H2 = <img style={{width: '3rem', height: '3rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	LOCATION = <FontAwesomeIcon icon={faMapMarkerAlt}/>
	RALLY = <FontAwesomeIcon icon={faUsers}/>
}


const instance = new Icons()
Object.freeze(instance)
export default instance
