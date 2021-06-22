import React from 'react'
import { Switch, Route, RouteChildrenProps } from 'react-router-dom'
import routes from '../config/routes.conf';

export interface IApplicationProps { }

const Application: React.FunctionComponent<IApplicationProps> = props => {
    console.log(routes);

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    render={(routeProps: RouteChildrenProps<any>) => <route.component {...routeProps} />}
                />

            ))}
        </Switch>
    )
}
export default Application;