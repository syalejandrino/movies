<template>
  <div class="movie-form">
    <h1>Add New Movie</h1>
    <form @submit.prevent="addNewMovie(newMovie)">
      <div class="form-group">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          v-model="newMovie.title"
          placeholder="Enter movie title"
          required
        />
      </div>

      <div class="form-group">
        <label for="releaseYear">Release Year:</label>
        <input
          type="number"
          id="releaseYear"
          v-model="newMovie.releaseYear"
          placeholder="Enter release year"
          min="1900"
          max="2099"
          required
        />
      </div>

      <div class="form-group">
        <label for="durationHour">Duration (hours):</label>
        <input
          type="number"
          id="durationHour"
          v-model="newMovie.durationHour"
          placeholder="Enter hours"
          min="0"
          required
        />
      </div>

      <div class="form-group">
        <label for="durationMinute">Duration (minutes):</label>
        <input
          type="number"
          id="durationMinute"
          v-model="newMovie.durationMinute"
          placeholder="Enter minutes"
          min="0"
          max="59"
          required
        />
      </div>

      <div class="form-group">
        <label for="genre">Genres:</label>
        <select
          id="genre"
          v-model="getMovieGenres"
          multiple
          required
        >
          <option v-for="genre in getMovieGenres" :key="genre" :value="genre">
            {{ genre }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="rating">Rating:</label>
        <select
          id="rating"
          v-model="newMovie.rating"
          required
        >
          <option value="G">G</option>
          <option value="PG">PG</option>
          <option value="PG-13">PG-13</option>
          <option value="R">R</option>
        </select>
      </div>

      <button type="submit">Add Movie</button>
    </form>
  </div>
</template>

<script>
import { useMovieStore } from '../stores/movieStore';
import { mapState, mapActions } from 'pinia';

export default {
  name: 'MovieForm',
  data() {
    return {
      newMovie: {
        title: '',
        releaseYear: '',
        rating: '',
        genre: [],
        durationHour: null,
        durationMinute: null,
      }
    };
  },
  created() {
    this.resetNewMovie();
  },
  computed: {
    ...mapState(useMovieStore, ['getMovieGenres'])
  },
  methods: {
    ...mapActions(useMovieStore, ['addNewMovieToDB']),
    resetNewMovie() {
      this.newMovie = {
        title: '',
        releaseYear: '',
        rating: '',
        genre: [],
        durationHour: null,
        durationMinute: null,
      };
    },
    async addNewMovie(newMovie) {
      await this.addNewMovieToDB(newMovie);
      this.$router.push('/movie-list');
    }
  }
};
</script>

<style scoped>
.movie-form {
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
