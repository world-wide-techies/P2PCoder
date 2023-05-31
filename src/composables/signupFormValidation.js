function signupFormValidation(user) {
  const errors = {};

  const namePattern = /^[A-Za-z\-]{2,50}$/;
  if (!user.firstname || !user.lastname) {
    errors.name = "Please enter your name";
  } else if (
    user.firstname.length < 2 ||
    user.firstname.length > 50 ||
    user.lastname.length < 2 ||
    user.lastname.length > 50
  ) {
    errors.name = "Name must be between 2 and 50 characters";
  } else if (
    !user.firstname.match(namePattern) ||
    !user.lastname.match(namePattern)
  ) {
    errors.name = "Please enter a valid name";
  }

  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!user.email) {
    errors.email = "Please enter your email address";
  } else if (!user.email.match(emailPattern)) {
    errors.email = "Please enter a valid email address";
  }

  const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
  if (!user.username) {
    errors.username = "Please enter your username";
  } else if (!user.username.match(usernamePattern)) {
    errors.username = "Please enter a valid username";
  }

  const passwordPattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/;
  if (!user.password) {
    errors.password = "Please enter a password";
  } else if (user.password.length < 8 || user.password.length > 20) {
    errors.password = "Please enter a password between 8 and 20 characters";
  } else if (!user.password.match(passwordPattern)) {
    errors.password =
      "Password must contain one digit, one lowercase letter, one uppercase letter, and one special character";
  }

  if (!user.confirm_password) {
    errors.confirm_password = "Please confirm your password";
  } else if (user.password !== user.confirm_password) {
    errors.confirm_password = "Passwords do not match";
  }

  return errors;
}
export { signupFormValidation };
