<template>
    <div>
        <h1>Countries</h1>
        <div class="main-container">
            <country-list :countries="countries"></country-list>
            <country-detail :country="selectedCountry"></country-detail>
            <country-select :countries="countries"></country-select>
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
h1 {
  text-align: center;
  padding: 1rem;
}
.main-container {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
}
ul {
  list-style: none;
}
.flag {
  width: 50px;
  height: 30px;
}
</style>