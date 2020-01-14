import {Routes} from '_services/routes';
import './nav.sass';

import React, {PureComponent} from 'react';
import {Link, NavLink} from 'react-router-dom';
const logo = require('./logo.png');
const githubIcon = require('./github.svg');
export class Nav extends PureComponent {
	public state = {
		active: false,
	};

	private toggleMenu = () => this.setState({active: !this.state.active});
	private hideMenu = () => this.setState({active: false});

	public render() {
		const {active} = this.state;
		return (
			<nav className={`main-nav-container ${active ? 'active' : ''}`}>
				<Link to={Routes.home} className="brand">
					<img src={logo}/>
					<strong>COREACT</strong>
				</Link>
				<div className="menu">
					<i className="icon trigger" onClick={this.toggleMenu}>menu</i>
					<NavLink className="item" to={Routes.gettingStarted} onClick={this.hideMenu} exact={true}>
						<div>Getting Started</div>
					</NavLink>
					<NavLink className="item" to={Routes.reference} onClick={this.hideMenu} exact={true}>
						<div>API</div>
					</NavLink>
					<div className="github-link">
						<a className="github-button" href="https://github.com/xeuus/coreact" data-color-scheme="no-preference: light; light: dark; dark: dark;" data-show-count="true" aria-label="Star xeuus/coreact on GitHub">GITHUB</a>
					</div>
				</div>
			</nav>
		);
	}
}
