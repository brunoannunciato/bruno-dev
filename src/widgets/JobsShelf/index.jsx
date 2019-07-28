import React, {Component} from 'react';

import './style.scss';

export default class JobsShelf extends Component {
    render () {
        return (
            <div className="shelf">
                <h2 className="shelf__title">
                    {this.props.title}
                </h2>

                {this.props.children}
            </div>
        )
    }
}