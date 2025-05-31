import React from "react";

const ShowPasswordToggle = ({ checked, onChange }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      /> Show password
    </div>
  );
};

export default ShowPasswordToggle;
