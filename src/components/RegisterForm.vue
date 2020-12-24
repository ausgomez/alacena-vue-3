<template>
  <div>
    <div class="p-4 bg-white shadow-md block">
      <form
        id="registerForm"
        class="block mx-auto"
        style="max-width: 300px"
        @submit.prevent="onSubmit"
      >
        <section class="my-4 text-center">
          <h2 class="block w-full text-2xl font-semibold">Register</h2>
        </section>
        <label class="block my-2">
          <span class="">Email Address</span>
          <input
            class="form-input mt-1 block w-full"
            v-model="form.email"
            placeholder="sampe@example.com"
          />
        </label>
        <label class="block my-2">
          <span class="">Password</span>
          <input
            class="form-input mt-1 block w-full"
            v-model="form.password"
            placeholder="********"
          />
        </label>
        <label class="block my-2">
          <span class="">Confirm Password</span>
          <input
            class="form-input mt-1 block w-full"
            v-model="form.confirmPassword"
            placeholder="********"
          />
        </label>
        <button
          class="mt-4 bg-gray-700 w-full block text-white py-2 hover:bg-gray-800"
          type="submit"
        >
          Register Now
        </button>
      </form>
      <div class="mt-8 text-center">
        <a href="/login" class="underline">Sign in instead?</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import userStore from "@/stores/auth";

export default {
  name: "RegisterForm",
  setup() {
    const form = reactive({
      email: "",
      password: "",
      confirmPassword: "",
    });

    const validateEmail = () => {
      return (
        //eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email) &&
        this.form.email !== ""
      );
    };

    const validatePassword = () => {
      return (
        //eslint-disable-next-line
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email) &&
        this.form.password !== ""
      );
    };

    const confirmPassword = () => {
      return (
        this.form.password !== "" &&
        this.form.password === this.form.confirmPassword
      );
    };

    return {
      form,
      userStore,
      validateEmail,
      validatePassword,
      confirmPassword,
    };
  },
};
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