import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/common.css";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faXmark, faRotateRight, faBolt, faHandshake, faHandPointUp, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
library.add(faCheck, faXmark, faRotateRight, faBolt, faHandshake, faHandPointUp, faArrowUpRightFromSquare)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')