<template lang="html">
  <div v-if="country">
 <p>Hello World</p>
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