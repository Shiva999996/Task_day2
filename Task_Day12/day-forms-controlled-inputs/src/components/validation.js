
export const validateField = (name, value) => {
  switch (name) {
    case "name":
      if (!value.trim()) {
        return "Name is required";
      }
      break;

    case "email":
      if (!value) {
        return "Email is required";
      }
      break;

    case "password":
      if (!value) {
        return "Password is required";
      }
      if (value.length < 6) {
        return "Password must be at least 6 characters";
      }
      break;

    case "address":
      if (value.trim().length < 5) {
        return "Address must be at least 5 characters";
      }
      break;

    case "phone_no":
      if (value ===10) {
        return "Phone number must be exactly 10 digits";
      }
      break;

    default:
      return "";
  }

  return "";
};
