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
    <main class="bg-secondary vh-100">
        <section class="bg-secondary v-100 container-fluid py-4">
            <div class="row">
                <div class="col">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 movie" v-for="movie in store.moviesArray">
                            <AppCard :cardObj="movie" />
                        </div>
                        <div class="col-sm-6 col-md-4 tv" v-for="tvSerie in store.tvSeriesArray">
                            <AppCard :cardObj="tvSerie" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>



</template>

<style scoped lang="scss"></style>