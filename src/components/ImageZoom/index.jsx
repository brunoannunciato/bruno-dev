import React, { Component } from 'react';

import Icons from '../../components/Icons';

import './style.scss';

export default class ImageZoom extends Component {
    render () {
        return (
            <div className="image-zoom">
                <Icons
                    icon='cross'
                    handleClick={this.props.close}
                    className='close-image'
                />
                <img src={this.props.image} alt=''/>
            </div>
        )
    }
}