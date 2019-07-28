import React, { Component } from 'react';

import thumbBrastemp from './imgs/brastemp-chatbot.png';
import thumbConsul from './imgs/consul-bf.png';
import thumbCompraCerta from './imgs/compra-certa-bf.png';
import thumbBblend from './imgs/bblend.png';
import thumbUber from './imgs/uber.png';
import thumbPortalPos from './imgs/portal-pos.png';
import thumbItau from './imgs/itau.png';
import thumbPdv from './imgs/pdv.png';
import thumbHondaAccord from './imgs/honda-accord.png';
import thumbMotorola from './imgs/motorola.png';
import thumbUnopar from './imgs/unopar.png';
import thumbContteudo from './imgs/contteudo.png';
import thumbConsulFacilita from './imgs/consul-facilita.png';
import thumbConnection from './imgs/connection.png';
import thumbBrunoShow from './imgs/bruno-show.png';
import thumbBrunoDev from './imgs/bruno-dev.png';
import thumbLavadungeon from './imgs/lavadungeon.png';
import thumbJoanelson from './imgs/joanelson.png';
import thumbIllumind from './imgs/illumind.png';
import thumbDiscovery from './imgs/discovery.png';

import JobsShelf from '../../widgets/JobsShelf';
import JobThumbnail from '../../components/JobThumbnail';

const jobsList = {
	jussi: [
		{
			img: thumbBrastemp,
			name: 'Brastemp Chatbot',
			stack: 'React.js, SCSS',
			plataform: 'Vtex IO'
		}, {
			img: thumbConsul,
			name: 'Consul Black Friday Landing',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex'
		}, {
			img: thumbCompraCerta,
			name: 'Compra Certa Black Friday Landing',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex'
		}, {
			img: thumbBblend,
			name: 'Bblend store',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex'
		}, {
			img: thumbUber,
			name: 'Uber for business Help Center',
			stack:'HTML, SCSS, JS, PHP',
			plataform: 'Wordpress'
		}, {
			img: thumbPortalPos,
			name: 'Blog Portal Pós',
			stack:'HTML, SCSS, JS, PHP',
			plataform: 'Wordpress'
		}, {
			img: thumbItau,
			name: 'Itaú Apple Pay Landing',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vignette'
		}, {
			img: thumbPdv,
			name: 'Ambev Pedida de hoje',
			stack: 'HTML, SCSS, JS',
			plataform: null
		}, {
			img: thumbHondaAccord,
			name: 'Honda Accord Release Page',
			stack: 'HTML, SASS, JS, PHP',
			plataform: null
		}, {
			img: thumbMotorola,
			name: 'Motorola Latam stores',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex'
		}
	],
	freelance: [
		{
			img: thumbUnopar,
			name: 'Unopar site',
			stack: 'Pug, Stylus, JS',
			plataform: null
		}, {
			img: thumbConsulFacilita,
			name: 'Consul Simples assim infographics',
			stack: 'HTML, SCSS',
			plataform: 'Wordpress'
		}, {
			img: thumbContteudo,
			name: 'Contteudo default layout',
			stack: 'HTML, SCSS, JS',
			plataform: null
		}, {
			img: thumbConnection,
			name: 'Connection-ai',
			stack:'HTML, SCSS, JS, PHP',
			plataform: 'Wordpress'
		}
	],
	individual: [
		{
			img: thumbBrunoShow,
			name: 'bruno.show',
			stack: 'HTML, CSS, JS',
			plataform: null
		}, {
			img: thumbBrunoDev,
			name: 'bruno.dev',
			stack: 'React.js, SCSS',
			plataform: null
		}, {
			img: thumbJoanelson,
			name: 'Joanelson Game',
			stack: 'HTML, CSS, JS',
			plataform: null
		}, {
			img: thumbLavadungeon,
			name: 'Lava Dungeon Game',
			stack: 'HTML, CSS',
			plataform: null
		}, {
			img: thumbIllumind,
			name: 'Illumind',
			stack: 'HTML, SCSS, JS, PHP, Arduino',
			plataform: 'Arduino'
		}, {
			img: thumbDiscovery,
			name: 'Discovery',
			stack:'HTML, SCSS, JS, PHP',
			plataform: null
		}
	]
}

export default class Jobs extends Component {
	createThumbnail = (entity) => {
		return jobsList[entity].map( item => {
			return (
				<JobThumbnail
					key={item.name}
					image={item.img}
					name={item.name}
					languages={!item.plataform ? `${item.stack}` : `${item.stack} , ${item.plataform}`}
					// plataform={item.plataform}
				/>
			)
		});
	}

	render () {
		return (
			<div className="jobs">
				<JobsShelf
					title='Jüssi'
				>
					{this.createThumbnail('jussi')}
				</JobsShelf>

				<JobsShelf
					title='Freelance'
				>
					{this.createThumbnail('freelance')}
				</JobsShelf>

				<JobsShelf
					title='Personal'
				>
					{this.createThumbnail('individual')}
				</JobsShelf>

				<p className="disclaimer">
					*Some of the projects were developed as a team
				</p>
			</div>
		)
	}
}