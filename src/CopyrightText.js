import React from "react";

export default class CopyrightText extends React.Component {

	render() {
		return (
				<span>&copy; Desert Sky Rangers {new Date().getFullYear()}</span>
		)
	}

}
