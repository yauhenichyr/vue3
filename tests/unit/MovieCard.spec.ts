import { mount } from "@vue/test-utils";
import MovieCard from "@/components/common/MovieCard.vue";
import { mockedMovies } from "@/store/mockedMovies";

const movie = mockedMovies[0];

describe("MovieCard.vue", () => {
  it("rendered properly", () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie,
      },
    });

    const title = wrapper.find(".movie-card__title");
    const year = wrapper.find(".movie-card__year");
    const genres = wrapper.find(".movie-card__genres");
    expect(title.text()).toMatch(movie.title);
    expect(year.text()).toMatch(movie.year.toString());
    expect(genres.text()).toMatch(movie.genres.join(" "));
  });
});
