import React, { Component } from 'react';
import Icon from '../../components/Icons';
import { Link } from "react-router-dom";

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

				{ sitePages.map(item => {
					return(
						<li key={item.title} onClick={this.props.activePage} className='menu__item'>
							<Link to={item.link}>{item.title}</Link>
						</li>
					)
				}) }

				</Menu>
			</>
		)
	}
}