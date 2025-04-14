<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import Contact from './components/contactBlock/ContactBlock.vue'

</script>

<template>
  <Header />
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
  <Footer @toggle-contact="toggleContact(true)" @toggle-classement="toggleClassement(true)" />
  <template v-if="isContact === true">
    <Contact mail="flashno47@gmail.com" @toggle-contact="toggleContact(false)" />
  </template>
</template>

<style lang="scss">
@use './_section.scss';
@import './App.css';
</style>
