import React, { Component } from 'react';
import './style.scss';

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
import ImageZoom from '../../components/ImageZoom';

const jobsList = {
	jussi: [
		{
			img: thumbBrastemp,
			name: 'Brastemp Chatbot',
			stack: 'React.js, SCSS',
			plataform: 'Vtex IO',
			link: '//www.brastemp.com.br/atendimento/assistente-virtual'
		}, {
			img: thumbConsul,
			name: 'Consul Black Friday Landing',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex',
			link: '//loja.consul.com.br/landing/blackfriday'
		}, {
			img: thumbCompraCerta,
			name: 'Compra Certa Black Friday Landing',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex',
			link: '//loja.compracerta.com.br/landing/blackfriday'
		}, {
			img: thumbBblend,
			name: 'Bblend store',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex',
			link: '//loja.bblend.com.br'
		}, {
			img: thumbUber,
			name: 'Uber for business Help Center',
			stack:'HTML, SCSS, JS, PHP',
			plataform: 'Wordpress',
			link: '//uberforbusinesshelp.com'
		}, {
			img: thumbPortalPos,
			name: 'Blog Portal Pós',
			stack:'HTML, SCSS, JS, PHP',
			plataform: 'Wordpress',
			link: '//blog.portalpos.com.br'
		}, {
			img: thumbItau,
			name: 'Itaú Apple Pay Landing',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vignette',
			link: '//www.itau.com.br/cartoes/carteira-digital/apple-pay/'
		}, {
			img: thumbPdv,
			name: 'Ambev Pedida de hoje',
			stack: 'HTML, SCSS, JS',
			plataform: null
		}, {
			img: thumbHondaAccord,
			name: 'Honda Accord Release Page',
			stack: 'HTML, SASS, JS, PHP',
			plataform: null,
			link: '//www.honda.com.br/automoveis/accord'
		}, {
			img: thumbMotorola,
			name: 'Motorola Latam stores',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex',
			link: '//motorola.com.br'
		}
	],
	freelance: [
		{
			img: thumbUnopar,
			name: 'Unopar site',
			stack: 'Pug, Stylus, JS',
			plataform: null,
			link: 'http://unopar.br'
		}, {
			img: thumbConsulFacilita,
			name: 'Consul Simples assim infographics',
			stack: 'HTML, SCSS',
			plataform: 'Wordpress',
			link: '//www.consul.com.br/facilita-consul/simples-assim/como-limpar-ar-condicionado-split/'
		}, {
			img: thumbContteudo,
			name: 'Contteudo default layout',
			stack: 'HTML, SCSS, JS',
			plataform: null
		}, {
			img: thumbConnection,
			name: 'Connection-ai',
			stack:'HTML, SCSS, JS, PHP',
			plataform: 'Wordpress',
			link: '//connection-ai.com'
		}
	],
	individual: [
		{
			img: thumbBrunoShow,
			name: 'bruno.show',
			stack: 'HTML, CSS, JS',
			plataform: null,
			link: '//bruno.show'
		}, {
			img: thumbBrunoDev,
			name: 'bruno.dev',
			stack: 'React.js, SCSS',
			plataform: null,
			link: '//bruno.dev'
		}, {
			img: thumbJoanelson,
			name: 'Joanelson Game',
			stack: 'HTML, CSS, JS',
			plataform: null,
			link: '//joanelson.bruno.show'
		}, {
			img: thumbLavadungeon,
			name: 'Lava Dungeon Game',
			stack: 'HTML, CSS',
			plataform: null,
			link: '//lavadungeon.bruno.show'
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
	state = {
		zoomImage: ''
	}

	createThumbnail = (entity) => {
		return jobsList[entity].map( item => {
			return (
				<JobThumbnail
					key={item.name}
					image={item.img}
					name={item.name}
					languages={!item.plataform ? `${item.stack}` : `${item.stack} , ${item.plataform}`}
					handleClick={() => {!item.link && this.setState({zoomImage: item.img})}}
					link={`${item.link}?utm_campaign=brunodev`}
				/>
			)
		});
	}

	render () {
		return (
			<>
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
				{
					this.state.zoomImage !== '' && window.innerWidth > 920 &&
					<ImageZoom
						image={this.state.zoomImage}
						close={() => {this.setState({zoomImage: ''})}}
					/>
				}
			</>
		)
	}
}