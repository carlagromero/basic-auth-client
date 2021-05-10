import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
import reducers from './reducers';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers, {})}>
      <Router>
        <App>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" component={Signup} />
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
