<script>
import { store } from '../store.js'
import AppCard from '../components/AppCard.vue'
export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        };
    },
}
</script>

<template>
    <div class="movie" v-for="movie in store.moviesArray">
        <AppCard :cardObj="movie" />
    </div>
    <div class="tv" v-for="tvSerie in store.tvSeriesArray">
        <AppCard :cardObj="tvSerie" />
    </div>
</template>

<style scoped lang="scss">
// debug
.movie {
    border: 2px solid blue;
}

.tv {
    border: 2px solid red;
}
</style>