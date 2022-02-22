import { NavbarHome, Body } from "./home/homepage";
import { Login } from "./home/login";
import { Signup } from "./home/signup";
import NavbarLogged from "../components/navbar_logged";
import {
  signup,
  signin,
  signout,
  deleteAccount,
} from "../helper/api";

export {
  NavbarHome,
  Body,
  Login,
  Signup,
  NavbarLogged,
  signup,
  signin,
  signout,
  deleteAccount,
};
