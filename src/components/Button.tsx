import React, { Children } from "react";

interface Props {
  children: string;
  onButtonClick: () => void;
  type?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const Button = (props: Props) => {
  const { children, type = "primary", onButtonClick } = props;
  return (
    <button className={"btn btn-" + type} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
