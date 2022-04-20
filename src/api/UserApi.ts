import axios from 'axios'

import { UserSignin, UserSignup } from '../helper/types'
import { axiosError } from '../helper/utilities';

/* Axios defaults */

axios.defaults.withCredentials = true;
const url = 'http://localhost:8000';

/* User management */

export async function signup(parameters : UserSignup) {
  const params : UserSignup = {
    email: parameters.email,
    password: parameters.password,
    firstName: parameters.firstName,
    lastName: parameters.lastName
  };

  await axios
    .post(url + '/users/signup', params)
    .then((res) => {
      console.log(res);
      alert('You signed up successfully. Please signin.');
    })
    .catch((error) => {
      axiosError(error);
    })
}

export async function signin(parameters : UserSignin) {
  const params : UserSignin = {
    email: parameters.email,
    password: parameters.password
  };

  await axios
    .post(url + '/users/signin', params)
    .then((res) => {
      console.log(res);
      alert('Signin successfull. Welcome back.');
    })
    .catch((error) => {
      axiosError(error);
    })
}

export async function signout() {
  await axios
    .post(url + '/users/me/signout')
    .then((res) => {
      console.log(res);
      alert('Signout completed.');
    })
    .catch((error) => {
      axiosError(error);
    })
}

export async function deleteAccount() {
  await axios
    .delete(url + '/users/me')
    .then((res) => {
      console.log(res);
      alert('Your account has been deleted.');
    })
    .catch((error) => {
      axiosError(error);
    })
}

export async function resetPassword(email : string | undefined) {
  await axios
    .post(url + '/users/reset', email)
    .then((res) => {
      console.log(res);
      alert('Password reset email sent.');
    })
    .catch((error) => {
      axiosError(error);
    })
}
