import React from 'react';
import { Route } from 'react-router-dom';

// Maybe for auth
import { LocalStorageHelper } from './shared/helpers/LocalStorageHelper';
let localStorageHelper = new LocalStorageHelper();


const AppRoute = (routeProps) => {
    const { component: Component, path, exact, extraPropsHeader, routes } = routeProps;
    let page = (
        <Route {...{exact, path}} 
        render={ props => <Component {...props} extraPropsHeader={(event) => extraPropsHeader(event)} /> }
        />);

    // Here goes the authentication

    return page;
}


export default AppRoute;