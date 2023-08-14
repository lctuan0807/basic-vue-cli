<template>
  <h3 v-for="name in names" :key="name.firstName">
    <!-- {{ name.firstName }} {{ name.lastName }} -->
    <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
  </h3>
</template>

<script setup>
import { ref } from "vue";

const names = ref([
  {
    firstName: "Bruce",
    lastName: "Wayne",
  },
  {
    firstName: "Clark",
    lastName: "Kent",
  },
  {
    firstName: "Princess",
    lastName: "Diana",
  },
]);
</script>

<style scoped></style>
