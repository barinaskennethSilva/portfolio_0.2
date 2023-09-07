import Home_pages from '../components/Home.vue';
import Service_pages from '../components/Service.vue';
import About_pages from '../components/About.vue';
import Contact_pages from '../components/Contact.vue';
import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(),
  routes: [
   {
      name: 'Home_pages',
      path: '/',
    component: Home_pages
    },
    {
      name: 'Service_pages',
      path: '/Service_pages',
      component: Service_pages
    },
    {
      name: 'About_pages',
      path: '/About_pages',
      component: About_pages
    },
    {
      name: 'Contact_pages',
      path: '/Contact_pages',
      component: Contact_pages
    }
  ]
});

export default router;
