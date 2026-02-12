// 1. Custom Error Classes

class AppError extends Error {
  constructor(message) {
    super(message);
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message) {
    super(message);
  }
}

//  Central Error Handler

function errorHandler(error) {
  if (error.isOperational) {
    console.log(`[Handled Error]: ${error.message}`);
  } else {
    console.error("[Unexpected Error]:", error);
  }
}

// usage

function submitForm(data) {
  if (!data || !data.email) {
    throw new ValidationError("Email is required");
  }
  console.log("Form submitted successfully");
}


try {
  submitForm({ name: "Shivaji"}); 
} catch (error) {
  errorHandler(error);
}




// 2.Debug a broken script using breakpoints.

function Total(price, tax) {
  return price + price * tax;
}

function checkout() {
  const total = Total("100", 0.18);
  console.log("Total Amount:", total);
}

checkout();
