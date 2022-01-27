import axios from "axios";

import { User } from './types';

// axios defaults

axios.defaults.withCredentials = true;
const url = "http://localhost:8000";

function getError(error : any) {
  if (error.response) {
    console.log(error.response.data.error.message);
    console.log(error.response.status);
    console.log(error.response.headers);
    alert(
      "An error " +
        error.response.status +
        " occured : " +
        error.response.data.error.message
    );
  }
}

// user management

export async function signup(parameters : User) {
  const params : User = {
    email: parameters.email,
    password: parameters.password,
  };
  let signup = false;

  await axios
    .post(url + "/users/signup", params)
    .then((res) => {
      console.log(res);
      alert(
        "You signed up successfully with email " +
          res.data.email +
          ". Please signin."
      );
      signup = true;
    })
    .catch((error) => {
      getError(error);
    })
  return signup;
}

export async function signin(parameters : User) {
  const params : User = {
    email: parameters.email,
    password: parameters.password,
  };
  let id = "";

  await axios
    .post(url + "/users/signin", params)
    .then((res) => {
      console.log(res);
      id = res.data.id;
      alert("Signin completed. Welcome back " + res.data.email + ".");
    })
    .catch((error) => {
      getError(error);
    })
  return id;
}

export async function signout() {
  await axios
    .post(url + "/users/me/signout")
    .then((res) => {
      console.log(res);
      alert("Signout completed.");
    })
    .catch((error) => {
      getError(error);
    })
  return 0;
}

export async function deleteAccount() {
  await axios
    .delete(url + "/users/me")
    .then((res) => {
      console.log(res);
      alert("Your account has been deleted.");
    })
    .catch((error) => {
      getError(error);
    })
  return 0;
}
