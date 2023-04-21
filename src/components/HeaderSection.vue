<template>
  <header class="header-section">
    <div class="container">
      <div class="row space-between align-center">
        <div class="col">
          <router-link v-if="!isHomePage" to="/" class="header-section__link">
            <h1 class="header-section__title">{{ title }}</h1>
          </router-link>
          <h1 v-else class="header-section__title">{{ title }}</h1>
        </div>
        <div class="col" v-if="!isHomePage">
          <router-link to="/"><Button size="sm">Search</Button></router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "../store";
import Button from "@/components/common/ButtonDefault.vue";

export default defineComponent({
  name: "HeaderSection",
  props: {
    isHomePage: Boolean,
  },
  computed: {
    title() {
      return store.state.title;
    },
  },
  components: {
    Button: Button,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header-section {
  padding: 16px 0;

  &__title {
    margin: 0;
    color: #f65261;
  }

  &__link {
    color: inherit;
    text-decoration: none;
  }
}
</style>
