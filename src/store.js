import { reactive } from "vue";

export const store = reactive({
  apiKey: "3292c4f8ff63e7d97f35073fedc7863e",
  searchQuery: "",
  moviesArray: [],
  tvSeriesArray: [],
  errorMessage: false,
  castMovieArray: [],
});
