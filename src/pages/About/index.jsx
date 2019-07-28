import React, { Component } from 'react';
import profileImage from './img/profile.jpg';

import './style.scss';

export default class About extends Component {
	render () {
		return (
			<div className="about">
				<article className="content">
					<div className="resume">
						<div className="intro">
							<figure className="profile-picture">
								<img src={profileImage} alt="Bruno Annunciato"/>
							</figure>
							<h1 className="text">
								Me,
							</h1>
							<p className="text">
								21 years old, São Paulo - Brazil
							</p>
						</div>

						<ul className="resume__capacities">
							<li><span role='img' aria-label='computer emoji'>💻</span> Web developer</li>
							<li><span role='img' aria-label='guitar emoji'>🎸</span> Guitar and Ukulele player</li>
							<li><span role='img' aria-label='video-game emoji'>🎮</span> Counter-Strike player</li>
							<li><span role='img' aria-label='dog emoji'>🐶</span> Dogs lover</li>
							<li><span role='img' aria-label='hearth emoji'>❤️</span>️ Pearl Jam</li>
						</ul>
					</div>

					<div className="history">
						<p>
							Probably my first line of code was “shutdown -t 30 -s -f” in a .bat file, to send to my friends on MSN and see them go offline.
						</p>

						<p>
							After that, I found a PHP script that sent form data via email, so I developed an orkut phishing page that I saved as favorite on the school library computers.
						</p>

						<p>
							When I entered high school, I helped my father maintain his company's website, which used a CMS called Modx, but always putting pieces of code together, not understanding what was going on.
						</p>

						<p>
							When I graduated from the technical school in computer science, I chose to go to digital design college, because in addition to development, I learned to enjoy motion while in high school, and realized that I had more difficulty learning animation alone than making codes work.
						</p>

						<p>
							In the first year of college, I got an internship in the development area at Jüssi, whose main task was to develop email marketing.
						</p>

						<p>
							When I was hired, I started working with Vtex store maintenance, Wordpress blog development and landing page creation.
						</p>

						<p>
							Currently I work as a developer at Jüssi, taking care of some stores in Vtex IO with React.js.
						</p>

					</div>
				</article>
			</div>
		)
	}
}