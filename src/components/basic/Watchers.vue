<template>
  <div>
    <h2>Volume Tracker (0-20)</h2>
    <h3>Current Volume - {{ volume }}</h3>
    <button @click="volume += 2">Increase</button>
    <button @click="volume -= 2">Decrease</button>
  </div>

  <div>
    <input type="text" v-model="movie" />
  </div>

  <div>
    <input type="text" v-model="movieInfo.title" />
    <input type="text" v-model="movieInfo.actor" />
  </div>

  <div>
    <button @click="movieList.push('Thor')">Add movie</button>
  </div>

  <div>
    <h3>Use computed properties when</h3>
    <ul>
      <li>You need to compose new data from existing data sources</li>
      <li>You need to reduce the length of a variable</li>
    </ul>
    <h3>Use watchers when</h3>
    <ul>
      <li>
        You have to check f a property has changed to a favorable value to know if you're
        ready to perform an action
      </li>
      <li>You have to call an API</li>
      <li>You have to apply transitions (start state -> end state)</li>
    </ul>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const volume = ref(0);
const movie = ref("Avenger");
const movieInfo = ref({
  title: "",
  actor: "",
});
const movieList = ref(["Avenger", "Ant-man"]);

watch(volume, (newValue, oldValue) => {
  if (newValue > oldValue && newValue === 16) {
    alert("Listening to a high volume for a long time may damage your hearing");
  }
});

// immediate: true when loading initial data
watch(
  movie,
  (newValue) => {
    console.log("Calling API with movie name: ", newValue);
  },
  { immediate: true }
);

// deep: true when mutating the data
watch(
  movieInfo,
  (newValue) => {
    console.log(
      `Calling API with movie tile = ${newValue.title} and actor = ${newValue.actor}`
    );
  },
  { deep: true }
);

watch(
  movieList,
  (newValue) => {
    console.log("Updated movie list");
  },
  { deep: true }
);
</script>
<style></style>
