import React, { useEffect, useReducer, useState } from "react";
import { Switch, Route, RouteChildrenProps } from "react-router-dom";
import AuthRoute from "../components/AuthRoute";
import LoadingComponent from "../components/LoadingComponent";
import logger from "../config/logger";

import routes from "../config/routes.conf";
import { initialUserState, UserContextProvider, useReducer as contextReducer } from "../contexts/user";
import { Validate } from "../modules/auth";

/* 
    Main entry point of the app
    currently handling:
        - routing
        - authentication status using context
*/

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const [userState, userDispatch] = useReducer(contextReducer, initialUserState);
    const [loading, setLoading] = useState<boolean>(true);

    /* use for debugging */
    const [authStage, setAuthStage] = useState<string>("Checking local storage...");

    useEffect(() => {
        setTimeout(() => {
            CheckLocalStorageForCredentials();
        }, 1000);
    }, []);

    /**
     * check if there is token
     * - yes - verify with backend
     * - no  - logout
     */
    const CheckLocalStorageForCredentials = () => {
        setAuthStage("Checking Credentials...");

        const fire_token = localStorage.getItem("fire_token");

        /* no token found */
        if (fire_token === null) {
            userDispatch({ type: "logout", payload: initialUserState });
            setAuthStage("No credentials found1");
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        } /* token ok, validate */ else {
            return Validate(fire_token, (err, user) => {
                if (err) {
                    logger.error(err);
                    userDispatch({ type: "logout", payload: initialUserState });
                } else if (user) {
                    userDispatch({ type: "login", payload: { user, fire_token } });
                    setTimeout(() => setLoading(false), 1000);
                }
            });
        }
    };

    const userContextValues = {
        userState,
        userDispatch,
    };

    if (loading) {
        return <LoadingComponent>{authStage}</LoadingComponent>;
    }

    return (
        <UserContextProvider value={userContextValues}>
            <Switch>
                {routes.map((route, index) =>
                    route.auth ? (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(routeProps: RouteChildrenProps<any>) => (
                                <AuthRoute>
                                    <route.component {...routeProps} />{" "}
                                </AuthRoute>
                            )}
                        />
                    ) : (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(routeProps: RouteChildrenProps<any>) => <route.component {...routeProps} />}
                        />
                    )
                )}
            </Switch>
        </UserContextProvider>
    );
};
export default Application;
