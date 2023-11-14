<script setup lang="ts">
import type { IAsideBarList } from '../types/asidebar';

const links = [ 
  {
    name: 'Dashboard',
    label: 'Dashboard',
    icon: 'i-heroicons-home',
    to: '/dashboard'
  }, 
  {
    name: 'Create Category',
    label: 'Create Category',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/dashboard/create-category'
  }, 
  {
    name: 'Category List',
    label: 'Category List',
    icon: 'i-heroicons-queue-list',
    to: '/dashboard/category-list'
  }
]
</script>

<template>
  <aside class="h-full">
    <UVerticalNavigation :links="links" class="text-white text-lg" />
    <!-- <ul>
      <li v-for="item in asideList" :key="item.name">
        <NuxtLink :to="item.url" class="text-white">
          {{ item.name }}
        </NuxtLink>
      </li>
    </ul> -->
  </aside>
</template>
