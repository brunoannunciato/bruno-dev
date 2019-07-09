import React, { Component } from 'react';
import './style.scss';
import Icons from '../../components/Icons';

export default class ContactShelf extends Component {
	constructShelf = () => {
		const iconsObj = [
			{
				icon: 'twitter',
				url: '//twitter.com/brunoannunciato'
			},{
				icon: 'github',
				url: '//github.com/brunoannunciato'
			}, {
				icon: 'codepen',
				url: '//codepen.io/brunoannunciato'
			}, {
				icon: 'linkedin',
				url: '//www.linkedin.com/in/bruno-annunciato-b20163149'
			}, {
				icon: 'instagram',
				url: '//www.instagram.com/brunobannunciato'
			}, {
				icon: 'steam2',
				url: '//steamcommunity.com/id/quiabo'
			}
		]

		return (
			iconsObj.map((icn) => {
				return(
					<Icons icon={icn.icon} url={icn.url}/>
				)
			})
		);
	}

	render() {
		return (
			<div className="ContactShelf">
				{ this.constructShelf() }
			</div>
		)
	}
}
