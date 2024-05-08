<script>
import axios from 'axios';
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

export default {
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
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          // passo i parametri alla chiamata API (chiave e titolo da cercare)
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchQuery
          },
        })
        .then((resp) => {
          // salvo l'oggetto della risposta nello store
          this.store.moviesArray = resp.data.results;
          console.log(this.store.moviesArray);
          // ripulisco il campo di ricerca
          this.store.searchQuery = "";
        });
    },
  },

}
</script>

<template>

  <AppHeader @btnSearchClicked="getSearchResult" />
  <AppMain />

</template>

<style lang="scss"></style>