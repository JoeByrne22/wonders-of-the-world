import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route,  Switch } from 'react-router-dom';
import WonderIndex from './components/wonders/Index';
import WonderShow from './components/wonders/Show';
import WonderNew from './components/wonders/New';
import Header from './components/Header';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <section>
          <Header />
          <Switch>
            <Route exact path='/' component={WonderIndex} />
            <Route exact path='/wonders/new' component={WonderNew} />
            <Route path='/wonders/:id' component={WonderShow} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
