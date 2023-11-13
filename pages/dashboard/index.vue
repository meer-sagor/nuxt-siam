<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth']
});

const { data, pending, error } = await useFetch(
  'https://jsonplaceholder.typicode.com/users',
  {
    server: false,
    transform: (data) => {
      console.log('data =======', data);
      const modify = data.map((item) => ({
        ...item,
        image: 'https://picsum.photos/seed/picsum/200/300',
      }));
      return modify;
    },
  }
);
</script>

<template>
  <div class="flex gap-5 flex-wrap">
    <!-- <pre>{{ data }}</pre> -->
    <!-- {{asdfasd}} -->
    <UCard v-for="user in data" :key="user.id">
      <template #header>
        <Placeholder class="h-8" />
        <Avatar
          :src="user.image"
          alt="Avatar"
          size="md"
        />
      </template>

      <!-- <Placeholder class="h-32" /> -->
      <div>
        <h4>{{ user.name }}</h4>
      </div>

      <!-- <template #footer>
        <Placeholder class="h-8" />
      </template> -->
    </UCard>
  </div>
</template>
