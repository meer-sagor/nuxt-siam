export const useAuthStatus = () => {
  const authToken = useCookie('auth_token');
  const XSRF_TOKEN = useCookie('XSRF-TOKEN');

  const getXsrfToken = computed(()=> XSRF_TOKEN.value)
  const setAuthToken = (token: string) => (authToken.value = token);
  const removeAuthToken = () => (authToken.value = null);

  const getAuthToken = computed<string>(() => authToken.value ?? '');

  const isLoggedIn = computed(() => !!getAuthToken.value);

  return {
    setAuthToken,
    isLoggedIn,
    removeAuthToken,
    getXsrfToken
  };
};
