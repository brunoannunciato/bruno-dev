import React, { Component } from 'react';
import './style.scss';

export default class PageContent extends Component {
    render () {
        return (
            <section className={`page-content ${ this.props.active ? 'active' : ''}`}>
                KATIAU
            </section>
        )
    }
}