<template>
  <div>
    <button @click="incrementCount">Click {{ count }} times</button>
  </div>
</template>

<script setup>
import useCounter from "../modules/useCounter.js";

const { count, incrementCount } = useCounter();

// import { ref } from "vue";

// const count = ref(0);

// function incrementCount() {
//   count.value += 1;
// }
</script>

<style lang="scss" scoped></style>
