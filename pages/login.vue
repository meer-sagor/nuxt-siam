<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types';


definePageMeta({
  middleware: ['authorization']
});

const state = reactive({
  email: undefined,
  password: undefined,
});

const {setAuthToken} = useAuthStatus()

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Required' });
  if (!state.password) errors.push({ path: 'password', message: 'Required' });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data);
  const { email, password } = event.data;
  try {
    // const res = await useLogin({ email, password });
    setAuthToken('4|Y617TvYhSCcdBNThn0nB37rlTf0aae4847KIRYOq')
    navigateTo({
        name: 'dashboard'
    })
  } catch (error) {
    console.log('error ======', error);
  }
}
</script>

<template>
  <UContainer>
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

      <UButton type="submit"> Submit </UButton>
    </UForm>
  </UContainer>
</template>
