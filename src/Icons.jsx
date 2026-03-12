import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {
	faAddressCard,
	faBatteryFull,
	faBurst,
	faCalendar,
	faHandshake,
	faHashtag,
	faMapMarkerAlt,
	faPlaneDeparture,
	faPlaneUp,
	faQuestion,
	faSeedling,
	faSnowflake,
	faSun,
	faTriangleExclamation,
	faUsers
} from "@fortawesome/free-solid-svg-icons";
import {faCanadianMapleLeaf, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

class Icons {

	ABOUT = <FontAwesomeIcon icon={faQuestion}/>
	BATTERY = <FontAwesomeIcon icon={faBatteryFull}/>
	BURST = <FontAwesomeIcon icon={faBurst}/>
	TAKEOFF = <FontAwesomeIcon icon={faPlaneDeparture}/>
	CALENDAR = <FontAwesomeIcon icon={faCalendar}/>
	CLUB = <FontAwesomeIcon icon={faUsers}/>
	CONTACT = <FontAwesomeIcon icon={faAddressCard}/>
	DESERT_SKY_RANGERS = <img style={{width: '4rem', height: '4rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='/image/logo.png' alt="DSR"/>
	FLIGHTDECK_H1 = <img style={{width: '4rem', height: '4rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	FLIGHTDECK_H2 = <img style={{width: '3rem', height: '3rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	FLIGHTDECK = <img style={{width: '2rem', height: '2rem', margin: '-0.3rem 0.2rem -0.7rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	GROUPME = <FontAwesomeIcon icon={faHashtag}/>
	HANDSHAKE = <FontAwesomeIcon icon={faHandshake}/>
	INSTAGRAM = <FontAwesomeIcon icon={faInstagram}/>
	LOCATION = <FontAwesomeIcon icon={faMapMarkerAlt}/>
	RALLY = <FontAwesomeIcon icon={faPlaneUp}/>
	SAFETY = <FontAwesomeIcon icon={faTriangleExclamation}/>
	TWITTER = <FontAwesomeIcon icon={faTwitter}/>
	SPRING = <FontAwesomeIcon icon={faSeedling}/>
	SUMMER = <FontAwesomeIcon icon={faSun}/>
	AUTUMN = <FontAwesomeIcon icon={faCanadianMapleLeaf}/>
	WINTER = <FontAwesomeIcon icon={faSnowflake}/>
}


const instance = new Icons()
Object.freeze(instance)
export default instance
