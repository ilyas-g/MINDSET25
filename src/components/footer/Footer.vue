<template lang="">
    <footer id="footer">
        <div>
            <div className="container">

                <ul className="footer-nav mb-4">
                    <li><a href="/#event-section">Présentation</a>
                    </li>
                    <li><a href="/#schedule">Étapes</a>
                    </li>
                    <li><a href="/#tournaments">Tournois</a>
                    </li>
                    <li @click="$emit('toggleContact')">Contact</li>
                    <li @click="$emit('toggleClassement')">Classement</li>
                </ul>

                <div>
                    <div className="follow-us">
                        <h4 className="text-center">Suivez NSXC</h4>
                        <p className="text-center">
                            <a href="https://twitter.com/_NSxC" target="_blank" className="ml-1 mr-1" aria-label="Twitter NSxC"><span className="icon-square-twitter"></span></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-credits">
            MINDSET © <a href="#" target="_blank">NSXC</a> - 
            Site conçu et réalisé par <a href="https://twitter.com/iamarktall" target="_blank">Arktall
                (@iamarktall)</a>
        </div>
    </footer>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NSXCLogo from '@/assets/NSXC_BLANC2.webp'
import YuzuLogo from '@/assets/logo-yuzu-gamingT2.webp'

</script>
<style lang="scss">
@use "../../variables";

#footer {
    color: #fff;
    padding: 50px 20px;
    border-top: 30px solid #ffc029;
    background: url("../../assets/00663.webp") no-repeat #000 fixed;
    background-size: cover;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, .5);
    display: block;

    .h4,
    h4 {
        font-size: 1.2rem;

        @media screen and (min-width: variables.$media-queries-tablet) {

            font-size: 1.5rem;
        }
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        @media screen and (min-width: variables.$media-queries-desktop) {
            flex-wrap: nowrap;
            flex-direction: row;
        }
    }

    .footer-nav {
        font-size: 24px;
        text-transform: uppercase;


        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        li {
            margin-bottom: 0;
            padding: 0 15px;

            &:hover {
                cursor: pointer;
                color: #d99a2b;
            }
        }

        @media screen and (min-width: variables.$media-queries-tablet) {
            display: unset;

            li {
                margin-bottom: 10px;
            }
        }
    }

    .follow-us {
        img {
            width: 180px;
        }

        span {
            font-size: 48px;
            display: inline-block;
            margin-right: 10px;
        }
    }

    .footer-credits {
        margin: 30px auto 0;
        padding: 15px;
        text-align: center;
        border-top: 1px solid #fff;
        font-size: 18px;

        a {
            color: #d99a2b;
        }
    }
}

</style>
