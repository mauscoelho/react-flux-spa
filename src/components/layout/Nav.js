import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        }
    }
    toggleCollapse(){        
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const featuredClass = location.pathname === '/' ? 'active' : '';
        const archivesClass = location.pathname.match(/ˆ\/archives/) ? 'active' : '';
        const settingsClass = location.pathname.match(/ˆ\/settings/) ? 'active' : '';
        const navClass = collapsed ? 'collapse' : '';        
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                            <span className="sr-only">Toogle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className={'navbar-collapse ' + navClass} id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className={featuredClass}>
                                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Featured</IndexLink>
                            </li>
                            <li className={archivesClass}>
                                <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
                            </li>
                            <li className={settingsClass}>
                                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

