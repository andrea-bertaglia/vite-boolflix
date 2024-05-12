<script>
import axios from 'axios';
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
  created() {
    this.getGenres("movie");
    this.getGenres("tv");
  },
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getSearchResult() {
      if (this.store.searchQuery !== "") {
        axios
          .get('https://api.themoviedb.org/3/search/movie', {
            // ricerca film: passo i parametri alla chiamata API (chiave e titolo da cercare)
            params: {
              api_key: this.store.apiKey,
              language: "it_IT",
              query: this.store.searchQuery
            },
          })
          .then((resp) => {
            // salvo l'oggetto della risposta nell'array movie
            this.store.moviesArray = resp.data.results;
            console.log(this.store.moviesArray);
            // ripulisco il campo di ricerca
            // this.store.searchQuery = "";
          });
        axios
          .get('https://api.themoviedb.org/3/search/tv', {
            // ricerca serie tv: passo i parametri alla chiamata API (chiave e titolo da cercare)
            params: {
              api_key: this.store.apiKey,
              language: "it_IT",
              query: this.store.searchQuery
            },
          })
          .then((resp) => {
            // salvo l'oggetto della risposta nell'array tv series
            this.store.tvSeriesArray = resp.data.results;
            console.log(this.store.tvSeriesArray);
            // ripulisco il campo di ricerca
            this.store.searchQuery = "";
            this.store.errorMessage = false
          })
      }
      else {
        this.store.errorMessage = true
      }
    },
    getGenres(param) {
      axios
        .get(`https://api.themoviedb.org/3/genre/${param}/list`, {
          params: { api_key: this.store.apiKey },
        })
        .then((resp) => {
          if (param === "movie") {
            this.store.movieGenres = resp.data.genres;
            console.log("array di generi movie", resp.data.genres);
          } else {
            this.store.tvGenres = resp.data.genres;
            console.log("array di generi tv", resp.data.genres);
          }
        });
    },
  },

}
</script>

<template>

  <AppHeader @enterQuery="getSearchResult" />
  <AppMain />

</template>

<style lang="scss"></style>