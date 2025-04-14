<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import SectionFirst from '../components/sectionFirst/SectionFirst.vue'
import WhiteBar from '../components/whiteBar/WhiteBar.vue'
import SectionSecond from '../components/sectionSecond/SectionSecond.vue'

import useDimension from '../utils/useDimension.js'

import { ref } from 'vue'

const {width} = useDimension()

const isModal = ref(false)
const toggleModal = (toggleValue: boolean) => {
    isModal.value = toggleValue;
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <SectionFirst @toggle-modal="toggleModal(true)"/>
    <WhiteBar />
    <SectionSecond />
    <template v-if="isModal === true">
      <Modal @toggle-modal="toggleModal(false)">
        <iframe :width="width - 320" :height="(width - 320) / (16/9)" src="https://www.youtube.com/embed/6mFKuKw4hKA?si=RkylAhCb2E9aDK3V" 
            title="Championnat de France de Mortal Kombat - Trailer" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
      </Modal>
    </template>
  </main>
</template>
