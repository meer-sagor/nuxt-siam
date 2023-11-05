<script setup lang="ts">
import type { IAsideBarList } from '../types/asidebar';

const asideList = ref<IAsideBarList[]>([
  {
    name: 'Dashboard',
    url: '/home',
    iconName: 'dashboard',
  },
  {
    name: 'Create Post',
    url: '/dashboard/create-post',
    iconName: 'dashboard',
  },
]);
</script>

<template>
  <aside>
    <ul>
      <li v-for="item in asideList" :key="item.name">
        <NuxtLink :to="item.url">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>
