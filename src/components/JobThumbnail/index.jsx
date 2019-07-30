import React, { Component } from 'react';

import './style.scss';

export default class JobThumbnail extends Component  {

	render () {
		return (
			<div className="thumbnail" onClick={this.props.handleClick}>
				<a href={this.props.link !== undefined ? this.props.link + '?utm_campaign=brunodev' : 'javascript:void(0)'} target='_blank' rel="noopener noreferrer">
					<figure>
						<img src={this.props.image} alt=""/>
					</figure>
				</a>
				<p className='thumbnail__title'><strong>Project: </strong>{this.props.name}</p>
				<div className="thumbnail__technologies">
					<p className="languages"><strong>technologies: </strong>{this.props.languages}</p>
				</div>
			</div>
		)
	}
}