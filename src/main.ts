// import './assets/main.css'
import './index.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'


const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'en', // set current locale
    fallbackLocale: 'fr',
    messages: {
      en: {
        datesEvent: 'From the 29 November to the 1st December',
        inscription: 'Sign Up',
        watchTrailer: 'Watch the trailer',
        venueTitle: "How to come to the Mindset?",
        moreInformations: 'More informations',
      },
      fr: {
        datesEvent: 'Du 29 Novembre au 1er Décembre',
        inscription: 'Inscription',
        watchTrailer: 'Voir le trailer',
        venueTitle: 'Comment venir au Mindset ?',
        moreInformations: "Plus d'informations"
      }
    },
    // vue-i18n something options here ...
    // ...
})

const app = createApp(App)

app.use(i18n)
app.use(router)
app.mount('#app')
