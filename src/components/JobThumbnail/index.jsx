import React, { Component } from 'react';

import './style.scss';

export default class JobThumbnail extends Component  {
    render () {
        return (
            <div className="thumbnail">
                <figure>
                    <img src={this.props.image} alt=""/>
                </figure>
                <p className='thumbnail__title'><strong>Project: </strong>{this.props.name}</p>
                <div className="thumbnail__technologies">
                    <p className="languages"><strong>technologies: </strong>{this.props.languages}</p>
                </div>
            </div>
        )
    }
}