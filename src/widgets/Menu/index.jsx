import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import Icon from '../../components/Icons';

export default class Menu extends Component {

    render () {
        return (
            <nav className={`menu ${this.props.menuActive ? 'active' : ''}`}>

                <ul>
                    {this.props.children}
                </ul>

                <Link to='/'>
                    <Icon
                        icon="cross"
                        className="icon-close-menu"
                        handleClick={this.props.closeClick}
                    />
                </Link>
            </nav>
        )
    }
}