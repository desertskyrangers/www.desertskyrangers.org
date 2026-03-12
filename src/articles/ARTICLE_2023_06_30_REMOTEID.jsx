import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIdBadge} from '@fortawesome/free-solid-svg-icons';

export default class RemoteId20230630 extends React.Component {

	render() {
		return (
			<div className='content'>

				<h1><FontAwesomeIcon icon={faIdBadge}/> Remote ID</h1>

				<p>
					As of 16 Sep 2023, the FAA will require
					<a href='https://www.faa.gov/uas/getting_started/remote_id'> Remote ID </a>
					for all UAS flying in US national airspace. This article give you a brief summary of what we know.
				</p>

				<h2>How Remote ID Works</h2>
				<p>
					Most Remote ID solutions use GPS to know where your UAS is, and use
					Bluetooth to transmit that data. That data can then be read by a phone
					or tablet app.
				</p>

				<h2>What To Do</h2>
				<p>There are two main ways to be compliant with Remote ID regulations:</p>
				<ol>
					<li>Buy a UAS with Remote ID built-in</li>
					<li>Add a Remote ID module</li>
				</ol>

				<h2>Built-In Remote ID UAS</h2>
				<p>
					I won't go into buying UAS with remote ID since it should be fairly
					evident how that should work. Note that most UAS that were manufactured
					before Sep 2022 most likely do not have build-in Remote ID.
				</p>

				<h2>Remote ID Module</h2>
				<p>
					Remote ID modules generally come in two flavors: with and without
					onboard GPS. If you don't already have a model that uses GPS (most do
					not) then you will need a module with onboard GPS (like the
					<a href='https://dronetag.cz/products/bs/'> Dronetag BS </a> module.
					If you already have GPS on your UAV, use can use a module without
					onboard GPS (like the
					<a href='https://dronetag.cz/products/dri/'> Dronetag DRI </a> module.
				</p>
			</div>
		)
	}

}
