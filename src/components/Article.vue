<template>
  <div>
    <h2>Article component</h2>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ isPublished ? "Yes" : "No" }}</h2>
  </div>
</template>

<script setup>
import { defineProps, defineOptions, useAttrs } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
    default: "Default title",
  },
  likes: {
    type: Number,
    default: 0,
  },
  isPublished: Boolean,
});

// Disabling non-props attribute inheritance for root node
defineOptions({
  inheritAttrs: false,
});

// Accessing non-props attribute
const attrs = useAttrs();
console.log(attrs.id);
</script>

<style scoped></style>
