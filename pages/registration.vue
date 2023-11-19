<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types';
import type { IFormData } from '~/composables/useCreateFormData';
import type { IRegRequest, IRegResponse } from '~/types/auth';

definePageMeta({
  middleware: ['authorization'],
});

const { setAuthToken } = useAuthStatus();
const toast = useToast();

const state = reactive<IRegRequest>({
  name: undefined,
  email: undefined,
  password: undefined,
  image: undefined,
});
const processing = ref(false)

function fileinfo(event: Event) {
  const inputElement = event.target as HTMLInputElement;

  if (inputElement.files && inputElement.files.length > 0) {
    state.image = inputElement.files[0];
  } else {
    state.image = undefined; // No file selected, reset the state
  }
}

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name)
    errors.push({ path: 'name', message: 'Name Filed Are Required' });
  if (!state.email)
    errors.push({ path: 'email', message: 'Email Filed Are Required' });
  if (!state.password)
    errors.push({ path: 'password', message: 'Password Filed Are Required' });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {
  const { name, email, password, image } = event.data;

  const formData: IFormData = {
    name,
    email,
    password,
    image,
  };

  if (!isValidEmail(email)) {
    toast.add({ title: 'invalid email' });
    return;
  }
  processing.value = true
  const createdFormData = useCreateFormData(formData);

  try {

    const res = await useMutation<IRegResponse>({
      method: 'post',
      payload: createdFormData,
      url: '/createaccount',
    });

    setAuthToken(res.accessToken)
    navigateTo({name: 'dashboard'})
  } catch (error) {
    console.log('error ======', error);
  }finally{
    processing.value = false
  }
}
</script>

<template>
  <UContainer>
    <UCard class="w-[30rem] mx-auto mt-4">
      <h1 class="text-canter">Create your account</h1>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup label="name" name="name">
          <UInput v-model="state.name" />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <input type="file" @change="fileinfo" />

        <UButton type="submit" :loading="processing"> Create An Account </UButton>

        <NuxtLink to="/login" class="ml-2">Login</NuxtLink>
      </UForm>
    </UCard>
  </UContainer>
</template>
