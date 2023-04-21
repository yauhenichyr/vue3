<template>
  <p class="not-found__text">404 Not found</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFound",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.not-found__text {
  margin: 20px 0;
  text-align: center;
  font-size: 30px;
}
</style>
