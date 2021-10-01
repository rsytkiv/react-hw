import React from 'react'
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
    let isAuthenticated = localStorage.getItem('authenticated');
    return (
        <Route
        {...rest}
        render={(props) => isAuthenticated
          ? <Component {...props} />
          : <Redirect to={`/login`}/>}
      />
    )
};
export default PrivateRoute
