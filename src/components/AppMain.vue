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
    <div v-for="movie in store.moviesArray">
        <AppCard :cardObj="movie" />

    </div>
</template>

<style scoped lang="scss"></style>