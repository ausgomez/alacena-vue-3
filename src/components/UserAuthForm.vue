<template>
  <div>
    <div v-if="!userStore.getters.isBusy">
      <form id="loginForm" class="block mx-auto" style="max-width: 300px" @submit.prevent="onSubmit">
      <section class="my-4 text-center">
        <h2 class="block w-full text-2xl font-semibold">Sign In</h2>
        <div class=" text-red my-2">{{ userStore.state.error }}</div>
      </section>
      <label class="block my-2">
        <input class="form-input mt-1 block w-full" v-model="form.email" placeholder="name@example.com" />
      </label>
      <label class="block my-2">
        <input
          class="form-input mt-1 block w-full"
          v-model="form.password"
          type="password"
          placeholder="*********"
        />
      </label>
      <button
        class="mt-4 bg-gray-700 w-full block text-white py-2 hover:bg-gray-800"
        type="submit"
      >
        Sign In
      </button>
    </form>
    </div>
    <div class="" v-else>
      <LoadingSpinner />
    </div>
  </div>
</template>
<script>
import { reactive } from 'vue';
import userStore from '@/stores/auth';
import LoadingSpinner from '@/components/LoadingSpinner';

export default {
  name: "UserAuthForm",
  components: {
    LoadingSpinner
  },
  setup() {
    const form = reactive({
      email: '',
      password: '',
      provider: null
    });

    const onSubmit = async () => {
      await userStore.login(form);
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
