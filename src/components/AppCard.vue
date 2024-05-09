<script>


export default {
    props: {
        cardObj: Object,
    },
    data() {
        return {
            flagArray: [
                {
                    country: "it",
                    flagIcon: "🇮🇹"
                },
                {
                    country: "en",
                    flagIcon: "🇬🇧"
                },
                {
                    country: "fr",
                    flagIcon: "🇫🇷"
                },
                {
                    country: "ja",
                    flagIcon: "🇯🇵"
                },
                {
                    country: "pt",
                    flagIcon: "🇵🇹"
                },
                {
                    country: "zh",
                    flagIcon: "🇨🇳"
                },
            ],
        };
    },
    methods: {
        getFlagIcon(checkFlag) {
            for (let i = 0; i < this.flagArray.length; i++) {
                if (checkFlag === this.flagArray[i].country) {
                    return this.flagArray[i].flagIcon;
                }
            }
            return checkFlag;
        }
    },
}
</script>

<template>
    <div class="card">
        <ul>
            <li>
                <img v-if="cardObj.poster_path === null"
                    src="https://placehold.co/342x513?text=Immagine+non+disponibile" alt="Immagine non disponibile">
                <img v-else :src="`https://image.tmdb.org/t/p/w342/${cardObj.poster_path}`"
                    :alt="`Poster di ${cardObj.title || cardObj.name}`">
            </li>
            <li>Titolo: {{ cardObj.title || cardObj.name }}</li>
            <li>Titolo originale: {{ cardObj.original_title || cardObj.original_name }}</li>
            <li> Lingua: {{ getFlagIcon(cardObj.original_language) }}</li>
            <li>Voto: {{ cardObj.vote_average }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss"></style>
