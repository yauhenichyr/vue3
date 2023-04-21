<template>
  <footer class="footer-section">
    <div class="container">
      <p class="footer-section__title">{{ title }}</p>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store";

export default defineComponent({
  name: "FooterSection",
  computed: {
    title() {
      return store.state.title;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer-section {
  padding: 20px 0;
  background-color: #555555;

  &__title {
    text-align: center;
    color: #f65261;
    font-size: 20px;
    margin: 0;
  }
}
</style>
