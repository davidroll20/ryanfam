import BulletinPageView from '@/views/BulletinPageView.vue';
import BulletinView from '@/views/BulletinView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// import BulletinView from '../views/BulletinView.vue'

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        { path: 'bulletin', name: 'bulletin', component: BulletinView },
        {
          path: ':id',
          name: 'bulletin-page',
          component: BulletinPageView,
        },
        {
          path: 'calendar',
          name: 'calendar',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/CalendarView.vue'),
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
    // {
    //   path: '#/bulletin',
    //   name: 'bulletin',
    //   component: BulletinView,
    // },
    // {
    //   path: '#/bulletin#:id',
    //   name: 'bulletin-page',
    //   component: BulletinPageView,
    // },
    // {
    //   path: '#/calendar',
    //   name: 'calendar',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/CalendarView.vue'),
    // },
    // {
    //   path: '/#about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
