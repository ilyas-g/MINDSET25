<template lang="">
    <section id="schedule" className="bg-fixed bg-cover">
        <div className="bg-layer"></div>

        <div className="container relative-content">
            <div>
                <h2 className="relative-content">Plan d'accès</h2>

                <p className="center-text">La PFL se déroulera du mois de Novembre 2022 à Mai 2023 à l'adresse suivante :</p>

                <p className="center-text">65 Rue Germaine Tillion, 92700 Colombes, France</p>

                <p className="center-text">Transports</p>
                <p className="center-text">Metro 3 Gambetta</p>
            </div>

            <div className="text-center">
                <!-- <p className="master-plus">Le MASTER EVENT + est l'unique événement de sa catégorie. Une étape majeure du championnat qui donnera un avantage considérable dans le classement général.</p> -->
                <div>
                    <div className="text-center more-info">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.051374113094!2d2.252171775966242!3d48.9334632954211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e665dbfc4b5c09%3A0xce609c8318b7871a!2s65%20Rue%20Germaine%20Tillion%2C%2092700%20Colombes!5e0!3m2!1sfr!2sfr!4v1745347940260!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative-content">
            <h3>Hébergement</h3>
            <div class="container">
            <div class="ml-4 mr-4 mb-4">
                <img :src="kopster" alt="de" />
                <p className="text-center">KOPSTER Hotel Residence Paris Ouest Colombes</p>
                <a href="#" target="_blank" className="btn-ope masterEventPlus mx-auto">Plus d'informations</a>
            </div>

            <div class="ml-4 mr-4 mb-4">
                <img :src="kyriad" alt="de" />
                <p className="text-center">Hôtel Kyriad Colombes</p>
                <a href="#" target="_blank" className="btn-ope masterEventPlus mx-auto">Plus d'informations</a>
            </div>

            <div class="ml-4 mr-4 mb-4">
                <img :src="allSuites" alt="de" />
                <p className="text-center">All Suites Appart Hôtel Paris Ouest Colombes</p>
                <a href="#" target="_blank" className="btn-ope masterEventPlus mx-auto">Plus d'informations</a>
            </div>
        </div>
        </div>
<!-- <a href="https://www.start.gg/tournament/paris-games-week-master-event/details" target="_blank" className="btn-ope masterEventPlus mt-5 mx-auto">{t('signup')}</a> -->
    </section>
</template>
<script setup lang="ts">
import kopster from '../../assets/hotel-kopster.jpg'
import allSuites from '../../assets/hotel-all-suites.jpg'
import kyriad from '../../assets/hotel-kyriad.jpg'

</script>
<style lang="scss">
@use "../../variables";
@use "sass:color";

#schedule {
    color: #fff;
    // background-image: url("../../assets/mindset25_bg_section_3.jpg");
    background-color: color.adjust(variables.$second-color, $lightness: -30%);
    padding: 50px 105px;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    // position: relative;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: rgba(0, 0, 0, .3);
    }

    img {width: 300px;   display: block;
        margin: auto;}
    .container {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        // align-items: center;

        @media screen and (min-width: variables.$media-queries-desktop) {
            flex-wrap: nowrap;
            flex-direction: row;
        }

        &>div {
            flex: 1;
        }
    }

    .rules ul li::before {
        content: "▪";
        color: variables.$main-color-hover;
        padding-right: 10px;
    }

    .master-plus {
        text-shadow: 2px 2px 2px #000000;

        @media screen and (min-width: variables.$media-queries-tablet) {
            font-size: 38px;
        }
    }

    .btn-ope {
        max-width: 350px;
        display: block;

        &.masterEventPlus {
            background: linear-gradient(90deg, rgba(205, 57, 66, 1) 0%, rgba(239, 212, 98, 1) 50%, rgba(205, 57, 66, 1) 100%);
            border: 3px solid #fff5e1;
            border-radius: 0%;
            // padding: 0.6em 1.2em;
            text-shadow: 1px 1px 1px #322921;

            &:active,
            &:focus,
            &:hover {
                cursor: pointer;
                // max-width: 400px;
                // padding: 19px;
                color: #fff;
                box-shadow: 0 0 60px rgb(242 150 39 / 60%);
            }
        }
    }

    .logo {
        width: 100%;
    }
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

</style>
