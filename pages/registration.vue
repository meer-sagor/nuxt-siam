<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types';


definePageMeta({
  middleware: ['authorization']
});

const state = reactive({
    name: undefined,
    email: undefined,
    password: undefined,
    image:undefined
});

function fileinfo(event){
  state.image = event.target.files[0];
}


const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ path: 'name', message: 'Name Filed Are Required' });
  if (!state.email) errors.push({ path: 'email', message: 'Email Filed Are Required' });
  if (!state.password) errors.push({ path: 'password', message: 'Password Filed Are Required' });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<any>) {

  const { name, email, password, image } = event.data;
  let formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('password', password);
  formData.append('image', image);
  try {

      const res = await $fetch('http://127.0.0.1:8000/api/createaccount', {
          method: 'post',
          body: formData,
          headers: {
            'Accept': 'application/json',
          },
        })

      console.log(res);

  } catch (error) {
    console.log('error ======', error);
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

          <UButton type="submit"> Create An Account </UButton>

          <NuxtLink to="/login" class="ml-2">Login</NuxtLink>
        </UForm>
    </UCard>
  </UContainer>
</template>
