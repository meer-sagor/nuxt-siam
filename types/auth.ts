export type ILoginRequest = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    created_at: null;
    updated_at: null;
  };
  token: string;
};

export type IRegRequest = {
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  image: File | undefined;
};

export type IRegResponse = {
  message: string;
  accessToken: string;
};
