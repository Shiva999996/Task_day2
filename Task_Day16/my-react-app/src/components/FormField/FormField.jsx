import { createContext, useState, useEffect } from "react";

export const FormFieldContext = createContext(null);

const FormField = ({ children }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("FormField value:", value);
    console.log("FormField error:", error);
  }, [value, error]);

  return (
    <FormFieldContext.Provider value={{ value, setValue, error, setError }}>
      <div style={{ marginBottom: 16 }}>{children}</div>
    </FormFieldContext.Provider>
  );
};

export default FormField;
