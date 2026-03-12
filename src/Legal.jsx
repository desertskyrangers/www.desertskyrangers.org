import React from 'react';

export default class Legal extends React.Component {

	render() {
		return (
			<div className='content'>
				<h1>Copyright</h1>
				<p>
					All content on this website is under copyright protection unless
					otherwise specified. Linking to this website is permitted. Some
					content on the website is under copyright protection by a separate
					owner. Such ownership will be noted.
				</p>
				<div>
					<dl>
						<dt>Ranger Rally photos provided by</dt>
						<dd>Noah Booker</dd>
						<dd>Steve Booker</dd>
						<dd>John Brammer</dd>
						<dd>Mark Soderquist</dd>
					</dl>
					<dl>
						<dt>&copy; Fonticons, Inc.</dt>
						<dd><a href='https://fontawesome.com/'>Font Awesome free icons</a></dd>
					</dl>
				</div>
			</div>
		)
	}

}
