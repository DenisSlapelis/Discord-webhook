import React, { Component } from 'react';
import icon from '../../assets/discord-ico.svg';

export class Header extends Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-dark" style={headerStyle}>
					<img alt="Discord" src={icon} style={imgStyle}></img>
					<strong style={textStyle} className="navbar-brand">Discord Webhook Sender</strong>
				</nav>
			</header>
		)
	}
}

const headerStyle = {
	backgroundColor: "#808de2",
	fontFamily: "inherit"
}

const imgStyle = {
	width: "35px"
}

const textStyle = {
	padding: "6px 0px 0px 0px",
	fontSize: "24px"
}

export default Header
