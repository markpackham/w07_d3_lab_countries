<template>
    <div>
        <h1>Countries</h1>
        <div class="main-container">
          <country-select :countries="countries"></country-select>
            <country-list :countries="countries"></country-list>
            <country-detail :country="selectedCountry"></country-detail>
        </div>
    </div>
</template>

<script>
import { eventBus } from "./main.js";
import CountryList from "./components/CountryList.vue";
import CountryDetail from "./components/CountryDetail.vue";
import CountrySelect from "./components/CountrySelect";

export default {
  name: "app",
  data() {
    return {
      countries: [],
      selectedCountry: null,
    };
  },
  mounted() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(countries => (this.countries = countries));

    eventBus.$on("country-selected", country => {
      this.selectedCountry = country;
    });
  },
  components: {
    "country-list": CountryList,
    "country-detail": CountryDetail,
    "country-select": CountrySelect,
  },
};
</script>

<style>
.main-container {
  display: flex;
  justify-content: space-between;
}
ul {
  list-style: none;
}
</style>

body > div > div > div:nth-child(1) > ul > li:nth-child(1)