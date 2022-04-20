export interface UserSignin {
  email: string | undefined;
  password: string | undefined;
}

export interface UserSignup {
  email: string | undefined;
  password: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
}

export interface UserResponse {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
