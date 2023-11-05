<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});
</script>

<template>
  <div>
    hello
    <!-- <img src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="Avatar" class="w-[5rem] h-[5rem] rounded-full"> -->

      <Avatar src='https://avatars.githubusercontent.com/u/739984?v=4'
      alt="Avatar" size="md" />

    <UAvatar
      src="https://avatars.githubusercontent.com/u/739984?v=4"
      alt="Avatar"
      size="3xl"
    />
  </div>
</template>
