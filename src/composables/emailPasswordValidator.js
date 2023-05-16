function emailPasswordValidator(email, password) {
  var regxEmail = /^([a-zA-Z0-9\.]+)@([a-zA-Z]+)\.([a-z]+)(\.[a-z]+)?$/;

  var regxPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  regxEmail.test(email)
    ? console.log("Valid email address!")
    : console.log("Please enter a valid email address");

  regxPassword.test(password)
    ? console.log("Valid password")
    : console.log("Invalid password");
}

export { emailPasswordValidator };
