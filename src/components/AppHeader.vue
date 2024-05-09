<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <header class="py-3">
        <div class="header-logo">
            <span>BOOLFLIX</span>
        </div>
        <div class="header-search">
            <!-- input salvato nello store -->
            <input type="text" placeholder="Cosa vuoi cercare?" v-model="store.searchQuery"
                @keyup.enter="$emit('btnSearchClicked')">
            <!-- emit per collegare l'ascolto del click all'avvio della funzione getSearchResult -->
            <button @click="$emit('btnSearchClicked')">Cerca</button>
        </div>
    </header>
</template>

<style scoped lang="scss"></style>