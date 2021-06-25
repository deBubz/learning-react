import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/user";
import IPageProps from "../interfaces/IPageProps";
import firebase from "firebase";
import { Authenticate, SignInWithSocialMedia as SocialMediaPopup } from "../modules/auth";
import logger from "../config/logger";

import CenterPiece from "../components/CenterPiece";
import ErrorText from "../components/ErrorText";
import LoadingComponent from "../components/LoadingComponent";
import SuccessText from "../components/SuccessText";
import { Card, CardBody, CardHeader, Button } from "reactstrap";
import { Providers } from "../config/firebase";

/* 
    only social media login
*/

const LoginPage: React.FunctionComponent<IPageProps> = (props) => {
    const [authenticating, setAuthenticating] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const userContext = useContext(UserContext);
    const history = useHistory();
    const isLogin = window.location.pathname.includes("login");

    const SignInWithSocialMedia = (provider: firebase.auth.AuthProvider) => {
        if (error !== "") setError("");

        setAuthenticating(true);

        SocialMediaPopup(provider)
            .then(async (result) => {
                logger.info(result.toString());

                let user = result.user;
                if (user) {
                    let { uid, displayName: name } = user;

                    if (name) {
                        try {
                            let fire_token = await user.getIdToken();
                            Authenticate(uid, name, fire_token, (err, _user) => {
                                if (err) {
                                    setError(err);
                                    setAuthenticating(false);
                                } else if (user) {
                                    userContext.userDispatch({ type: "login", payload: { user: _user, fire_token } });
                                    history.push("/");
                                }
                            });

                            /* if we gen token, authenticate with backend */
                        } catch (error: any) {
                            setError("invalid token");
                            logger.error(error.msg);
                            setAuthenticating(false);
                        }
                    } else {
                        /* if no name is returned, use custom form here to get username
                    depending on provider. google does this */
                        setError("ID provider doesnt have a name");
                        setAuthenticating(false);
                    }
                } else {
                    setError("ID Provider is missing information, please try another account or provider");
                    setAuthenticating(false);
                }
            })
            .catch((error) => {
                setError(error.message);
                setAuthenticating(false);
            });
    };

    return (
        <CenterPiece>
            <Card>
                <CardHeader>{isLogin ? "Login" : "Signup"}</CardHeader>
                <CardBody>
                    <ErrorText error={error} />
                    <Button
                        block
                        disabled={authenticating}
                        onClick={() => SignInWithSocialMedia(Providers.google)}
                        style={{
                            backgroundColor: "#ea4335",
                            borderColor: "#ea4335",
                        }}
                    >
                        <i className="fab fa-google mr-2" />
                        Sign {isLogin ? "in" : "up"}
                    </Button>

                    {authenticating && <LoadingComponent card={false} />}
                </CardBody>
            </Card>
        </CenterPiece>
    );
};

export default LoginPage;
