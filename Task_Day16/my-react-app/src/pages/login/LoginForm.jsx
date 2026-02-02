import FormField from "../../components/FormField";
import FormFieldInput from "../../components/FormField/FormFieldInput";

function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("login button is clicked");
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <FormField.Label>Email</FormField.Label>
        <FormField.Input type="email" />
        <FormField.Error />
      </FormField>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
