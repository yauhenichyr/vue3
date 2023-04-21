<template>
  <section class="movie-details">
    <div class="container">
      <p v-if="moviesLoading">Loading...</p>
      <div v-else class="row">
        <div class="col movie-details__img-col">
          <LazyImg
            className="movie-details__img"
            :src="movie?.posterurl"
            :alt="movie?.title"
          />
        </div>
        <div class="col movie-details__content-col">
          <h2 class="movie-details__title">{{ movie?.title }}</h2>
          <span class="movie-details__year">{{ movie?.imdbRating }}</span>
          <p class="movie-details__genres">{{ genres }}</p>
          <span class="movie-details__year">{{ movie?.year }} year</span>
          <br />
          <span class="movie-details__time">{{ duration }}</span>
          <p class="movie-details__descr">{{ movie?.storyline }}</p>
        </div>
      </div>
    </div>
  </section>
  <ToolBox>Films by {{ genreFilter }} genre</ToolBox>
  <MovieList :movies-list="moviesByGenre" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { Movie } from "@/store/types";
import ToolBox from "./common/ToolBox.vue";
import MovieList from "./common/MovieList.vue";
import LazyImg from "./common/LazyImg.vue";
import { TimeFilter } from "../plugins/TimeFilter";

export default defineComponent({
  name: "MovieDetails",
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    movie(): Movie | null {
      return this.moviesList.find(({ id }) => id == this.id) || null;
    },
    genres(): string {
      return this.movie ? this.movie.genres?.join(" ") : "";
    },
    genreFilter(): string {
      return this.movie ? this.movie.genres[0] : "";
    },
    moviesByGenre(): Movie[] {
      let cnt = 0;
      return this.movie
        ? this.moviesList.filter(({ genres, id }) => {
            if (cnt >= 3 || id === this.movie!.id) {
              return false;
            }

            if (genres.includes(this.genreFilter)) {
              cnt++;
              return true;
            }

            return false;
          })
        : [];
    },
    duration(): string {
      return this.movie ? TimeFilter(this.movie.duration) : "";
    },
  },
  setup() {
    const store = useStore();

    return {
      moviesList: computed(() => store.state.moviesList as Movie[]),
      getMovies: () => store.dispatch("getMovies"),
      moviesLoading: computed(() => store.state.moviesLoading),
    };
  },
  components: {
    ToolBox: ToolBox,
    MovieList: MovieList,
    LazyImg: LazyImg,
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
.movie-details {
  padding: 20px 0;

  &__img {
    width: 100%;

    &-col {
      width: 1 / 3 * 100%;
    }
  }

  &__content-col {
    width: 2 / 3 * 100%;
  }
}
</style>
