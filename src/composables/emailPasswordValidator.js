function emailValidator(email) {
  var regxEmail = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+)\.([a-z]+)(\.[a-z]+)?$/;

  return regxEmail.test(email) ? true : "Please enter a valid email address";
}

function passwordValidator(password) {
  var regxPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  return regxPassword.test(password) ? true : "Please enter a valid password";
}

export { emailValidator, passwordValidator };
