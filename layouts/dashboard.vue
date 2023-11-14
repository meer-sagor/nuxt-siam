<template>
  <main>
    <UContainer>
      <div class="flex">
        <div class="w-1/5">
          <AsideBar />
        </div>
        <div class="w-4/5">
          <AdminHeader />
          <slot />
        </div>
      </div>
    </UContainer>
  </main>
</template>
