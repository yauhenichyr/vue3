<template>
  <ToolBox>
    <div class="row align-center space-between">
      <div class="col">
        <p class="home-movie-list__counter">
          {{ moviesFiltered.length }} movies found
        </p>
      </div>
      <div class="col">
        <SortType
          title="Sort by"
          :options="sortOptions"
          :value="currentSorting"
          :on-change="setCurrentSorting"
        />
      </div>
    </div>
  </ToolBox>
  <MovieList
    :movies-list="moviesFiltered"
    :sorting="currentSorting"
    :loading="moviesLoading"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { SortingType } from "@/store/types";
import RadioGroup from "@/components/common/RadioGroup.vue";
import ToolBox from "@/components/common/ToolBox.vue";
import MovieList from "@/components/common/MovieList.vue";

export default defineComponent({
  name: "HomeMovieList",
  props: {
    isHomePage: Boolean,
  },
  setup() {
    const store = useStore();

    return {
      getMovies: () => store.dispatch("getMovies"),
      moviesLoading: computed(() => store.state.moviesLoading),
      moviesList: computed(() => store.state.moviesList),
      moviesFiltered: computed(() => store.state.moviesFiltered),
      currentSorting: computed(() => store.state.currentSorting),
      setCurrentSorting: (option: SortingType) => {
        store.dispatch("setCurrentSorting", option);
      },
    };
  },
  data() {
    return {
      sortOptions: [
        { label: "Release date", value: SortingType.RELEASE_DATE },
        { label: "Rating", value: SortingType.RATING },
      ],
    };
  },
  components: {
    SortType: RadioGroup,
    ToolBox: ToolBox,
    MovieList: MovieList,
  },
  mounted() {
    if (!this.moviesList.length) {
      this.getMovies();
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-movie-list {
  &__counter {
    margin: 0;
  }
}
</style>
