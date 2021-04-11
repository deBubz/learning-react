import React from "react";
import * as containerStyles from "./container.module.css";

const Container = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>;
};

export default Container;
