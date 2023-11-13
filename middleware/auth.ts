export default defineNuxtRouteMiddleware((to, from) => {
   const {isLoggedIn} = useAuthStatus()
    if (!isLoggedIn.value) {
      return navigateTo('/login')
    }
  })