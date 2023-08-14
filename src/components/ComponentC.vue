<template>
  <h2>Component C</h2>
  <h2>Component C username - {{ userName }}</h2>
</template>

<script setup>
import { inject } from "vue";

const userName = inject("username");
</script>

<style lang="scss" scoped></style>
