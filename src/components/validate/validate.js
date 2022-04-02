export const validate = (data, type) => {
  const errors = {};


  //username
  if (!data.username) {
    errors.username = "Username required";
  } else {
    delete errors.username;
  }

  //password
  if (!data.password) {
    errors.password = "password required";
  } else if (data.password.length < 6) {
    errors.password = "password must be more 6 character";
  } else {
    delete errors.password;
  }



  if (type === "signin") {

    //name
    if(!data.name) {
        errors.name = "Name required" ;
    } else {
        delete errors.name
    }

    //lastName
    if(!data.lastName) {
        errors.lastName = "Last name required" ;
    } else {
        delete errors.lastName
    }

  //email
  if (!data.email) {
    errors.email = "Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }
    //confirmPassword
    if (!data.confirmPassword) {
      errors.confirmPassword = "confirm password required";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "confirm password do not match";
    } else {
      delete errors.confirmPassword;
    }
  }

  return errors;
};
