<template>
  <SearchPanel />
  <HomeMovieList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchPanel from "@/components/SearchPanel.vue";
import HomeMovieList from "@/components/HomeMovieList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    SearchPanel,
    HomeMovieList,
  },
});
</script>
