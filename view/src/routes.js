import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
	Root,
	Home,
	Test
} from './containers';

export default (store) => {

	return (
		<Route path="/" component={Root}>
			{ /* Home (main) route */ }
			<IndexRoute component={Home}/>
			<Route path="test" component={Test}>
			</Route>
		</Route>
	);
};