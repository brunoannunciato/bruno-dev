import React from 'react';
import './style.scss';

const Presentation = props => {

	return (
		<section className="presentation">
			<p> Hello there </p>

			<h1> <span>I'm</span> { props.name }</h1>

			<h2>
				a <span>Web Developer</span> from <span>Brazil</span>
			</h2>
		</section>
	)

}

export default Presentation;