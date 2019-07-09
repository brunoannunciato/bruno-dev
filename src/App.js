import React, { Component } from 'react';
import Presentation from './widgets/Presentation';
import ContactShelf from './widgets/ContactShelf';
import './app.scss';

class App extends Component {
	render = () => {
		return(
			<section className="content">
				<Presentation
					name="Bruno Annunciato"
				/>

				<ContactShelf />
			</section>
		)
	}
}

export default App;