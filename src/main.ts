import './style/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Unicon from 'vue-unicons'
import {
  uniCheck,
  uniClock,
  uniX,
  uniTimes,
  uniSchedule,
  uniHeart,
  uniGrin,
} from 'vue-unicons/dist/icons'

Unicon.add([uniCheck, uniClock, uniX, uniTimes, uniSchedule, uniHeart, uniGrin])

const app = createApp(App)

app.use(Unicon)
app.use(createPinia())
app.use(router)

app.mount('#app')
