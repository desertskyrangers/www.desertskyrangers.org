import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBatteryFull} from '@fortawesome/free-solid-svg-icons';

export default class AaTransmitterBatteryStudy extends React.Component {

	render() {
		return (
			<div className='content'>

				<h1><FontAwesomeIcon icon={faBatteryFull}/> AA Transmitter Battery Study</h1>

				<p>
					Recently we learned some valuable lessons regarding rechargeable
					batteries in our radio transmitters. Being budget minded, many of
					us have the FlySky i6X transmitter that uses four AA size
					batteries. The expectation is, of course, that each battery is 1.5
					volts. Some of us started using rechargeable NiMH batteries and
					found after some time that our transmitter was always showing that
					our battery level was at 60%, even with fully charged batteries.
				</p>
				<p>
					This is where we started to research the problem. We found that
					NiMH batteries only provide 1.2 volts of power even when fully
					charged. We then researched other battery chemistries and found the
					following information:
					<table>
						<tr>
							<th>Chemistry</th>
							<th>Voltage</th>
							<th>Rechargeable</th>
							<th>Recommended</th>
						</tr>
						<tr>
							<td>Alkaline</td>
							<td>1.5</td>
							<td>No</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td>NiMH</td>
							<td>1.2</td>
							<td>Yes</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td>NiZn</td>
							<td>1.6</td>
							<td>Yes</td>
							<td>Yes</td>
						</tr>
						<tr>
							<td>Lithium *</td>
							<td>1.5</td>
							<td>Yes</td>
							<td>No</td>
						</tr>
						<tr>
							<td colSpan='100'>* The Lithium chemistry is regulated to 1.5 volts</td>
						</tr>
					</table>
				</p>
				<p>
					CAUTION: The Lithium batteries are regulated to 1.5 volts and most
					will force a hard shutoff if 1.5 volts cannot be maintained. This is
					fine in a toothbrush but is very dangerous with radio control
					transmitters because it will essentially turn off your radio. Please
					do not use Lithium AA batteries in your transmitter.
				</p>
				<p>
					We have tested the NiZn batteries and found slightly improved range.
					We will probably continue to use the NiZn type for now. These
					batteries can also taper off the voltage pretty quickly. Be prepared
					to land immediately before the radio turns off.
				</p>
				<p>
					Note that there are other transmitter vendors that also support
					the use of Lithium Polymer batteries and we invite you to research
					these options for your use.
				</p>
				<p>
					2021-08-28 - Mark Soderquist<br/>
					2021-01-11 - Mark Soderquist<br/>
					2021-01-09 - Mark Soderquist
				</p>

			</div>
		)
	}

}
