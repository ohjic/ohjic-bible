import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as form} from 'redux-form';
import {reducer as reduxAsyncConnect} from 'redux-connect';

import test from './test';

export default combineReducers({
	routing: routerReducer,
	reduxAsyncConnect,
	form,
	test,
});