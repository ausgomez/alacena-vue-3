<template>
  <div class="flex flex-col flex-1 items-center justify-center">
      <RegisterForm style="width: 400px;"/>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm';

export default {
    name: 'Register',
    components: {
        RegisterForm
    },
    setup() {
        return {};
    }
}
</script>

<style>

</style>