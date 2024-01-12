const ControlLabel = (props: any) => {
  const clase = props.classDiv || "";

  return (
    <div className={`input ${clase} relative`}>
      {props.type === "hidden" ? null : (
        <>
          {props.label && (
            <label
              htmlFor={props.name}
              className={`input-label ${props.required ? "required" : null}`}
            >
              {props.label}{" "}
              {props.required ? (
                "*"
              ) : props.required === false || props.disabled ? (
                ""
              ) : (
                <span className="text-tBlack dark:text-tWhite text-[9px]">
                  (opcional)
                </span>
              )}
            </label>
          )}
        </>
      )}
      {props.children}
      {props.type === "hidden" || !props.error ? null : (
        <p
          className={`px-2 mt-0 mb-1 text-xs ${
            props.error[props.name]
              ? "text-red-600"
              : props.message
              ? "text-primary"
              : ""
          }`}
        >
          {props.error[props.name] || props.message || null} &nbsp;
        </p>
      )}
    </div>
  );
};

export default ControlLabel;
