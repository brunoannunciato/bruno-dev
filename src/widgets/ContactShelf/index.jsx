import React from 'react';
import './style.scss';
import Icons from '../../components/Icons';

const ContactShelf = () => {
	const constructShelf = () => {
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
			iconsObj.map((icn, idx) => {
				return(
					<Icons icon={icn.icon} key={icn+idx} url={icn.url}/>
				)
			})
		);
	}

	return (
		<div className="ContactShelf">
			{ constructShelf() }
		</div>
	)
}

export default ContactShelf;
