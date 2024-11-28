<template>
  <div id="app">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/movie-list">Movie List</RouterLink> 
      <RouterLink to="/new-movie-view">Add New Movie</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 1rem;
}

nav a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

nav a:hover {
  color: #66bb6a;
}
</style>
