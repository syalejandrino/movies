<template>
    <div class="movie-card">
      <h2>{{ title }}</h2>
      <p><strong>Year:</strong> {{ releaseYear }}</p>
      <p><strong>Rating:</strong> {{ rating }}</p>
      <p><strong>Genres:</strong></p>
      <ul>
        <li v-for="(item, index) in genre" :key="index">{{ item }}</li>
      </ul>
      <p><strong>Duration:</strong> {{ durationHour }}h {{ durationMinute }}m</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Movie",
    props: {
      title: String,
      releaseYear: String,
      rating: String,
      genre: Array,
      durationHour: Number,
      durationMinute: Number
    }
  };
  </script>
  
  <style scoped>
  .movie-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: left;
  }
  
  h2 {
    color: #42b983;
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background-color: #f0f0f0;
    margin: 5px 0;
    padding: 5px;
    border-radius: 5px;
  }
  
  p {
    margin: 5px 0;
  }
  </style>
  