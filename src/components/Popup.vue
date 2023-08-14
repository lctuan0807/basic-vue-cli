<template>
  <div>
    <h2>This is a popup</h2>
    <input type="text" v-model="name" />
    <button @click="$emit('closePopup', name)">Close popup</button>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
const name = ref("");

// const emit = defineEmits(["closePopup"]);
const emit = defineEmits({
  closePopup: (name) => {
    if (name) {
      return true;
    } else {
      return false;
    }
  },
});
// function onClosePopup() {
//   emit("closePopup");
// }
</script>

<style lang="scss" scoped></style>
