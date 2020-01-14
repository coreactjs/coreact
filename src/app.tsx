import {Routes} from '_services/routes';
import {Consumer} from 'coreact';
import React, {PureComponent} from 'react';
import {Route, Switch} from 'react-router';
import {HomeScreen} from './home/home-screen';

@Consumer
export class App extends PureComponent {
	public render() {
		return (
			<Switch>
				<Route path={Routes.home} component={HomeScreen}/>
			</Switch>
		);
	}
}
