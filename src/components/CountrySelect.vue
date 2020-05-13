<template>
  <div>
    <h2>Select a country</h2>
      <select v-model="selectedOption">
      <option disabled value="">Select an Country</option>
      <option v-for="(selected_country, index) in countries" :key="index">{{selected_country.name}}</option>
    </select>
    <p>Testing:</p>
    <ul>
      <list-item v-for="(the_country, index) in country" :key="index" v-if="the_country.name==='Albania'" >{{showCountry()}}</list-item>
    </ul>

  </div>

</template>

<script>
import { eventBus } from "../main.js";
export default {
  name: "country-select",
  props: ["countries", "country"],
  methods: {
    showCountry() {
      return "Hello World";
      //eventBus.$emit("country-selected", this.country);
    },
  },
};
</script>

<style>
</style>