import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import MovieListView from '../views/MovieListView.vue';
import NewMovieView from '../views/NewMovieView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/movie-list',
      name: 'MovieList',
      component: MovieListView
    },
    {
      path: '/new-movie-view',
      name: 'Add New Movie',
      component: NewMovieView
    }
  ]
});

export default router;
