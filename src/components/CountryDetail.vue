<template lang="html">
  <div v-if="country">
    <h3>{{country.name}}</h3>
    <p>Population: {{country.population}}</p>
    <p>Captial: {{country.capital}}</p>
  </div>
</template>

<script>
export default {
  name: "country-detail",
  props: ["country"]
};
</script>

<style>
</style>