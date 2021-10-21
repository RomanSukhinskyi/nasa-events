import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App';
import EventComponent from './components/eventComponent'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Provider store={store}>
    <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/event/:id">
            <EventComponent />
            </Route>
        </Switch>
    
    </Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
