import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { persistor, store } from './app/Store';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from "react-router-dom";
import ApplicationRoutes from './app/Routes';
import AppRoute from './app/AppRoute';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { withRouter } from "react-router-dom";

// Own toast
// import { ToastContainer} from 'react-toastify';
import { MainLayout } from './app/modules/components/Layout/MainLayout'

import './assets/stylesheets/main.scss';
import './fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Spinner from './app/shared/components/loader/SpinnerContainer'

import '../src/app/config/AxiosConfig';
import { createGlobalStyle } from 'styled-components';



const { Routes } = ApplicationRoutes;

const BodyComponent = ({location: { pathname }}) => {
    const [extraPropsHeader, setExtraPropsHeader] = useState({counter: null});

    return (
        <Switch>
            <MainLayout>
            {Routes.map((route, key) =>
                <AppRoute {...route} extraPropsHeader={setExtraPropsHeader} key={key} routes={Routes}
                />
            )}
            </MainLayout>
        </Switch>
    )
}

const Body = withRouter(BodyComponent);

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: SantanderText-Regular;
        font-size: 16px;
    }

    body {
        height: 100%;
        margin: 0;
        padding: 0;
        transition: all 0.25s linear;
    }

    textarea:focus, input:focus{
        outline: none;
    }
`;

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <GlobalStyle />
                <Spinner />
                <App>
                    <Body key="body"/>
                </App>
            </BrowserRouter>
        </PersistGate>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();