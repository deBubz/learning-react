import React from "react";
import { Tag } from "reactstrap";

export interface IErrorTextProps {
    error: string;
}

const ErrorText: React.FunctionComponent<IErrorTextProps> = (props) => {
    const { error } = props;

    if (!error) return null;
    return <small className="text-danger">{error}</small>;
};

export default ErrorText;
