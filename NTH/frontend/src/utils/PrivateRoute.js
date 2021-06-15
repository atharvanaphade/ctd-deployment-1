// React

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Local Imports

import { isLogin } from './index';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="question/put_your_answer_here" />
        )} />
    );
}

export default PrivateRoute;

// 