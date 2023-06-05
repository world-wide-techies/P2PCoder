function emailValidator(email) {
  var regxEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z])+.([a-zA-Z]+)(\.[a-zA-Z]+)?$/;

  return regxEmail.test(email) ? true : false;
}

function passwordValidator(password) {
  var regxPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  return regxPassword.test(password) ? true : "Please enter a valid password";
}

export { emailValidator, passwordValidator };
