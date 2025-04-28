<template>
    <div class="module-border-wrap ml-4 mr-4 mb-4">
    <div class="cardGame">
        <div class="cardGame-head">
            <img :src="imgSrc" :alt="description" className="inline-photo show-on-scroll is-visible" />
        </div>
        <div class="cardGame-body">
            <p v-if="protour!==undefined"><span class="icon-trophy"></span> {{ protour }}</p>
            <p><span class="icon-gamepad"></span> {{ support }}</p>
            <p><span class="icon-user-solid"></span> {{  format }}</p>
        </div>
    </div></div>
</template>
<script setup lang="ts">
import t8 from '../../assets/games_logos/t8.png'
import xko from '../../assets/games_logos/2xko.png'

defineProps<{
  support: string,
  format: string,
  imgSrc: string,
  description: string,
  protour?: string
}>()
</script>
<style lang="scss">
@use "../../variables";
@use "sass:color";

.module-border-wrap {
  background: linear-gradient(to bottom, color.adjust(variables.$main-color, $lightness: -30%), color.adjust(variables.$dark-color, $lightness: 9%), color.adjust(variables.$second-color, $lightness: -30%));
  border-radius: 5px;
  padding: 2px;
}
.cardGame {
    background-color: variables.$dark-color;
    border-radius: 5px;
    width: 350px;
    height: 355px;

    &-head {
        height: 200px;
        padding: 0 20px;
        border-bottom: 1px solid rgb(78, 78, 78);
        display: grid; /* contexte sur le parent */
        place-items: center /* alignement vertical et horizontal des enfants dans leur cellule */

    }

    &-body {
        // background-color: color.adjust(variables.$second-color, $lightness: -30%);
        // border-top: 1px solid white;
        text-transform: uppercase;
        line-height: 1;
        padding: 20px;
        display: flex;

        flex-direction: column;
        align-self: center;

        // p:last-child {margin: 0;}

    }
}

</style>
