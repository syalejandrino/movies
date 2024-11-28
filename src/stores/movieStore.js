import { defineStore } from 'pinia';
import { addDoc, collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase/init.js';

export const useMovieStore = defineStore('movie-store', {
  state: () => {
    return {
      movieGenres: [
        'Comedy',
        'Animation',
        'Action',
        'Drama',
        'Horror',
        'Sci-Fi',
        'Mystery',
        'Romance',
        'Fantasy',
        'K-Drama',
        'C-Drama',
        'Melodrama',
        'Suspense',
        'Filipino Drama',
        'Kilig Romance'
      ],
      movieList: [],
      queryList: []
    };
  },
  getters: {
    getMovieGenres: (state) => state.movieGenres,
    getAllMovies: (state) => state.movieList,
    getQueryList: (state) => state.queryList
  },
  actions: {
    async addNewMovieToDB(movieToAdd) {
      try {
        await addDoc(collection(db, 'movies'), movieToAdd);
      } catch (error) {
        console.error("Error adding new movie: ", error);
      }
    },
    async getAllMoviesFromDB() {
      this.movieList = [];
      try {
        const querySnapshot = await getDocs(query(collection(db, 'movies')));
        querySnapshot.forEach(doc => {
          this.movieList.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    },
    async queryByDuration(comparison, durationLength) {
      this.queryList = [];
      try {
        const moviesQuery = query(
          collection(db, 'movies'),
          where('durationHour', comparison, durationLength)
        );
        const querySnapshot = await getDocs(moviesQuery);
        querySnapshot.forEach(doc => {
          this.queryList.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error("Error querying movies by duration: ", error);
      }
    },
    async queryByGenre(selectedGenre) {
      this.queryList = [];
      if (selectedGenre.trim() === '') return;
      try {
        const moviesQuery = query(
          collection(db, 'movies'),
          where('genre', 'array-contains', selectedGenre.trim())
        );
        const querySnapshot = await getDocs(moviesQuery);
        querySnapshot.forEach(doc => {
          this.queryList.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error("Error querying movies by genre: ", error);
      }
    }
  }
});
