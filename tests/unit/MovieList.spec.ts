import { mount } from "@vue/test-utils";
import MovieList from "@/components/common/MovieList.vue";
import { mockedMovies } from "@/store/mockedMovies";
import { SortingType } from "@/store/types";

describe("MovieList.vue", () => {
  it("movie cards rendered and sorted", () => {
    const wrapper = mount(MovieList, {
      props: {
        moviesList: mockedMovies,
        sorting: SortingType.RATING,
      },
    });

    const movieCards = wrapper.findAll(".movie-list__item");
    expect(movieCards.length).toBe(6);
    expect(movieCards[0].find(".movie-card__title").text()).toMatch("t6");
  });
});
