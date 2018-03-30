import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { store, history } from './store';
import { Jukebox } from './app/jukebox';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Jukebox}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
