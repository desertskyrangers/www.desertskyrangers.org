import './App.css';
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

export default class Home extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className="row">
                    <div className="column menu">
                    </div>
                    <div className="column">

                        <h2>Nov 2021 Fun-Fly</h2>
                        <figure>
                            <img className='photo' src='/photos/dsr-funfly-2021-11-20.jpg' alt='DRS Fun Fly'/>
                            <figcaption>Hudson at the controls, Mark and Percy looking on.</figcaption>
                        </figure>
                        <p>
                            We held an impromptu fun fly on Saturday, Nov 20th. For the first time we had all members
                            of the club available for <a href='/about'>group photo</a> and had a chilly morning of
                            flying. Despite the cool weather we had a great time getting together, increasing our flight
                            times and sharing stories.
                        </p>

                        <h2>Where We Fly</h2>
                        <p>
                            If you're wondering what's up in the sky, it might just be us hanging
                            out at some of our favorite locations:
                        </p>
                        <h5><a href="https://goo.gl/maps/i3NkAMGppHkqknxw6"><FontAwesomeIcon
                            icon={faMapMarkerAlt}/></a> Morning Cloak Park (Thursdays before sunset)</h5>
                        <p>
                            A small, bowl shaped park surrounded by small trees. This location
                            is a bit challenging due to the small field and surrounding trees
                            but is popular with the group due to the proximity of several members.
                            Mark has a <a href="http://mark.soderquist.net/weather/">weather
                            station</a> nearby that gives realtime flight conditions for the
                            area.
                        </p>
                        <h5><a href="https://goo.gl/maps/oLuZKi1qZzowQPj58"><FontAwesomeIcon
                            icon={faMapMarkerAlt}/></a> Pony Express Elementary (some Saturday mornings)</h5>
                        <p>
                            A large rectangular field with only a few trees next to the school. This
                            field provides a long and wide field perfect for beginner pilots and
                            experts alike. Due to the open space to the northeast there are no houses
                            in the immediate area. However, please do not fly during school hours.
                        </p>
                        <h5><a href="https://goo.gl/maps/WfuVVZqe4Qv32PX27"><FontAwesomeIcon
                            icon={faMapMarkerAlt}/></a> Wardle Fields Regional Park (some Saturday mornings)</h5>
                        <p>
                            <a href='https://slco.org/parks/wardle-fields-regional-park/'>Wardle Fields Regional
                                Park</a> has
                            large open fields including a large, bowl shaped field not marked for
                            sports. There are only a few small trees near the field and a gently
                            sloping hill on the edge of the bowl.
                        </p>
                    </div>
                    <div className="column news">
                        <div>
                            <div className='title'>Weather Humor</div>
                            <p>Why was the storm so dark and gloomy?<br/>- Because it was "mis-thunder-stood".</p>
                            <p>Why do clouds feel overlooked?<br/>- Because they're in "di-skies".</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
