<template>
  <span v-if="property.$invalid" class="text-danger">
    <slot>
      <ul class="list-unstyled">
        <li v-for="e in property.$errors" :key="e.$message" class="pl-2 bg-red-500">
          <span class="text-white text-sm">{{ e.$message }}</span>
        </li>
      </ul>
    </slot>
  </span>
</template>

<script>
export default {
    name: 'ErrorSpan',
    props: ['property']
};
</script>

<style>
</style>