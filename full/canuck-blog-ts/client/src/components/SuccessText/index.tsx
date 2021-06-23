import React from "react";
import { Tag } from "reactstrap";

export interface ISuccessTextProps {
    success: string;
}

const SuccessText: React.FunctionComponent<ISuccessTextProps> = (props) => {
    const { success } = props;

    if (!success) return null;
    return <small className="text-danger">{success}</small>;
};

export default SuccessText;
