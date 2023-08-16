<template>
  <div>
    <!-- <button @click="getPosts">Load Post</button> -->
    <button @click="filterPost(2)">Filter Post</button>
    <h3 v-if="errorMsg">{{ errorMsg }}</h3>
    <div v-for="post in posts" :key="post.id">
      <h3>{{ post.id }}. {{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <hr />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import ComputedVue from "../basic/Computed.vue";
const posts = ref([]);
const errorMsg = ref("");

onMounted(() => {
  getPosts();
});
function getPosts() {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      // console.log(res.data);
      posts.value = res.data;
    })
    .catch((err) => {
      console.log(err);
      errorMsg = "Error retrieving data";
    });
}
function filterPost(userId) {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => {
      console.log(res.data);
      posts.value = res.data;
    })
    .catch((err) => {
      console.log(err);
      errorMsg = "Error retrieving data";
    });
}
</script>

<style scoped></style>
