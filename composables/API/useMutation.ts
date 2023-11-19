type IMutation = {
  payload: object;
  method: 'post' | 'put' | 'delete' | 'patch';
  url: string;
  headers?: Record<string, string>;
};

export const useMutation = <T>({
  method,
  payload,
  headers,
  url,
}: IMutation) => {
  const runtimeConfig = useRuntimeConfig().public;
  const { getAuthToken } = useAuthStatus();

  return new Promise<T>((resolve, reject) => {
    $fetch(url, {
      method,
      baseURL: runtimeConfig.apiBaseUrl,
      body: payload,
      headers: {
        ...headers,
        ...(getAuthToken.value && {
          Authorization: `Bearer ${getAuthToken.value}`,
        }),
      },
    })
      .then((res) => resolve(res as T))
      .catch((error) => reject(error.data));
  });
};
