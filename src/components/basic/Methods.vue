<template>
  <h2>{{ add(2, 3, 5) }}</h2>
  <h2>Multiply method: {{ multiply(2) }}</h2>
</template>
<script>
export default {
  data() {
    return {
      baseMultiplier: 5,
    };
  },

  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
  },
};
</script>
<style></style>
