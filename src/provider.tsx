import {AppProvider, RequestContext} from 'coreact';
import {RegisterDebugger} from 'coreact/dist/debugger';
import React from 'react';
import {App} from './app';

module.exports = class Provider extends AppProvider {
	constructor(context: RequestContext) {
		super(context);
		if (context.mode === 'development') {
			// RegisterDebugger(context);
		}
	}

	public async providerWillLoad(context: RequestContext) {
		this.application = <App/>;
		this.beginOfHead = (
			<>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no, user-scalable=no"/>
				<title>COREACT - Build maintainable frontend applications</title>
			</>
		);
	}
};
