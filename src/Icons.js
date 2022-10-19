import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {brands, solid} from "@fortawesome/fontawesome-svg-core/import.macro";

class Icons {

	ABOUT = <FontAwesomeIcon icon={solid('question')}/>
	BATTERY = <FontAwesomeIcon icon={solid('battery-full')}/>
	TAKEOFF = <FontAwesomeIcon icon={solid('plane-departure')}/>
	CALENDAR = <FontAwesomeIcon icon={solid('calendar')}/>
	CONTACT = <FontAwesomeIcon icon={solid('address-card')}/>
	DESERT_SKY_RANGERS = <img style={{width: '4rem', height: '4rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='/logo.png' alt="DSR"/>
	FLIGHTDECK_H1 = <img style={{width: '4rem', height: '4rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	FLIGHTDECK_H2 = <img style={{width: '3rem', height: '3rem', margin: '-0.5rem -0.5rem -0.5rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	FLIGHTDECK = <img style={{width: '2rem', height: '2rem', margin: '-0.3rem 0.2rem -0.7rem 0rem'}} src='https://flightdeck.desertskyrangers.org/logo.png' alt="FlightDeck Logo"/>
	HANDSHAKE = <FontAwesomeIcon icon={solid('handshake')}/>
	INSTAGRAM = <FontAwesomeIcon icon={brands('instagram')}/>
	LOCATION = <FontAwesomeIcon icon={solid('map-marker-alt')}/>
	RALLY = <FontAwesomeIcon icon={solid('users')}/>
	SAFETY = <span><FontAwesomeIcon icon={solid('exclamation')}/><FontAwesomeIcon icon={solid('exclamation')}/><FontAwesomeIcon icon={solid('exclamation')}/></span>
	TWITTER = <FontAwesomeIcon icon={brands('twitter')}/>
}


const instance = new Icons()
Object.freeze(instance)
export default instance
