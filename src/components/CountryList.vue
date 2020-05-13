<template>
  <div>
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
};
</script>

<style>
</style>