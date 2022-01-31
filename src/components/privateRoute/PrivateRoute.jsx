import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [isUserLoggedIn] = useContext(UserContext);

    console.log(isUserLoggedIn?.isAuthorized)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isUserLoggedIn?.isAuthorized ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;