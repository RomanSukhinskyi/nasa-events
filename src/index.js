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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
