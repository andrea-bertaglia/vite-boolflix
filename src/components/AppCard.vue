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
        },
        getEvaluation(avgVote) {
            avgVote = Math.ceil((avgVote * 5) / 10);
            return avgVote;
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
            <li>
                <div v-if="cardObj.vote_average !== 0">
                    Voto: <span v-for="i in getEvaluation(cardObj.vote_average)">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="i in (5 - getEvaluation(cardObj.vote_average))">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>
                <div v-else>
                    <span class="fst-italic">punteggio non disponibile</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss"></style>
