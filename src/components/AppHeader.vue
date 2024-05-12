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
    <header class="py-3 bg-dark container-fluid d-flex justify-content-between align-items-center">
        <div class="header-logo pt-3">
            <span class="text-danger fw-bold fs-2">BOOLFLIX</span>
        </div>
        <div v-if="this.store.errorMessage" class="error-message text-danger fst-italic pt-3">Attenzione: digita la
            parola chiave da cercare</div>
        <div class="header-search pt-3">
            <!-- input salvato nello store -->
            <!-- emit per collegare l'ascolto dell'enter all'avvio della funzione getSearchResult -->
            <input type="text" placeholder="Cosa vuoi cercare?" v-model="store.searchQuery"
                @keyup.enter="$emit('enterQuery')">
            <!-- <button @click="$emit('enterQuery')">Cerca</button> -->
        </div>
    </header>
</template>

<style scoped lang="scss"></style>