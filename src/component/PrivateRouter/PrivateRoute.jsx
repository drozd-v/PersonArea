import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({Component, ...rest}) => {
    return <Route path={rest.path} render={props => {return (rest.path === '/auth' ? !rest.isAuth: rest.isAuth) ? (<Component {...props}/>) : (<Redirect to={rest.redirect} />)}} />
}

export default PrivateRoute