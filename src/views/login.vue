<template>
  <div class="block relative login-page mx-2">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 justify-between relative bg-white p-8 form-container shadow-xl" style="z-index: 1; opacity: 0.95">
      <!-- FORM -->
      <div class="flex flex-col flex-1" v-bind:class="{'col-span-2': !userStore.getters.providersEnabled}">
        <span v-if="error !== ''" class="error-message">{{ error }}</span>
        <UserAuthForm buttonText="Log In" :submitForm="loginWithEmail" />
        <a href="/register" class="text-center mt-4 underline pointer">Don't have an account?</a>
      </div>

      <!-- OPTIONS BUTTONS -->
      <div v-if="userStore.getters.providersEnabled" class="inline-flex md:flex lg:flex md:flex-col lg:flex-col justify-center items-center w-full space-x-4 mt-4 md:space-x-0 lg:space-x-0 md:block lg:block">
        <SocialLoginButton :provider="'github'" class="md:w-full lg:w-full"/>
        <SocialLoginButton :provider="'google'" class="md:w-full lg:w-full"/>
      </div>
    </div>
    <div class="absolute right-0 bottom-0 flex justify-end" style="z-index: -2">
      <img src="/images/login_alacena.svg" class="w-2/3 mr-6 mb-6" alt="" />
    </div>
  </div>
</template>
<script>
import SocialLoginButton from '@/components/SocialLoginButton';
import UserAuthForm from "@/components/UserAuthForm.vue"
import userStore from '@/stores/auth';
export default {
  auth: false,
  components: {
    UserAuthForm,
    SocialLoginButton
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-container {
  max-width: 800px;
  flex: 1;
}
</style>
