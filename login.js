// function to validate login

function validateLogin(username, password) {
  // if username is less than 5, return username must be at least 5 characters log
  if (username.length < 5) {
    return {
      isValid: false,
      message: "Username must be at least 5 characters",
    };
  }

  //   if password i less than 8, return password must be at least 8 characters long
  if (password.length < 8) {
    return {
      isValid: false,
      message: "Password must be at least 8 characters",
    };
  }

  //   if password has no number, return password must contain at least one number
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      message: "Password must contain at least one number",
    };
  }

  //   else log the user in
  else {
    return {
      isValid: true,
      message: "Login successful",
    };
  }
}

console.log(validateLogin("john", "pass"));
console.log(validateLogin("john_doe", "password"));
console.log(validateLogin("john_doe", "password123"));



// my output test code
console.log(validateLogin("Ishmael", "powerful"));
console.log(validateLogin("john_doe", "password1"));
console.log(validateLogin("john_doe", "passwo3"));
