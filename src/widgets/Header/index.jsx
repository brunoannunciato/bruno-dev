import React, { Component } from 'react';
import Icon from '../../components/Icons';

import Menu from '../Menu';

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
						this.props.activePage()
					}}
				>
					<li onClick={this.props.activePage}>Sobre</li>
				</Menu>
			</>
		)
	}
}