<template>
  <div>
    <input type="text" ref="inputRef" />
    <PostList ref="postListRef" />
  </div>
</template>

<script setup>
import PostList from "./https/PostList.vue";
import { onMounted, ref } from "vue";
const inputRef = ref(null);
const postListRef = ref(null);

onMounted(() => {
  console.log(postListRef.value);
  inputRef.value.focus();
});
</script>

<style scoped></style>
