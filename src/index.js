import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './store/configureStore';
import appRoutes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

const Root = (
    <Provider store={store}>
        <Router history={history} routes={appRoutes(store)} />
    </Provider>
);

injectTapEventPlugin();

ReactDom.render(Root, document.getElementById('app'));