import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import photos from './reducers/photos';
import photo from './reducers/photo';
import page from './reducers/page';

import promiseUsers from './middlewares/promisePhotos';
import changePage from './middlewares/changePage';

const enchancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const reducer = combineReducers({
  photos,
  photo,
  page,
  routing: routerReducer,
});

const createStoreWithMiddleware = applyMiddleware(promiseUsers, changePage, logger())(createStore);

const store = createStoreWithMiddleware(reducer, {
  photos: [],
  page: null,
  photo: [],
}, enchancers);


export const history = syncHistoryWithStore(browserHistory, store);

export default store;
