<template>
  <div>
    <div v-if="!getSignInSuccess">
      <SignInForm @SignIn="userSignIn" />
      <p v-if="getSignInError">{{ getSignInError }}</p>
    </div>

    <div v-else class="movie-list-view">
      <h1>Movie List</h1>

      <div class="movie-grid">
        <Movie
          v-for="(movie, index) in getAllMovies"
          :key="index"
          :title="movie.title"
          :releaseYear="movie.releaseYear"
          :rating="movie.rating"
          :genre="movie.genre"
          :durationHour="movie.durationHour"
          :durationMinute="movie.durationMinute"
        />
      </div>

      <div class="filter-section">
        <label for="duration-filter">Filter by Duration</label> <br>
        <button @click="queryByDuration('<', 2)">Under 2 Hours</button>
        <button @click="queryByDuration('>', 1)">Over 2 Hours</button>
      </div>

      <div class="filter-section">
        <label for="genre-filter">Filter by Genre</label>
        <br>
        <select id="genre-filter" v-model="selectedGenre">
          <option v-for="genre in getMovieGenres" :key="genre" :value="genre">
            {{ genre }}
          </option>
        </select>
        <button @click="queryByGenre(selectedGenre)">Apply</button>
      </div>

      <div v-if="getQueryList.length > 0" class="filtered-movies">
        <h2>Filtered Movies</h2>
        <div class="movie-grid">
          <Movie
            v-for="(movie, index) in getQueryList"
            :key="index"
            :title="movie.title"
            :releaseYear="movie.releaseYear"
            :rating="movie.rating"
            :genre="movie.genre"
            :durationHour="movie.durationHour"
            :durationMinute="movie.durationMinute"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore.js';
import { mapState, mapActions } from 'pinia';
import { useMovieStore } from '../stores/movieStore.js';
import Movie from '../components/Movie.vue';
import SignInForm from '../components/SignInForm.vue';

export default {
  name: 'MovieListView',
  components: {
    Movie,
    SignInForm,
  },
  data() {
    return {
      selectedGenre: ''
    };
  },
  created() {
    this.getAllMoviesFromDB();
  },
  computed: {
    ...mapState(useUserStore, ['getSignInSuccess', 'getSignInError']),
    ...mapState(useMovieStore, ['getAllMovies', 'getMovieGenres', 'getQueryList'])
  },
  methods: {
    ...mapActions(useUserStore, ['userSignIn']),
    ...mapActions(useMovieStore, ['getAllMoviesFromDB', 'queryByDuration', 'queryByGenre'])
  },
};
</script>

<style scoped>
.movie-list-view {
  padding: 20px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.movie-grid {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.movie-grid > * {
  flex-shrink: 0;
  width: 200px;
}

.filter-section {
  margin-top: 30px;
}

.filter-section label {
  font-weight: bold;
}

.filter-section button {
  margin-left: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
}

.filter-section button:hover {
  background-color: #0056b3;
}

.filtered-movies {
  margin-top: 30px;
}

p {
  color: red;
}

@media (max-width: 768px) {
  .movie-grid {
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .movie-grid > * {
    width: 150px;
  }
}
</style>