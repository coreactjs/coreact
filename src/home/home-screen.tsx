import './home-screen.sass';
import React, {PureComponent} from 'react';
import {Nav} from '../components/nav';
import {Card} from './card';

const transparentIcon = require('./transparency.svg');
const databaseIcon = require('./database.svg');
const analysisIcon = require('./analysis.svg');
const reactIcon = require('./react.svg');

export class HomeScreen extends PureComponent {
	public render() {
		return (
			<>
				<Nav/>
				<header className="home-screen--jumbotron">
					<div className="container">
						<h1>COREACT</h1>
						<p>Build maintainable Frontend applications</p>
						<button>Getting Started</button>
					</div>
				</header>
				<section className="home-screen--info">
					<div className="container">
						<Card
							icon={reactIcon}
							title="Empowering React"
							description="React classes can simply watch service behaviours with simple interface, you don't have to be worried about view-service synchronization, coreact will do it automatically."
						/>
						<Card
							icon={databaseIcon}
							title="Services"
							description="Services are layers for your application (like networking, authentication, some submit flow process, etc). they are logic to your application and store and persist data for you."
						/>
						<Card
							icon={analysisIcon}
							title="Server Side Rendering"
							description="Develop application for search engines, Coreact natively support SSR, you will write single codebase for both server side and client side application."
						/>
						<Card
							icon={transparentIcon}
							title="Data Transparency"
							description="Your views are bounded with data, data is defined in services, tracking data and debugging is easy through functions, no more reducers and actions."
						/>
					</div>
				</section>
				<footer className="home-screen--footer">

				</footer>
			</>
		);
	}
}
