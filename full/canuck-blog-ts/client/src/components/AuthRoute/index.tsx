import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import logger from "../../config/logger";
import UserContext, { UserContextProvider } from "../../contexts/user";

/* 
    Authentication Routes
*/

export interface IAuthRoutesProps {}

const AuthRoute: React.FunctionComponent<IAuthRoutesProps> = (props) => {
    const { children } = props;
    const { user } = useContext(UserContext).userState;

    if (user._id === "") {
        logger.info("Unauthorized, redirecting...");
        return <Redirect to="/login" />;
    }

    return <>{children}</>;
};

export default AuthRoute;
