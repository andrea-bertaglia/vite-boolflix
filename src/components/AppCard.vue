<script>


export default {
    props: {
        cardObj: Object,
    },
}
</script>

<template>
    <div class="card">
        <ul>
            <li>Titolo: {{ cardObj.title }}</li>
            <li>Titolo originale: {{ cardObj.original_title }}</li>
            <li>Lingua: {{ cardObj.original_language }}</li>
            <li>Voto: {{ cardObj.vote_average }}</li>

        </ul>
    </div>
</template>

<style scoped lang="scss"></style>