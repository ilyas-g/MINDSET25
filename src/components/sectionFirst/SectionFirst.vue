<template>
    <section id="home-section" className="bg-fixed bg-cover dark-section">
        <video :src="videoBg" autoPlay loop muted />
        <div className="content-video">
            <div className="bg-overlay bg-layer"></div>
            <div className="home-content">
                <div>
                    <div id="ope-logo" className="mb-4">
                        <img :src="MK1Logo" alt="Logo Mortal Kombat 1" />
                    </div>
                    <div className="home-event-date">
                        Championnat de France
                    </div>
                    <div className="home-event-buttons">
                        <a href="/#event-section" className="btn-ope">Présentation <span className="icon-chevron-down-solid-1"></span></a>
                        <a href="/#tournaments" className="btn-ope special">Tournois <span className="icon-chevron-down-solid-1" aria-hidden="true"></span></a>
                        <button className="btn-ope video btf-btn" @click="$emit('toggleModal')">Voir le trailer</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import MK1Logo from '../../assets/mk1-logo.webp'
import videoBg from '../../assets/mkchampionshipvideo.mp4'
</script>
<style lang="scss">
@import "../../variables";

#home-section {
    // background-image: url('../../assets/001.jpg');
    // background-image: url('https://img.freepik.com/photos-premium/fond-abstrait-vague-blanche-fond-ecran-graphique-blanc-minimal-illustration-2d_67092-1294.jpg?w=2000');
    overflow: hidden;

    // .bg-layer {
    //     height: 98%;
    // }
}

.dark-section {
    background-color: #000;
    color: #fff;
}

.home-content {
    max-width: 750px;
    margin: auto;
    padding: 0 15px;
    z-index: 10;
    position: relative;
    text-align: center;

    .content {
        position: absolute;
        top: 50%;
        transform: translateY(50%);
    }
}

#ope-logo {
    img {
        display: block;
        margin: 0 auto;
        max-width: 650px;
        width: 100%;
    }
}

.home-content #ope-logo img {
    transition: all 2s ease 1s;
}

.home-event-date {
    font-size: 46px;
    text-transform: uppercase;
    margin-bottom: 15px;
    position: relative;
    text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, .8);

    &::after,
    &::before {
        content: "";
        display: block;
        height: 1px;
        background: #fff;
        width: 150px;
        position: absolute;
        top: 50%;
        margin-top: -1px;
    }

    &::before {
        left: -50px;
        background: linear-gradient(to left, #fff 0, rgba(255, 255, 255, 0) 100%);
    }

    &::after {
        right: -50px;
        background: linear-gradient(to right, #fff 0, rgba(255, 255, 255, 0) 100%);
    }
}

.home-event-address {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 30px;

    @media only screen and (max-width: $media-queries-tablet) {
        margin-bottom: 10px;

    }
}

.home-event-buttons {

    @media only screen and (max-width: $media-queries-tablet) {
        display: flex;
        flex-wrap: wrap;

        a {
            margin: 0 auto 20px;
            display: block;
        }
    }

    @media only screen and (max-width: $media-queries-desktop) {
        display: block;
    }

    a:first-child {
        margin-bottom: 20px;
        margin-right: auto;

        @media only screen and (min-width: $media-queries-tablet) {
            margin-right: 50px;
        }
    }
}

.btn-ope {
    display: inline-block;
    background: rgba(0, 0, 0, .5);
    color: #fff;
    border: 3px solid #d99a2b;
    max-width: 300px;
    width: 100%;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    padding: 10px 15px;
    text-align: center;
    transition: all .25s ease 0s;

    &:active,
    &:focus,
    &:hover {
        border: 3px solid #ffc029;
        color: #fff;
    }

    span {
        display: inline-block;
        width: 1px;
        overflow: hidden;
        opacity: 0;
        color: #fff;
        transition: all .25s ease 0s;
        font-size: 17px;
    }

    &:hover span {
        margin-left: 15px;
        opacity: 1;
        width: auto;
    }

    &.special {
        background-color: #d99a2b;

        &:active,
        &:focus,
        &:hover {
            background-color: #ffc029;
        }
    }

    &.video {
        background: linear-gradient(90deg, #7a3d01 10%, #d89704 48%, #d89704 52%, #7a3d01 90%);
        border: 3px solid #fff5e1;
        border-radius: 0%;
        padding: 0.6em 1em;

        &:active,
        &:focus,
        &:hover {
            cursor: pointer;
            max-width: 310px;
            padding: 19px;
            color: #fff;
            box-shadow: 0 0 60px rgb(242 150 39 / 60%);
        }
    }

}

a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none;
}

video {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
}

.content-video {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
}

// padding: 0.6em 1.2em;
// hover : padding 15

</style>
