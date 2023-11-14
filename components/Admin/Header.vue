<script setup lang="ts">
const { removeAuthToken } = useAuthStatus();

function logout() {
  removeAuthToken();
  navigateTo({
    name: 'login',
  });
}
</script>

<template>
  <header
    class="h-10 bg-slate-300 flex place-content-between items-center pl-4 pr-4 shadow-sm mb-4 text-black"
  >
    <NuxtLink to="/dashboard"> Brand Logo </NuxtLink>
    <UButton type="submit" @click="logout"> Logout </UButton>
  </header>
</template>
