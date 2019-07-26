import React, { Component } from 'react';
import './style.scss';

import Icon from '../../components/Icons';

export default class Menu extends Component {

    render () {
        return (
            <nav className={`menu ${this.props.menuActive ? 'active' : ''}`}>

                <ul>
                    {this.props.children}
                </ul>

                <Icon
                    icon="cross"
                    className="icon-close-menu"
                    handleClick={this.props.closeClick}
                >
                </Icon>
            </nav>
        )
    }
}