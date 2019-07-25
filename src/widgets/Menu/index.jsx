import React, { Component } from 'react';
import './style.scss';

import Icon from '../../components/Icons';

export default class Menu extends Component {
    render() {
        return (
            <div className={`menu ${this.props.menuActive ? 'active' : ''}`}>
                { this.props.children }

                <Icon
                    icon="cross"
                    className="icon-close-menu"
                    handleClick={this.props.closeClick}
                >
                </Icon>
            </div>
        )
    }
}