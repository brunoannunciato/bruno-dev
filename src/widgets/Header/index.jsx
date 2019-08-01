import React from 'react';
import Icon from '../../components/Icons';
import { Link } from "react-router-dom";
import resume from '../Menu/cv-bruno-annunciato.pdf';

import Menu from '../Menu';

const sitePages = [
	{
		title: 'About',
		link: '/about'
	},{
		title: 'Jobs',
		link:'/jobs'
	}
]

const Header = props => {
	return (
		<>
			<Icon
				icon="menu"
				className="menu-icon"
				handleClick={ props.toggleMenu }
			/>

			<Menu
				menuActive={ props.activeMenu }
				closeClick={ () => {
					props.toggleMenu()
					props.activePage(false)
				}}
			>

			<li className={`logo ${props.showLogo ? 'show' : '' }`}>Bruno Annunciato</li>

			{ sitePages.map(item => {
				return(
					<li key={item.title} onClick={props.activePage} className='menu__item'>
						<Link to={item.link}>{item.title}</Link>
					</li>
				)
			}) }

			<li className='menu__item'>
				<a href={resume} target='_blank' rel='noopener noreferrer'>
					Resume
				</a>
			</li>

			</Menu>
		</>
	)
}

export default Header;