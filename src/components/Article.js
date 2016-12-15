import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className="col-md-4">
                <h4>{title}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <a className="btn btn-default" href="#">More Info</a>
            </div>
        );
    }
}

