<template>
		<header className="header">
			<div className="logo-header">
				<router-link to="/">
					<img className="logo" :src="nsxcLogo" alt="NSXC" />
				</router-link>
			</div>

			<div class="responsive-menu-opener show-responsive-992">
				<span>
					<template v-if="isBurger === true">
						<span class="icon-xmark-solid" @click="toggleBurger(false)"></span>
					</template>
					<template v-else-if="isBurger === false">
						<span class="icon-bars-solid-2" @click="toggleBurger(true)"></span>
					</template>
					<i class="fa fa-bars"></i>
				</span>
			</div>


  <!-- <h1>{{ t("hello") }}</h1> -->
			<ul class="header-menu clearfix" :class="isBurger === false && 'hide-responsive-992'">
				<li>
					<div class="locale-changer">
    <select v-model="$i18n.locale">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
    </select>
  </div>
				</li>
				<!-- <li class="classement" @click="$emit('toggleClassement')">Classement</li> -->
				<li class="contact-switch" @click="$emit('toggleContact')">Contact</li>
				<!-- <li><a id="five" data-toggle="modal" data-target="#myModal" className="video" @click="$emit('toggleModal')">{{ t("hello") }}</a></li> -->
				<li><a href="/#tournaments" class="video">{{ t("inscription") }}</a></li>
				<!-- <li><a href="/#schedule">Etapes</a></li>
				<li><a href="/#event-section">Présentation</a></li> -->
			</ul>
		</header>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink, RouterView } from 'vue-router'
import nsxcLogo from '@/assets/NSXC_BLANC2.webp'
import { ref } from 'vue'

const { t } = useI18n()

const isBurger = ref(false)
const toggleBurger = (toggleValue: boolean) => {
    isBurger.value = toggleValue;
};
</script>
<style>
@import "./style.scss";
</style>
