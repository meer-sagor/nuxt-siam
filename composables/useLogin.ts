import type { ILoginRequest, ILoginResponse } from "~/types/auth";

export const useLogin = async ({ email, password }: ILoginRequest) => {
  const toast = useToast();
  const runtimeConfig = useRuntimeConfig().public;
  const { getXsrfToken } = useAuthStatus();
  if (!isValidEmail(email)) {
    toast.add({ title: 'Hello world!' });
    return;
  }
  $fetch('/csrf-cookie', {
    baseURL: runtimeConfig.xsrfToken,
    credentials: 'include',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  })

  return new Promise<ILoginResponse>((resolve: (value: ILoginResponse) => void, reject: (error: any) => void) => {
    $fetch('/login', {
        method: 'post',
        baseURL: runtimeConfig.apiBaseUrl,
        body: {
          email,
          password,
        },
        headers: {
          'X-XSRF-TOKEN': getXsrfToken.value ?? '',
        },
    })
      .then((res) => resolve(res as ILoginResponse))
      .catch((error) => reject(error));
  });
};
