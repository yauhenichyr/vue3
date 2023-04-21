<template>
  <section class="movie-list">
    <div class="container">
      <p v-if="loading" class="movie-list__loading">Loading...</p>
      <div v-else class="row">
        <div
          class="col movie-list__item"
          v-for="movie in sortedMoviesList"
          :key="movie.id"
        >
          <Movie :movie="movie" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
import { Movie, SortingType } from "@/store/types";
import MovieCard from "./MovieCard.vue";

export default defineComponent({
  name: "MovieList",
  props: {
    moviesList: {
      type: Array as PropType<Movie[]>,
    },
    sorting: {
      type: String as PropType<SortingType>,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data(props) {
    return {
      sortedMoviesList: computed(() => {
        return props.sorting
          ? props.moviesList?.sort((a, b) => {
              switch (props.sorting) {
                case SortingType.RATING: {
                  return a.imdbRating - b.imdbRating;
                }
                case SortingType.RELEASE_DATE: {
                  return Number(a.year) - Number(b.year);
                }
                default: {
                  return 0;
                }
              }
            })
          : props.moviesList;
      }),
    };
  },
  components: {
    Movie: MovieCard,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-list {
  padding: 20px 0 4px;

  &__item {
    width: 1 / 3 * 100%;
    margin-bottom: 16px;
  }

  &__loading {
    text-align: center;
    font-size: 24px;
    margin: 30px 0;
  }
}
</style>
