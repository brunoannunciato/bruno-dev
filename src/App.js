import React, { Component } from 'react';
import Presentation from './widgets/Presentation';
import ContactShelf from './widgets/ContactShelf';
import Icon from './components/Icons';
import './app.scss';

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
			</div>		
		)
	}
}

export default App;