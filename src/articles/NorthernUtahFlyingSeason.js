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
							<td>March</td>
							<td className='no-wrap'>Cold, Windy, Wet</td>
							<td>
								Temperatures are still cold and strong wind conditions are still possible as
								winter changes over to spring. There is a possibility of snow, rain and
								wet flying fields.
							</td>
						</tr>
						<tr>
							<td>April</td>
							<td className='no-wrap'>Cold, Windy, Wet</td>
							<td>
								Temperatures are still cold and strong wind conditions are still possible as
								winter changes over to spring. There is still a possibility of snow, rain and
								wet flying fields.
							</td>
						</tr>
						<tr>
							<td>May</td>
							<td className='no-wrap'>Cool, Windy, Wet</td>
							<td>
								Temperatures are still cool and string wind conditions are still possible as
								summer approaches. There is still a possibility of snow, rain and wet flying
								fields. This month generally has the most severe weather of the year.
							</td>
						</tr>
						<tr>
							<td>June</td>
							<td className='no-wrap'>Warm, Breezy</td>
							<td>
								Temperatures start to warm and strong wind conditions are still possible. As
								the temperatures warm the winds usually subside resulting in favorable flight
								conditions. More daylight results in more flying hours.
							</td>
						</tr>
						<tr>
							<td>July</td>
							<td className='no-wrap'>Hot, Breezy</td>
							<td>
								Temperatures can get pretty hot by this time of year and summer thunderstorms
								start to increase in the afternoons. More daylight provides more flying hours.
							</td>
						</tr>
						<tr>
							<td>August</td>
							<td className='no-wrap'>Hot, Breezy</td>
							<td>
								Temperatures are still hot but start cooling a little. Summer thunderstorms
								are most prevalent this month. More daylight provides more flying hours.
							</td>
						</tr>
						<tr>
							<td>September</td>
							<td className='no-wrap'>Warm, Breezy</td>
							<td>
								Temperatures are starting to cool but warm flying conditions are common. There
								is still a risk of thunderstorms but still plenty of daylight for evening
								flying.
							</td>
						</tr>
						<tr>
							<td>October</td>
							<td className='no-wrap'>Cool, Breezy</td>
							<td>
								Temperatures continue to cool and breezy conditions pick up as fall starts.
								There is even the risk of rain and early snow. The days are getting shorter
								resulting in fewer flying hours.
							</td>
						</tr>
						<tr>
							<td>November</td>
							<td className='no-wrap'>Cold, Windy</td>
							<td>
								Temperatures get cold and fall changes over to winter. Stronger wind conditions
								can be present and there is the possibility of rain and snow.
							</td>
						</tr>
					</table>
				</div>

			</div>
		)
	}

}
