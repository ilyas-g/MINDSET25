<template>
    <div id="contact">
        <div class="close"><span class="icon-xmark-solid" @click="$emit('toggleContact')"></span></div>
        Pour plus d'informations sur le championnat, contactez :
        <br /><a class="mail" :href="`mailto:${mail}`">{{mail}}</a>
        <div class="social">
            Vous pouvez aussi nous joindre sur les réseaux sociaux:
            <a href="https://discord.gg/p5Ubc3r" target="_blank"><span class="icon-discord-1"></span></a>
            <a href="https://twitter.com/MK1_FRANCE" target="_blank"><span class="icon-square-twitter"></span></a>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    mail: string,
}>()
</script>
<style>
@import "./style.scss";
</style>
