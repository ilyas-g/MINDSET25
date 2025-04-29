<template lang="">
    <section id="schedule-details" className="bg-cover">
    <div className="bg-layer"></div>

        <div>
            <div className="containerr relative-content">
                <div>
                    <h2 className="text-center">Line Up</h2>

                    <div>
                        <div className="text-center more-info">
                                <Game :imgSrc=xko support="Playstation 5" format="Solo" description="Logo de 2xko" />
                                <Game :imgSrc=sf6 support="PC" format="Solo" description="Logo de Street Fighter 6" />
                                <Game :imgSrc=t8 support="Playstation 5" format="Solo" description="Logo de 2xko" />
                                <Game :imgSrc=ggst support="Playstation 4" format="Solo" description="Logo de 2xko" protour="Arc World Tour 2025-2026"/>
                                <Game :imgSrc=gbvsr support="Playstation 5" format="Solo" description="Logo de 2xko" />
                                <Game :imgSrc=ffcotw support="Playstation 5" format="Solo" description="Logo de 2xko" />
                                <Game :imgSrc=ffcotw support="Playstation 5" format="Solo" description="Logo de 2xko" />
                        </div>
                    </div>
                    <!-- <div className="online-events">
                        <div className="text-center pr-5 pl-5 mb-5">
                            <p className="mb-5">L'opportunité pour n'importe quel organisateur de tournoi de contribuer à ce championnat.
                            <br/>Les « online community event » sont des événements ouverts à tous (Français uniquement). Pour soumettre son tournoi en ligne et être éligible, il vous suffit de contacter « FlashNo47 » par mail ou sur le discord MK France. Le NSxC proposera six tournois en ligne. Six autres tournois seront laissés à la disposition d'organisateurs de la communauté pour proposer leur propre tournoi. Les demandes devront être passées entre le 10 octobre 2023 et le 31 décembre 2023.
                            <br/>Les tournois devront avoir lieu entre le 10 Octobre 2023 et le 31 Janvier 2024.</p>
                            <RouterLink to="/rules" className="btn-ope special">Voir le règlement<span className="icon-chevron-down-solid-1" aria-hidden="true"></span></RouterLink>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import AnimateImage from "../animateImage/AnimateImage.vue"

import ethernet from "../../assets/ethernet.webp"
import drapeau from "../../assets/drapeauFR.webp"

import sf6 from '../../assets/games_logos/sf6.png'
import t8 from '../../assets/games_logos/t8.png'
import ggst from '../../assets/games_logos/ggst.png'
import gbvsr from '../../assets/games_logos/gbvsr.png'
import ffcotw from '../../assets/games_logos/ffcotw.png'
import xko from '../../assets/games_logos/2xko.png'

import Game from '@/components/game/Game.vue'


// imagePath() {
//     if (this.image !== '') {
//       return require(`../../assets/games_logos/${image}`);
//     }
//   }
</script>
<style lang="scss">
@use "../../variables";

#schedule-details {
    color: #fff;
    padding: 50px 35px;
    // background-image: url('../../assets/WuAcademyDay_2.webp');
    background-color: black;
    position: relative;

    &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, .5);
}
    .icon-discord-1 {
        font-size: 40px;
    }

    .containerr {
        display: flex;
        flex-direction: column;

        .order-1 {
            order: 1;
        }

        .order-2 {
            order: 2;
        }

        .order-3 {
            order: 3;
        }

        @media screen and (min-width: variables.$media-queries-desktop-xl) {

            flex-direction: row;
            align-items: center;

            .order-1,
            .order-2,
            .order-3 {
                order: unset;
            }

            &>div {
                flex: 1;
            }
        }
    }

    .online-events {
        @media screen and (min-width: variables.$media-queries-desktop-xl) {
            display: flex;
        }
    }

    .more-info {
        flex-wrap: wrap;
        img {
            width: 250px;
        }
        @media screen and (min-width: variables.$media-queries-tablet-small) {

            display: flex;
            justify-content: center;
        }
    }

    .character {
        margin: auto;
        width: 260px;

        @media screen and (min-width: variables.$media-queries-mobile) {
            width: 300px;
        }

        @media screen and (min-width: variables.$media-queries-tablet-small) {
            width: 400px;
        }
    }

    .btn-ope {
        max-width: 350px;
    }

    .streamers {
        display: flex;
        justify-content: space-around;
    }

    .icon-discord,
    .icon-ethernet,
    .icon-flags {
        width: 48px;
    }
}

</style>
