<template>
  <div>
    <h2>Select a country</h2>
      <select v-model="selected">
      <option disabled value="">Select an Country</option>
      <option v-for="(selected_country, index) in countries" :value="selected" :key="index">{{selected_country.name}}</option>
    </select>
    <button v-on:click="showCountry()">Lookup Country</button>
    <h2>Click on a country for details</h2>
    <ul>
      <list-item v-for="(country, index) in countries" :country="country" :key="index"></list-item>
    </ul>
  </div>

</template>

<script>
import { eventBus } from "../main.js";
import ListItem from "./ListItem.vue";
export default {
  name: "country-list",
  props: ["countries"],
  components: {
    "list-item": ListItem,
  },
  methods: {
    showCountry() {
      //eventBus.$emit("country-selected", this.country);
      console.log(this.countries);
    },
  },
};
</script>

<style>
</style>