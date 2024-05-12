<script>
import axios from 'axios';
import { store } from '../store';

export default {

    props: {
        cardObj: Object,
        typeOfElem: String,
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
            store,
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
        },
        getCast(id) {

            console.log(this.typeOfElem);

            axios
                .get(`https://api.themoviedb.org/3/${this.typeOfElem}/${id}/credits`, {
                    params: { api_key: this.store.apiKey },
                })
                .then((resp) => {
                    this.store.castTotalArray = resp.data.cast;
                    console.log("CREAZIONE ARRAY CAST CON ID", this.store.castTotalArray);
                })



        },


    },
}    
</script>

<template>
    <div class="card-flip">
        <!-- card front -->
        <div @mouseover="getCast(cardObj.id)" class="card frontside border rounded-0 border-secondary-subtle">
            <img v-if="cardObj.poster_path === null" src="https://placehold.co/342x513?text=Immagine+non+disponibile"
                alt="Immagine non disponibile">
            <img v-else :src="`https://image.tmdb.org/t/p/w342/${cardObj.poster_path}`"
                :alt="`Poster di ${cardObj.title || cardObj.name}`">
        </div>
        <!-- /card front -->
        <!-- card back -->
        <ul
            class="card list-unstyled backside bg-dark border rounded-0 border-secondary-subtle bg-dark text-white p-4 gap-2">
            <li class="fw-bold">Titolo: <span class="fw-light">
                    {{ cardObj.title || cardObj.name }}
                </span></li>
            <li class="fw-bold">Titolo originale: <span class="fw-light">
                    {{ cardObj.original_title || cardObj.original_name }}
                </span>
            </li>
            <li class="fw-bold"> Lingua: <span class="fw-light">{{ getFlagIcon(cardObj.original_language)
                    }}</span>
            </li>
            <li class="fw-bold" v-if="cardObj.vote_average !== 0">
                Voto: <span class="text-warning" v-for="i in getEvaluation(cardObj.vote_average)">
                    <i class="fa-solid fa-star"></i>
                </span>
                <span class="text-warning" v-for="i in (5 - getEvaluation(cardObj.vote_average))">
                    <i class="fa-regular fa-star"></i>
                </span>
            </li>
            <li class="fw-bold" v-else> Voto:
                <span class="fw-light fst-italic">n/a</span>
            </li>
            <li class="fw-bold">Overview:
                <span v-if="cardObj.overview !== ''" class="fw-light">
                    <div class="overview-text">
                        {{ cardObj.overview }}
                    </div>
                </span>
                <span v-else class="fw-light fst-italic">n/a</span>
            </li>
            <li class="fw-bold">Cast:
                <div class="fw-light">
                    <span v-for="(curElem, index) in this.store.castTotalArray.slice(0, 5)"> {{ curElem.name }}<span
                            v-if="index !== 4">{{ ", " }}</span></span v-else>{{ "." }}<span></span>
                </div>
            </li>
        </ul>
        <!-- /card back -->
    </div>
</template>

<style scoped lang="scss">
.card-flip {

    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -ms-transition: 1s;
    -moz-transition: 1s;
    -moz-transform: perspective(1000px);
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
    position: relative;

    &:hover,
    &.hover {
        .backside {
            -webkit-transform: rotateY(0deg);
            -moz-transform: rotateY(0deg);
            -o-transform: rotateY(0deg);
            -ms-transform: rotateY(0deg);
            transform: rotateY(0deg);
            border-radius: .25rem;
        }

        .frontside {
            -webkit-transform: rotateY(180deg);
            -moz-transform: rotateY(180deg);
            -o-transform: rotateY(180deg);
            transform: rotateY(180deg);
        }
    }


}

.mainflip {}

.frontside {
    position: relative;
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    z-index: 2;
    margin-bottom: 30px;
}

.backside {
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    transform: rotateY(-180deg);
    -webkit-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    -moz-box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    box-shadow: 5px 7px 9px -4px rgb(158, 158, 158);
    max-height: 100%;

    .overview-text {
        max-height: 100px;
        overflow-y: auto;
        font-size: .8rem;
    }
}

.frontside,
.backside {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-transition: 1s;
    -webkit-transform-style: preserve-3d;
    -moz-transition: 1s;
    -moz-transform-style: preserve-3d;
    -o-transition: 1s;
    -o-transform-style: preserve-3d;
    -ms-transition: 1s;
    -ms-transform-style: preserve-3d;
    transition: 1s;
    transform-style: preserve-3d;
    min-height: 100%;
    min-width: 100%;
}
</style>
