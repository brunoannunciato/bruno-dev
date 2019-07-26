import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Icon from '../../components/Icons';

import About from '../../pages/About';
import Jobs from '../../pages/Jobs';

import './style.scss';

export default class PageContent extends Component {
    render () {
        return (
            <section className={`page-content ${ this.props.active ? 'active' : ''}`}>
                <Route path='/about' component={About}/>
                <Route path='/jobs' component={Jobs}/>

                {
                    window.innerWidth <= 920 &&
                    <Icon 
                        icon='arrow-left2'
                        handleClick={this.props.back}
                        className='close-button'
                    />
                }
            </section>
        )
    }
}