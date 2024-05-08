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
            <li>Titolo: {{ cardObj.title }}</li>
            <li>Titolo originale: {{ cardObj.original_title }}</li>
            <li> Lingua: {{ getFlagIcon(cardObj.original_language) }}</li>
            <li>Voto: {{ cardObj.vote_average }}</li>

        </ul>
    </div>
</template>

<style scoped lang="scss"></style>