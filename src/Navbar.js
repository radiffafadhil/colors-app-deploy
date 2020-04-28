import React, { Component } from 'react';
import Slider from 'rc-slider/lib/Slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	render() {
		const { level, changeLevel } = this.props;
		return (
			<nav className="Navbar">
				<div className="logo">
					<a href="#">ReactColorApp</a>
				</div>
				<div className="slider-container">
					<span>Level: {level}</span>
					<div className="slider">
						<Slider defaultValue={level} min={100} max={900} step={100} onAfterChange={changeLevel} />
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
