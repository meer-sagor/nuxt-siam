<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types';

definePageMeta({
  middleware: ['authorization'],
});

const state = reactive({
  email: undefined,
  password: undefined,
});

const { setAuthToken } = useAuthStatus();

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email)
    errors.push({ path: 'email', message: 'Email Filed Are Required' });
  if (!state.password)
    errors.push({ path: 'password', message: 'Password Filed Are Required' });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  const { email, password } = event.data;
  try {
    const res = await useLogin({ email, password });
    setAuthToken(res?.token ?? '');
    navigateTo({
      name: 'dashboard',
    });
  } catch (error) {
    console.log('error ======', error);
  }
}
</script>

<template>
  <UContainer>
    <UCard class="w-[30rem] mx-auto mt-4">
      <center>
        <h1>Login Your Account</h1>
      </center>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit"> Login </UButton>
        <NuxtLink to="/registration" class="ml-2">Registration</NuxtLink>
      </UForm>
    </UCard>
  </UContainer>
</template>
