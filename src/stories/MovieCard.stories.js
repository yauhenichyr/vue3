import MovieCard from "../components/common/MovieCard.vue";
import { mockedMovies } from "../store/mockedMovies";

export default {
  title: "MovieCard",
};

export const withJSX = () => ({
  render() {
    return <MovieCard movie={mockedMovies[0]} />;
  },
});
