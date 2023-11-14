
export type ILoginRequest = {
    email: string;
    password: string;
  };

export type ILoginResponse = {
  user: {
    id: number
    name: string
    email: string
    email_verified_at: null;
    created_at: null;
    updated_at: null;
  };
  token: string
};
