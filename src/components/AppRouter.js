import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import {privateRoutes} from '../Routes';
import {publicRoutes} from '../Routes';
import { GENERAL_ROUTE } from '../utils/consts';
import { LOGIN_ROUTE } from '../utils/consts';

function AppRouter() {
    const user = false;
    return user ?
    (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true} />
            )}
            <Redirect to={GENERAL_ROUTE} />
        </Switch>
    )
    :
    (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true} />
            )}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default AppRouter
