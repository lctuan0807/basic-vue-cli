<script setup>
import { ref } from "vue";

const names = ref(["Bruce", "Clark", "Diana"]);
const fullNames = ref([
  {
    first: "Bruce",
    last: "Wayne",
  },
  {
    first: "Clark",
    last: "Kent",
  },
  {
    first: "Princess",
    last: "Diana",
  },
]);

const actors = ref([
  {
    name: "Christian Bale",
    movies: ["Batman", "The Prestige"],
  },
  {
    name: "Di Caprio",
    movies: ["Titanic", "Inception"],
  },
]);

const myInfo = ref({ name: "Tuan Le", channel: "lct0807", course: "Vue 3" });
</script>

<template>
  <template v-for="(name, index) in names" :key="name">
    <h2 v-if="name === 'Bruce'">{{ index }} {{ name }}</h2>
  </template>
  <h2 v-for="name in fullNames" :key="name.first">{{ name.first }} {{ name.last }}</h2>

  <div v-for="actor in actors" :key="actor.name">
    <h2>{{ actor.name }}</h2>
    <h3 v-for="movie in actor.movies" :key="movie">{{ value }}</h3>
  </div>

  <h2 v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </h2>

  <template v-for="name in names" :key="name">
    <h2>{{ name }}</h2>
    <hr />
  </template>
</template>

<style></style>
