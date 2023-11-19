import type { UseFetchOptions } from 'nuxt/app';

type IQuery<T> = {
  url: string;
  query?: object;
  cacheKey: string;
  headers?: Record<string, string>;
  baseURL?: string,
  options?: UseFetchOptions<T>;
};

export function useCustomFetch<T>({ query, url, headers, cacheKey, baseURL, options }: IQuery<T>) {
  const runtimeConfig = useRuntimeConfig().public;
  const { getAuthToken } = useAuthStatus();

  const baseUrl = baseURL ? baseURL : runtimeConfig.apiBaseUrl

  const defaults: UseFetchOptions<T> = {
    baseURL: baseUrl,

    key: cacheKey,
    query,
    // set user token if connected
    headers: {
      ...headers,
      ...(getAuthToken.value && {
        Authorization: `Bearer ${getAuthToken.value}`,
      }),
    },
    ...options
  };
  return useFetch(url, defaults);
}
