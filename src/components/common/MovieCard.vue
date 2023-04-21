<template>
  <div class="movie-card">
    <router-link :to="link">
      <LazyImg
        :src="movie?.posterurl"
        :alt="movie?.title"
        className="movie-card__img"
      />
    </router-link>
    <p class="movie-card__title">{{ movie?.title }}</p>
    <p class="movie-card__year">{{ movie?.year }}</p>
    <p class="movie-card__genres">{{ genres }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Movie } from "../../store/types";
import LazyImg from "./LazyImg.vue";

export default defineComponent({
  name: "MovieCard",
  props: {
    movie: Object as PropType<Movie>,
  },
  computed: {
    genres() {
      return this.movie?.genres.join(" ");
    },
    link(): string {
      return `/movie/${this.movie?.id}`;
    },
  },
  components: {
    LazyImg: LazyImg,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.movie-card {
  &__img {
    display: block;
    width: 100%;
  }
}
</style>
