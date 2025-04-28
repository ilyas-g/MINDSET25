<template>
    <section id="event-section" className="black-section">
        <div className="orange bg-fixed bg-layer"></div>
        <div className="container relative-content align-center">
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/O-LQ8i3BcHE?si=M4OsYH9pzDRcZRZr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <!-- <img :src="mkclogo" alt="Logo du Championnat de France de Mortal Kombat" className="inline-photo show-on-scroll is-visible" /> -->
            </div>
            <div className="vertical-align-container">
                <div className="event-description vertical-align-content">
                    <h2 className="text-center">C'EST DANS NOTRE SANG !</h2>
                    <p className="text-center">Une nouvelle ère démarre : l'ère du rassemblement !<br />
                        Le NSxC, soutenu par Warner Bros Games France, a le plaisir de vous annoncer:<br />
                        Le Championnat de France Mortal Kombat !</p>
                    <p className="text-center">Une aventure communautaire par la communauté et pour tous les amoureux de la licence.</p>
                    <p className="text-center">A l'initiative de Normann « FlashNo47 », soutenu par l'un des ambassadeurs émérites de la communauté, Elfrid « RZA », ainsi que de nombreux acteurs de la FGC tels que YUZU GAMING & SPRNTD, le championnat de France a pour objectif de rassembler les meilleurs combattants de l’Earthrealm français autour d’un championnat et de désigner qui sera notre grand Champion.</p>
                    <p className="text-center">Un championnat exclusif français avec près de 10000€ de Cash Prize à gagner sur l'ensemble du Championnat.</p>
                    <p className="text-center">Qui sera notre Ultime Champion ?</p>
                </div>
            </div>
        </div>
        <div className="bg-gradient-transparent bg-layer"></div>
    </section>
</template>
<script setup lang="ts">
import mkclogo from '../../assets/ChampionshipMK_LOGO2023_V2-2k.webp'

</script>
<style lang="scss">
@use "../../variables";

#event-section {
    background-image: url("../../assets/mindset25_bg_section_2.jpg");
    background-size: cover;
    position: relative;

    h2 {
        margin-bottom: 10px;
    }

    iframe {
        display: none;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        @media screen and (min-width: variables.$media-queries-desktop) {
            flex-wrap: nowrap;
            flex-direction: row;
        }

        @media screen and (min-width: variables.$media-queries-desktop-xl) {
            iframe {
                display: block;
            }
        }
    }

    .align-center {
        align-items: center
    }

    img:first-child {
        width: 100%;

        @media screen and (min-width: variables.$media-queries-mobile-small) {
            margin: auto;
        }

        @media screen and (min-width: variables.$media-queries-tablet) {
            padding: 0 85px;
        }

        @media screen and (min-width: variables.$media-queries-desktop) {
            margin: initial;
            padding: 0;
        }
    }
}

</style>
