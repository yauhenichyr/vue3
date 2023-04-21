<template>
  <MovieDetails />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MovieDetails from "@/components/MovieDetails.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MovieDetails,
  },
});
</script>
