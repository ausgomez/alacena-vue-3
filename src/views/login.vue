<template>
  <div class="block relative login-page">
    <div class="flex w-1/2 relative bg-white p-8 form-container shadow-xl" style="z-index: 1; opacity: 0.95">
      <!-- FORM -->
      <div class="flex flex-col flex-1">
        <span v-if="error !== ''" class="error-message">{{ error }}</span>
        <UserAuthForm buttonText="Log In" :submitForm="loginWithEmail" />
        <a href="/register" class="text-center">Don't have an account?</a>
      </div>

      <!-- OPTIONS BUTTONS -->
      <div class="flex flex-col flex-1 justify-center">
        <button class="bg-red-500 w-full text-white p-2 my-2" type="button" @click="loginWithProvider('google')">
          <i class="fab fa-google mr-4"></i>
          <span>Sign in with Google</span>
        </button>
        <button class="bg-gray-900 text-white w-full p-2 my-2" type="button" @click="loginWithProvider('github')">
          <i class="fab fa-github mr-4"></i>
          <span>Sign in with Github</span>
        </button>
      </div>
    </div>
    <div class="absolute right-0 bottom-0 flex justify-end" style="z-index: -10">
      <img src="/images/login_alacena.svg" class="w-2/3 mr-6 mb-6" alt="" />
    </div>
  </div>
</template>
<script>
import UserAuthForm from "@/components/UserAuthForm.vue"
import userStore from '@/stores/auth';
export default {
  auth: false,
  components: {
    UserAuthForm,
  },

  setup() {
    const loginWithProvider = async (provider) => {
     const payload = {email: null, password: null, provider}
      return userStore.login(payload);
    }

    return { loginWithProvider, userStore }
  },
}
</script>
<style scoped>
.login-page {
  height: calc(100vh - 120px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container {
  max-width: 800px;
  flex: 1;
}
</style>
