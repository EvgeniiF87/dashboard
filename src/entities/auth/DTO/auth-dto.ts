export type RegistrationInput = {
  avatar?: string;
  email: string;
  name: string;
  phone?: string;
  password: string;
  roleId: number;
  file?: File | null;
};

export type RegistrationResponse = {};

export type AuthorizationInput = {
  [key: string]: string;
  email: string;
  password: string;
};

export type AuthorizationResponse = {
  data: {
    signIn: {
      role: string;
      token: string;
      userId: number;
    };
  };
};
