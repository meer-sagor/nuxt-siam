import type { ILoginRequest, ILoginResponse } from '~/types/auth';

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
  });
  const CustomHeaders = {
    'X-XSRF-TOKEN': getXsrfToken.value ?? '',
  };
  const payload = {
    email,
    password,
  };

  return useMutation<ILoginResponse>({
    method: 'post',
    url: '/login',
    headers: CustomHeaders,
    payload,
  });
};
