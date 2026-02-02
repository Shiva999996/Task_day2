import { useContext } from "react";
import { FormFieldContext } from "./FormField";

function FormFieldInput(props) {
  const { value, setValue, setError } =
    useContext(FormFieldContext);

  function handleChange(e) {
    const nextValue = e.target.value;

    setValue(nextValue);

    if (!nextValue.trim()) {
      setError("This field is required");
    } else {
      setError("");
    }
  }

  return (
    <input
      {...props}
      value={value}
      onChange={handleChange}
      style={{
        padding: 6,
        width: "100%",
        boxSizing: "border-box",
      }}
    />
  );
}

export default FormFieldInput;
