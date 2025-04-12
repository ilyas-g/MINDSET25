<template>
    <img class="character" :src=character />
</template>
<script setup lang="ts">
import character from '../../assets/raiden.webp'

</script>
<style lang="scss">
@import "../../variables";
    .character {
        margin: auto;
        width: 260px;

        @media screen and (min-width: $media-queries-mobile) {
            width: 300px;
        }

        @media screen and (min-width: $media-queries-tablet-small) {
            width: 400px;
        }
    }
</style>
