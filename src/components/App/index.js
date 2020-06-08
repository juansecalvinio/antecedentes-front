import React, { Component } from 'react';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { GlobalStyle } from './styled';

import Layout from '../Layout';

import LoginPage from './../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import SearchPage from '../../pages/SearchPage';
import InsertPage from './../../pages/InsertPage';
import RegisterPage from './../../pages/RegisterPage';

import store from './../../store';

/**
 * Componente App
 * Contiene toda la aplicación
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <Layout />
          <div className="container" style={{ flex:1 }}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/insert" component={InsertPage} />
              <Route path="/register" component={RegisterPage} />
            </Switch>
          </div>        
        </Router>
      </Provider>
    );
  }
}

export default App;
