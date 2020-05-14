<template>
  <div>
    <h2>Select a country</h2>
      <select v-model="selectedOption">
      <option disabled value="">Select an Country</option>
      <option v-for="(country, index) in countries" :country="country.name" :key="index">{{country.name}}</option>
    </select>
  <ul>
    <li v-for="(country, index) in countries" :country="country.name" :key="index" v-if="country.name === 'Albania' ">
    <h4>{{country.name}}</h4>
    <p>Pop {{country.population}} - Captial: {{country.capital}}</p>
    </li>
  </ul>
 </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  name: "country-select",
  props: ["countries"],
  methods: {},
};
</script>

<style>
</style>