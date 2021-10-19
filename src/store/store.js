import {createStore, combineReducers, applyMiddleware} from 'redux';
import naturalEventsReducer from './naturalEventsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    naturalEvents: naturalEventsReducer
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));