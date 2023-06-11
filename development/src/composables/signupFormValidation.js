function signupFormValidation(user) {
  const errors = {};

  const regxName = /^[A-Za-z\-]{2,50}$/;
  const trimmedFirstName = user.firstname.trim();
  if (!trimmedFirstName) {
    errors.firstname = "Please enter your first name";
  } else if (trimmedFirstName < 2 || trimmedFirstName > 50) {
    errors.firstname = "Name must be between 2 and 50 characters";
  } else if (!regxName.test(trimmedFirstName)) {
    errors.firstname = "Please enter a valid name";
  }

  const regxLastName = /^[A-Za-z\-]{2,50}$/;
  const trimmedLastName = user.lastname.trim();
  if (!trimmedLastName) {
    errors.lastname = "Please enter your last name";
  } else if (trimmedLastName < 2 || trimmedLastName > 50) {
    errors.lastname = "Name must be between 2 and 50 characters";
  } else if (!regxLastName.test(trimmedLastName)) {
    errors.lastname = "Please enter a valid name";
  }

  const regxEmail = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+)\.([a-z]+)(\.[a-z]+)?$/;
  const trimmedEmail = user.email.trim();
  if (!trimmedEmail) {
    errors.email = "Please enter your email address";
  } else if (!regxEmail.test(trimmedEmail)) {
    errors.email = "Please enter a valid email address";
  }

  const regxUsername = /^[a-zA-Z0-9_]{3,20}$/;
  const trimmedUserName = user.username.trim();
  if (!trimmedUserName) {
    errors.username = "Please enter your username";
  } else if (!regxUsername.test(trimmedUserName)) {
    errors.username = "Please enter a valid username";
  }

  const regxPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  const trimmedPassword = user.password.trim();
  if (!trimmedPassword) {
    errors.password = "Please enter a password";
  } else if (trimmedPassword.length < 8 || trimmedPassword.length > 20) {
    errors.password = "Please enter a password between 8 and 15 characters";
  } else if (!regxPassword.test(trimmedPassword)) {
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
