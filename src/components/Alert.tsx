import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  onAlertButtonClick: () => void;
}

const Alert = (props: Props) => {
  const { children, onAlertButtonClick } = props;

  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onAlertButtonClick}
      ></button>
    </div>
  );
};

export default Alert;
