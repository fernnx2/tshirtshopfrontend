import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
