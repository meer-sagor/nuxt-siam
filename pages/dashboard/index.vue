<script setup lang="ts">
useHead({
  title: 'Dashboard', // Works
});
definePageMeta({
  layout: 'dashboard',
  middleware: ['auth'],
});

const { data } = useCustomFetch<any>({
  cacheKey: 'test',
  baseURL: 'https://jsonplaceholder.typicode.com',
  url: '/users',
  options: {
    transform: (data: any) => {
      console.log('data =======', data);
      const modify = data.map((item: any) => ({
        ...item,
        image: 'https://picsum.photos/seed/picsum/200/300',
      }));
      return modify;
    },
  },
});
</script>

<template>
  <div class="grid gap-4 grid-cols-4 grid-rows-3">
    <!-- <pre>{{ data }}</pre> -->
    <!-- {{asdfasd}} -->
    <UCard v-for="user in data" :key="user.id">
      <template #header>
        <Placeholder class="h-8" />
        <Avatar
          :src="user?.image"
          alt="Avatar"
          size="md"
          class="items-center"
        />
      </template>

      <!-- <Placeholder class="h-32" /> -->
      <div>
        <h4>{{ user?.name }}</h4>
      </div>

      <!-- <template #footer>
        <Placeholder class="h-8" />
      </template> -->
    </UCard>
  </div>
</template>
