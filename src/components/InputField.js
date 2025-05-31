import React from "react";

const InputField = ({ label, type, value, onChange, name }) => {
  return (
    <div>
      <label>{label}</label><br />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
