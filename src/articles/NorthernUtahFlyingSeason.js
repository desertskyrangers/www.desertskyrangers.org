import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalendar} from '@fortawesome/free-solid-svg-icons';

export default class NorthernUtahFlyingSeason extends React.Component {

	render() {
		return (
			<div className='content'>

				<h1><FontAwesomeIcon icon={faCalendar}/> Northern Utah Flying Season</h1>
				<div>
					Here is a monthly calendar with general weather conditions and challenges:
					<table>
						<tr>
							<th>Month</th>
							<th className='no-wrap'>Weather</th>
							<th>Explanation</th>
						</tr>
						<tr>
							<td className='spring'>March</td>
							<td className='spring no-wrap'>Cold, Windy, Wet</td>
							<td>
								Temperatures are still cold and strong wind conditions are still possible as
								winter changes over to spring. There is a possibility of snow, rain and
								wet flying fields.
							</td>
						</tr>
						<tr>
							<td className='spring'>April</td>
							<td className='spring no-wrap'>Cold, Windy, Wet</td>
							<td>
								Temperatures are still cold and strong wind conditions are still possible as
								winter changes over to spring. There is still a possibility of snow, rain and
								wet flying fields.
							</td>
						</tr>
						<tr>
							<td className='spring'>May</td>
							<td className='spring no-wrap'>Cool, Windy, Wet</td>
							<td>
								Temperatures are still cool and string wind conditions are still possible as
								summer approaches. There is still a possibility of snow, rain and wet flying
								fields. This month generally has the most severe weather of the year.
							</td>
						</tr>
						<tr>
							<td className='summer'>June</td>
							<td className='summer no-wrap'>Warm, Breezy</td>
							<td>
								Temperatures start to warm and strong wind conditions are still possible. As
								the temperatures warm the winds usually subside resulting in favorable flight
								conditions. More daylight results in more flying hours.
							</td>
						</tr>
						<tr>
							<td className='summer'>July</td>
							<td className='summer no-wrap'>Hot, Breezy</td>
							<td>
								Temperatures can get pretty hot by this time of year and summer thunderstorms
								start to increase in the afternoons. More daylight provides more flying hours.
							</td>
						</tr>
						<tr>
							<td className='summer'>August</td>
							<td className='summer no-wrap'>Hot, Breezy</td>
							<td>
								Temperatures are still hot but start cooling a little. Summer thunderstorms
								are most prevalent this month. More daylight provides more flying hours.
							</td>
						</tr>
						<tr>
							<td className='fall'>September</td>
							<td className='fall no-wrap'>Warm, Breezy</td>
							<td>
								Temperatures are starting to cool but warm flying conditions are common. There
								is still a risk of thunderstorms but still plenty of daylight for evening
								flying.
							</td>
						</tr>
						<tr>
							<td className='fall'>October</td>
							<td className='fall no-wrap'>Cool, Breezy</td>
							<td>
								Temperatures continue to cool and breezy conditions pick up as fall starts.
								There is even the risk of rain and early snow. The days are getting shorter
								resulting in fewer flying hours.
							</td>
						</tr>
						<tr>
							<td className='fall'>November</td>
							<td className='fall no-wrap'>Cold, Windy</td>
							<td>
								Temperatures get cold as fall changes over to winter. Stronger wind conditions
								can be present and there is the possibility of rain and snow.
							</td>
						</tr>
						<tr>
							<td className='winter'>December</td>
							<td className='winter no-wrap'>Cold, Windy</td>
							<td>
								Temperatures are cold. Strong wind conditions can be present and
								there is the possibility of snow and ice. Pilot conditions can
								be pretty harsh due to wind and cold. Be sure to bundle up.
							</td>
						</tr>
						<tr>
							<td className='winter'>January</td>
							<td className='winter no-wrap'>Cold, Windy</td>
							<td>
								Temperatures are very cold at this time of year and strong wind
								conditions can be present with the possibility of snow and ice.
								Pilot conditions can be pretty harsh due to wind and cold. Be
								sure to bundle up.
							</td>
						</tr>
						<tr>
							<td className='winter'>February</td>
							<td className='winter no-wrap'>Cold, Windy</td>
							<td>
								Temperatures are still cold. Strong wind conditions can be
								present and there is the possibility of snow and ice. Pilot
								conditions can be pretty harsh due to wind and cold. Be sure to
								bundle up.
							</td>
						</tr>
					</table>
				</div>

				<p>
					2021-01-11 - Mark Soderquist - Initial publication
					2022-02-24 - Mark Soderquist - Updated with winter months
				</p>
			</div>
		)
	}

}
