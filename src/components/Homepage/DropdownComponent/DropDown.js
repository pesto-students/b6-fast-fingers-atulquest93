import React from "react";

const DropDown = ({ options, level, setLevel }) => {

  const listOfOptions = options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  return (
    <select
      id="levels"
      onChange={(e) => setLevel(e.target.value)}
      value={level}
    >
      {listOfOptions}
    </select>
  );
};

export default DropDown;
