<script setup>
import { provide, ref } from "vue";
import StyleClass from "./components/basic/StyleClass.vue";
import ConditionRendering from "./components/basic/ConditionRendering.vue";
import ListRendering from "./components/basic/ListRendering.vue";
import Methods from "./components/basic/Methods.vue";
import EventHandling from "./components/basic/EventHandling.vue";
import FormHandling from "./components/basic/FormHandling.vue";
import Computed from "./components/basic/Computed.vue";
import Watchers from "./components/basic/Watchers.vue";
import Greet from "./components/Greet.vue";
import Article from "./components/Article.vue";
import ComponentA from "./components/ComponentA.vue";
import Popup from "./components/Popup.vue";
import Input from "./components/Input.vue";
import Card from "./components/Card.vue";
import NameList from "./components/NameList.vue";

const name = ref("");
const channel = ref("https://github.com/lctuan0807");
const isShowPopup = ref(false);

function onClosePopup(name) {
  isShowPopup.value = false;
  console.log(name);
}

// Provide/inject
// provide("username", name);
// Options API
// export default {
//   name: "App",
//   components: [Greet],
// };
</script>

<template>
  <!-- <StyleClass /> -->
  <!-- <ConditionRendering /> -->
  <!-- <ListRendering /> -->
  <!-- <Methods /> -->
  <!-- <EventHandling /> -->
  <!-- <FormHandling /> -->
  <!-- <Computed /> -->
  <!-- <Watchers /> -->
  <!-- <Greet name="Tuan Le" hero-name="lct0807"></Greet> -->
  <!-- <Greet name="Tuan Le" :hero-name="channel"></Greet> -->

  <!-- Props (fallthrough: id, class, style will be added to child component if child has root element) -->
  <!-- <Article id="my-article" title="Article title" :likes="50" :isPublished="true" /> -->

  <!-- Provide/Inject  -->
  <!-- <ComponentA /> -->

  <!-- Events -->
  <!-- <div>
    <button @click="isShowPopup = true">Show popup</button>
    <Popup v-show="isShowPopup" @close-popup="onClosePopup" />
  </div> -->

  <!-- Component v-model -->
  <!-- <Input v-model="name" /> -->

  <!-- Slots -->
  <!-- <Card></Card>
  <Card>Card content 1</Card>
  <Card><h2>Card content 2</h2></Card>
  <Card><img src="https://picsum.photos/200" alt="" /></Card> -->
  <!-- <Card>
    <template v-slot:header>
      <h3>Card header</h3>
    </template>
    <template #default>
      <img src="https://picsum.photos/200" alt="" />
      <p>Card content</p>
    </template>
    <template #footer>
      <h3>Card footer</h3>
    </template>
  </Card> -->
  <NameList>
    <template #default="slotProps">
      {{ slotProps.firstName }} {{ slotProps.lastName }}
    </template>
  </NameList>

  <NameList>
    <template #default="{ firstName, lastName }">
      {{ lastName }} {{ firstName }}
    </template>
  </NameList>

  <NameList>
    <template #default="slotProps">
      {{ slotProps.firstName }}
    </template>
  </NameList>
</template>

<style></style>
