<template>
  <h2>Fullname - {{ firstName }} {{ lastName }}</h2>
  <h2>Computed fullname: {{ fullName }}</h2>
  <button @click="changeFullname">Change fullname</button>
  <p>Total: {{ items.reduce((total, current) => (total = total + current.price), 0) }}</p>
  <p>Computed Total: {{ total }}</p>
  <p>Method Total: {{ getTotal() }}</p>
  <button @click="items.push({ id: 4, price: 50 })">Add item</button>
  <div>
    <input type="text" v-model="country" />
  </div>

  <template v-for="item in items" :key="item.id">
    <h2 v-if="item.price > 100">{{ item.title }} {{ item.price }}</h2>
  </template>

  <h2 v-for="item in expensiveItems" :key="item.id">{{ item.title }} {{ item.price }}</h2>
</template>
<script>
export default {
  data() {
    return {
      firstName: "Tuan",
      lastName: "Le",
      items: [
        { id: 1, title: "Samsung", price: 150 },
        { id: 2, title: "Apple", price: 200 },
        { id: 3, title: "Xiaomi", price: 100 },
      ],
      country: "",
    };
  },

  methods: {
    getTotal() {
      console.log("method");
      return this.items.reduce((total, current) => (total = total + current.price), 0);
    },

    changeFullname() {
      this.fullName = "Le Tuan";
    },
  },

  computed: {
    // fullName() {
    // return `${this.firstName} ${this.lastName}`;
    // },
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[1];
      },
    },

    total() {
      console.log("computed");
      return this.items.reduce((total, current) => (total = total + current.price), 0);
    },

    expensiveItems() {
      return this.items.filter((item) => item.price > 150);
    },
  },
};
</script>
<style></style>
