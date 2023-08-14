<script setup>
import { ref } from "vue";

const num = ref("aa");
const display = ref(true);
const showElement = ref(false);
</script>

<template>
  <h2 v-if="num === 0">The number is zero</h2>
  <h2 v-else-if="num < 0">This number is negative</h2>
  <h2 v-else-if="num > 0">This number is positive</h2>
  <h2 v-else>Not a number</h2>

  <template v-if="display">
    <h2>Tuan</h2>
    <h2>Le</h2>
    <h2>Vue</h2>
  </template>

  <h2 v-show="showElement">Using v-show</h2>
</template>

<style scoped></style>
