import React from 'react';
import {render} from 'react-dom';

//Import CSS
import css from './styles/style.styl';

//Import components
import App from './components/App.js';
import Single from './components/Single.js';
import PhotoGrid from './components/PhotoGrid.js';

//Import router
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store, {history} from './store.js';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
