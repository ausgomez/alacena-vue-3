<template>
  <div>
    <form id="loginForm" class="block m-4" style="max-width: 300px" @submit.prevent="onSubmit">
      <section class="my-4 text-center">
        <h2 class="block w-full text-2xl font-semibold">Sign In</h2>
        <div class=" text-red my-2">{{ userStore.state.error }}</div>
      </section>
      <label class="block my-2">
        <input class="form-input mt-1 block w-full" v-model="userInfo.email" placeholder="name@example.com" />
      </label>
      <label class="block my-2">
        <input
          class="form-input mt-1 block w-full"
          v-model="userInfo.password"
          type="password"
          placeholder="*********"
        />
      </label>
      <button
        class="mt-4 bg-gray-700 w-full block text-white py-2 hover:bg-gray-800"
        @click="submitForm(userInfo)"
        type="button"
      >
        Sign In
      </button>
    </form>
  </div>
</template>
<script>
import { reactive } from 'vue';
import userStore from '@/stores/auth';

export default {
  name: "UserAuthForm",
  data: () => ({
    userInfo: {
      email: "",
      password: "",
    },
  }),
  setup() {
    const form = reactive({
      email: '',
      password: '',
      provider: null
    });

    const onSubmit = () => {
      userStore.login(form);
      form.email = '';
      form.password = '';
    }

    return { form, onSubmit, userStore }
  }
}
</script>
<style scoped>
.form-input {
  appearance: none;
  background-color: #fff;
  border-color: #d1d5db;
  border-width: 1px;
  border-radius: 0.275rem;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
