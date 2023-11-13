export const useAuthStatus = () => {
  const authToken = useCookie('auth_token');

  const setAuthToken = (token: string) => (authToken.value = token);
  const removeAuthToken = () => (authToken.value = null);

  const getAuthToken = computed<string>(() => authToken.value ?? '');

  const isLoggedIn = computed(() => !!getAuthToken.value);

  return {
    setAuthToken,
    isLoggedIn,
    removeAuthToken,
  };
};
