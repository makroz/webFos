import ControlLabel from "./ControlLabel";

const TextArea = (props: any) => {
  return (
    <label className="w-full">
      <textarea
        name={props.name}
        id={props.name}
        placeholder={""}
        className={props.className || "w-full"}
        required={props.required}
        disabled={props.disabled}
        readOnly={props.readOnly}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value || ""}
        rows={4}
      />
      <span>{props.placeholder}</span>
    </label>
  );
};

export default TextArea;
