import React from "react";
import { Card, CardBody } from "reactstrap";
import CenterPiece from "../CenterPiece";
/* 
    loading components using three dots js from codepen
*/

export interface ILoadingProps {
    dotType?: string;
}

/* inner loading component */
export const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
    const { children, dotType } = props;

    return (
        <div className="text-center">
            <div className="stage">
                <div className={dotType} />
            </div>
            {children}
        </div>
    );
};

Loading.defaultProps = {
    dotType: "dot-bricks",
};

// --------------------------------------------------------------------------------

export interface ILoadingComponentProps {
    card?: boolean;
    dotType?: string;
}

/* loading component container */

export const LoadingComponent: React.FunctionComponent<ILoadingComponentProps> = (props) => {
    const { children, card, dotType } = props;

    if (card)
        return (
            <CenterPiece>
                <Card>
                    <CardBody>
                        <Loading dotType={dotType}>{children}</Loading>
                    </CardBody>
                </Card>
            </CenterPiece>
        );

    return <Loading dotType={dotType}>{children}</Loading>;
};

LoadingComponent.defaultProps = {
    card: true,
    dotType: "dot-bricks",
};

export default LoadingComponent;
