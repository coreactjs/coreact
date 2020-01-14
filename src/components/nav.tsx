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
						<span>Getting Started</span>
					</NavLink>
					<NavLink className="item" to={Routes.reference} onClick={this.hideMenu} exact={true}>
						<span>API</span>
					</NavLink>
					<a className="item" href={Routes.github}>
						<span>Github</span>
						<img src={githubIcon}/>
					</a>
				</div>
			</nav>
		);
	}
}
