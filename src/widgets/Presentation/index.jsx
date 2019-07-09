import React, { Component } from 'react';
import './style.scss';

export default class Presentation extends Component {

	render() {
		return (
			<section className="presentation">
				<p> Hello there </p>

				<h1> <span>I'm</span> {this.props.name}</h1>

				<h2>
					a <span>Web Developer</span> from <span>Brazil</span>
				</h2>
			</section>
		)
	}
}
