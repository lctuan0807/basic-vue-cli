import { ref } from "vue";

export default function() {

  const count = ref(0);

  function incrementCount() {
    count.value += 1;
  }

  return {
    count,
    incrementCount
  }
}