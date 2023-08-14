<template>
  <h2>{{ name }}</h2>
  <div>
    <button @click="onChangeName('Le Tuan'), increaseCount(1, $event)">
      Change name
    </button>
    <h2>{{ count }}</h2>
    <div>
      <button @click="increaseCount(2, $event)">Increase</button>
      <button @click="decreaseCount(3)">Decrease</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "Tuan Le",
      count: 0,
    };
  },
  methods: {
    onChangeName(newName) {
      this.name = newName;
    },

    increaseCount(num, event) {
      console.log(event);
      return (this.count += num);
    },

    decreaseCount(num) {
      return (this.count -= num);
    },
  },
};
</script>
<style></style>
