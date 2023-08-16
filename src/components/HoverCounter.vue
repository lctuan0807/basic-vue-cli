<template>
  <div>
    <h3 @mouseover="incrementCount">Hovered {{ count }} times</h3>
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
