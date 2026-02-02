import { useContext } from "react";
import { FormFieldContext } from "./FormField";

function FormFieldError() {
  const { error } = useContext(FormFieldContext);

  if (!error) return null;

  return (
    <div style={{ color: "red", marginTop: 4 }}>
      {error}
    </div>
  );
}

export default FormFieldError;
