<template lang="html">
  <div v-if="country">
    <h3>{{country.name}}</h3>
    <p>Population: {{country.population}}</p>
    <p>Captial: {{country.capital}}</p>
    <img class="flag" name="flag" :src="country.flag" />
    <h4>Languages: </h4>
    <ul>
      <li v-for="(lang) in country.languages">{{lang.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "country-detail",
  props: ["country"],
};
</script>

<style>
</style>