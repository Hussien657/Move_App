import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p style={{ color: "red", fontSize: "12px" }}>{message}</p>
  );
};

export default ErrorMessage;
