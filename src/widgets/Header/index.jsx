import React, { Component } from 'react';
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

export default class Header extends Component {
	render() {
		return (
			<>
				<Icon
					icon="menu"
					className="menu-icon"
					handleClick={ this.props.toggleMenu }
				/>

				<Menu
					menuActive={ this.props.activeMenu }
					closeClick={ () => {
						this.props.toggleMenu()
						this.props.activePage(false)
					}}
				>

				<li className={`logo ${this.props.showLogo ? 'show' : '' }`}>Bruno Annunciato</li>

				{ sitePages.map(item => {
					return(
						<li key={item.title} onClick={this.props.activePage} className='menu__item'>
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
}