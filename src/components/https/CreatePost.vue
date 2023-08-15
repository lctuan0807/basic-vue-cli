<template>
  <div>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">Post User Id</label>
        <input type="text" id="userId" v-model="formData.userId" />
      </div>

      <div>
        <label for="title">Post Title</label>
        <input type="text" id="title" v-model="formData.title" />
      </div>

      <div>
        <label for="body">Post Body</label>
        <input type="text" id="body" v-model="formData.body" />
      </div>

      <button>Create Post</button>
    </form>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const formData = ref({ userId: "", title: "", body: "" });

function createPost() {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", formData.value)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
</script>

<style scoped></style>
