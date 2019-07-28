import React, { Component } from 'react';
import './app.scss';

import Header from './widgets/Header';
import Presentation from './widgets/Presentation';
import ContactShelf from './widgets/ContactShelf';
import PageContent from './widgets/PageContent';

class App extends Component {
	state = {
		activeMenu: false,
		activePage: false
	}

	componentWillMount = () => {
		window.location.pathname !== '/' &&
		this.setState({
			activeMenu: true,
			activePage: true
		})
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

				<Header
					showLogo={ this.state.activePage }
					activeMenu={ this.state.activeMenu }
					activePage={ (activePage = true) => { this.setState({ activePage })} }
					toggleMenu={ () => this.setState({ activeMenu: !this.state.activeMenu }) }
				/>

				<PageContent
					active={this.state.activePage}
					back={() => {this.setState({ activePage: false })}}
				/>
			</div>
		)
	}
}

export default App;