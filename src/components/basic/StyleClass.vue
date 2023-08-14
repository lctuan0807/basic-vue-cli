<script setup>
import { ref } from "vue";

const greet = ref("Hello");
const name = ref("Batman");
const channel = ref("<b>Channel</b>");
const hack = ref(`<a href="#" onclick="alert('You have been hacked!')">Win a prize!</a>`);
const headingId = ref("heading");
const isDisabled = ref(true);
const status = ref("success");
const isPromoted = ref(true);
const isSoldOut = ref(true);
const highlightColor = ref("orange");
const headerSize = ref(50);
const styleObject = {
  color: "orange",
  fontSize: "50px",
  padding: "20px",
};
const baseStyleObject = ref({
  fontSize: "50px",
  padding: "20px",
});
const successStyleObject = ref({
  color: "green",
  backgroundColor: "lightgreen",
  border: "1px solid green",
});
const dangerStyleObject = ref({
  color: "darkred",
  backgroundColor: "lightgreen",
  border: "1px solid green",
});
</script>

<template>
  <div>{{ greet }} {{ name }}</div>
  <div v-html="channel"></div>
  <div v-html="hack"></div>
  <h2 :id="headingId">Heading</h2>
  <button v-bind:disabled="isDisabled">Button</button>

  <h2 class="underline" v-bind:class="status">Underline text</h2>
  <h2 v-bind::class="{ promoted: isPromoted }">Promoted</h2>
  <h2 v-bind::class="isSoldOut ? 'sold-out' : 'new'">Soldout?</h2>
  <h2 :class="['new', 'promoted']">Newly Promoted?</h2>
  <h2 :class="['promoted: isPromoted', isSoldOut ? 'sold-out' : 'new']">
    Array Class Condition Binding
  </h2>

  <h2
    :class="{
      promoted: isPromoted,
      new: !isSoldOut,
      'sold-out': isSoldOut,
    }"
  >
    Object Class Condition Binding
  </h2>

  <h2
    :style="{
      color: highlightColor,
      fontSize: headerSize + 'px',
      padding: '20px',
    }"
  >
    Inline Styles
  </h2>
  <h2 :style="styleObject">Style Object</h2>

  <div :style="[baseStyleObject, successStyleObject]">Success Style</div>
  <div :style="[baseStyleObject, dangerStyleObject]">Danger Style</div>
</template>

<style>
.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
}

.new {
  color: green;
}

.sold-out {
  color: red;
}
</style>
