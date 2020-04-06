import React from 'react';
import Routes from './routes';
import { Router } from 'react-router-dom';
import history from './services/history';
import './config/ReactotronConfig';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';
import store from './store';
function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
            </Router>
        </Provider>
    );
}

export default App;
