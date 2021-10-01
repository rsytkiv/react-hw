import React from 'react'
import { Redirect, Route } from "react-router-dom";

const GuestRoute = ({component: Component, ...rest}) => {
    const isGuest = !localStorage.getItem('authenticated');

    return (
        <Route
        {...rest}
        render={(props) => isGuest
          ? <Component {...props} />
          : <Redirect to={`/general`}/>}
      />
    )
}

export default GuestRoute
