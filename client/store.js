import {createStore, compse} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

//Import the root reducers
import rootReducer from './reducers/index';

//Import the data
import comments from './data/comments';
import posts from './data/posts';

const defaultState = {
  comments,
  posts
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);


//reducers hot reloading: accept thehot reload + rerequire the root reducer
if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
