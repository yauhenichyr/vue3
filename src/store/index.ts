import { createStore } from "vuex";
import { SortingType, SearchOptions, Movie } from "./types";
import API from "@/api/Api";

interface State {
  title: string;
  moviesLoading: boolean;
  moviesList: Movie[];
  moviesFiltered: Movie[];
  searchQueryStr: string;
  searchOption: SearchOptions;
  currentSorting: SortingType;
}

export default createStore<State>({
  state: {
    title: "netflixroulette",
    moviesList: [],
    moviesFiltered: [],
    searchQueryStr: "",
    searchOption: SearchOptions.TITLE,
    currentSorting: SortingType.RELEASE_DATE,
    moviesLoading: false,
  },
  getters: {},
  mutations: {
    searchMovies(state) {
      const { searchOption, moviesList, searchQueryStr } = state;

      if (!searchQueryStr) {
        state.moviesFiltered = [...moviesList];
        return;
      }

      state.moviesFiltered = moviesList.filter(({ title, genres }) => {
        switch (searchOption) {
          case SearchOptions.TITLE: {
            return title.toLowerCase().includes(searchQueryStr.toLowerCase());
          }
          case SearchOptions.GENRE: {
            return genres.some((genre) =>
              genre.toLowerCase().includes(searchQueryStr.toLowerCase())
            );
          }
          default: {
            return true;
          }
        }
      });
    },
    setSearchQueryStr(state, query: string) {
      state.searchQueryStr = query;
    },
    setSearchOption(state, option: SearchOptions) {
      state.searchOption = option;
    },
    setCurrentSorting(state, option: SortingType) {
      state.currentSorting = option;
    },
    setMoviesLoading(state, isLoading: boolean) {
      state.moviesLoading = isLoading;
    },
    setMovies(state, movies: Movie[]) {
      state.moviesList = movies;
      state.moviesFiltered = movies;
    },
  },
  actions: {
    searchMovies({ commit }) {
      commit("searchMovies");
    },
    setSearchQueryStr({ commit }, query: string) {
      commit("setSearchQueryStr", query);
    },
    setSearchOption({ commit }, option: SearchOptions) {
      commit("setSearchOption", option);
    },
    setCurrentSorting({ commit }, option: SearchOptions) {
      commit("setCurrentSorting", option);
    },
    async getMovies({ commit }) {
      commit("setMoviesLoading", true);
      const movies: Movie[] = await API.getMovies();
      commit("setMovies", movies);
      commit("setMoviesLoading", false);
    },
  },
  modules: {},
});
