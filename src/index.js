import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configure';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//initialize store like we have typically done in the past
//instead of doing so in index we now do it in store=>configure.js
const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
