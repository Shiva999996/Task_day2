import Toggle from "./Toggle";

function PasswordField() {
  return (
    <Toggle>
      {({ on, toggle }) => (
        <div>
          <h1>Password</h1>
          <input type={on ? "text" : "password"} />
          <button type="button" onClick={toggle}>
            {on ? "Hide" : "Show"}
          </button>
        </div>
      )}
    </Toggle>
  );
}

export default PasswordField;
