"use client";

import Select from "react-select";
import "./SelectBox.css";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "#00b795" : provided.borderColor,
    boxShadow: state.isFocused ? "0" : provided.boxShadow,
    "&:hover": {
      borderColor: state.isFocused ? "#00b795" : provided.borderColor,
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused
      ? "#00b795"
      : state.isSelected
      ? "#00b795"
      : "#ffffff",
    color: state.isFocused || state.isSelected ? "#ffffff" : "#64748b",
    ":active": {
      backgroundColor: "#00b795",
      color: "#ffffff",
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: "all 0.3s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: "none",
  }),
};

const SelectBox = ({ options }) => {
  return (
    <>
      <Select options={options} styles={customStyles} />
    </>
  );
};

export default SelectBox;
