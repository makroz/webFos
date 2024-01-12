import React from "react";
import ControlLabel from "./ControlLabel";

export default function Input(props: any) {
  const handleChangeInput = (e: any) => {
    let value = e.target.value;
    if (e.target.name === "name") {
      value = value.replace(/(\s|^)\w/g, (c: any) => c.toUpperCase());

      e.target.value = value;
    }

    if (e.target.name === "email") {
      value = (value + "").toLowerCase();
      e.target.value = value;
    }
    props.onChange(e);
  };
  return (
    <label className="w-full">
      <input
        type={props.type || "text"}
        min={props.min}
        max={props.max}
        name={props.name}
        id={props.name}
        placeholder={""}
        className={props.className || "w-full"}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
        onChange={handleChangeInput}
        onBlur={props.onBlur}
        onKeyUp={props.onKeyUp}
        value={props.value || ""}
        autoComplete={props.autoComplete || "off"}
        tabIndex={props.tabIndex}
      ></input>
      <span>{props.placeholder}</span>
    </label>
  );
}
