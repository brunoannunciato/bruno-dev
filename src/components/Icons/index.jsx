import React, { Component } from 'react';
import './style.scss';

export default class Icons extends Component {
	render() {
		return (
			<a
				href={this.props.url}
				className={`icon-${this.props.icon} ${this.props.className}`} 
				target={this.props.target === undefined ? 'blank' : this.props.target} 
				title={this.props.icon}
				onClick={this.props.handleClick}
			>
				{this.props.childrean}
			</a>
		)
	}
}
