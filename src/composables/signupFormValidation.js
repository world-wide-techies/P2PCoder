function signupFormValidation(user) {
  const errors = {};

  const regxName = /^[A-Za-z\-]{2,50}$/;
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
    !user.firstname.match(regxName) ||
    !user.lastname.match(regxName)
  ) {
    errors.name = "Please enter a valid name";
  }

  const regxEmail = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+)\.([a-z]+)(\.[a-z]+)?$/;
  if (!user.email) {
    errors.email = "Please enter your email address";
  } else if (!user.email.match(regxEmail)) {
    errors.email = "Please enter a valid email address";
  }

  const regxUsername = /^[a-zA-Z0-9_]{3,20}$/;
  if (!user.username) {
    errors.username = "Please enter your username";
  } else if (!user.username.match(regxUsername)) {
    errors.username = "Please enter a valid username";
  }

  const regxPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (!user.password) {
    errors.password = "Please enter a password";
  } else if (user.password.length < 8 || user.password.length > 20) {
    errors.password = "Please enter a password between 8 and 15 characters";
  } else if (!user.password.match(regxPassword)) {
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
