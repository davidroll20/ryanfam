import './style/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Unicon from 'vue-unicons';
import {
  uniCheck,
  uniClock,
  uniX,
  uniTimes,
  uniSchedule,
  uniHeart,
  uniGrin,
  uniInfoCircle,
  uniAngleUp,
  uniPlusCircle,
  uniEye,
} from 'vue-unicons/dist/icons';
import { firebaseApp } from './firebase';
import { VueFire } from 'vuefire';

Unicon.add([
  uniCheck,
  uniClock,
  uniX,
  uniTimes,
  uniSchedule,
  uniHeart,
  uniGrin,
  uniInfoCircle,
  uniAngleUp,
  uniPlusCircle,
  uniEye,
]);

const app = createApp(App);

app.use(Unicon);
app.use(createPinia());
app.use(VueFire, {
  firebaseApp,
  // modules: [VueFireFirestoreOptionsAPI()],
});

app.use(router);

app.mount('#app');
