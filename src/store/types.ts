export type Movie = {
  id: number;
  title: string;
  genres: string[];
  year: string;
  posterurl: string;
  storyline: string;
  imdbRating: number;
  duration: string;
  releaseDate: string;
  actors: string[];
  ratings: number[];
  poster: string;
  contentRating: string;
  averageRating: number;
};

export enum SortingType {
  RELEASE_DATE = "RELEASE_DATE",
  RATING = "RATING",
}

export enum SearchOptions {
  TITLE = "TITLE",
  GENRE = "GENRE",
}
