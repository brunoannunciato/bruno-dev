import React, { Component } from 'react';
import './app.scss';

import Icon from './components/Icons';

import Menu from './widgets/Menu'
import Presentation from './widgets/Presentation';
import ContactShelf from './widgets/ContactShelf';

class App extends Component {
	constructor () {
		super();

		this.state = {
			activeMenu: false
		}
	}

	render = () => {
		return(
			<div className="app">
				<section className="content">
					<Presentation
						name="Bruno Annunciato"
					/>

					<ContactShelf />
				</section>

				<Icon
					icon="menu"
					className="menu-icon"
					handleClick={() => {
						this.setState({ activeMenu: true })
					}} 
				/>

				<Menu
					menuActive={this.state.activeMenu}
					closeClick={() => { this.setState({ activeMenu: false }) } }
				>
				</Menu>
			</div>		
		)
	}
}

export default App;