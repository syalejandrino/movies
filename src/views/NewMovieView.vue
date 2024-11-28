<template>
  <div class="new-movie-view">
    <div v-if="!getSignUpSuccess">
      <SignUpForm @SignUp="userSignUp" />
      <p v-if="getSignUpError">{{ getSignUpError }}</p>
    </div>
    <div v-else>
      <h1>Welcome, {{ getUserName }}!</h1>
      <h2>Add Movie Form</h2>
      <MovieForm />
    </div>
  </div>
</template>

<script>
import { useUserStore } from '../stores/userStore.js';
import { mapState, mapActions } from 'pinia';
import SignUpForm from '../components/SignUpForm.vue';
import MovieForm from '../components/MovieForm.vue';

export default {
  name: 'NewMovieView',
  components: {
    SignUpForm,
    MovieForm,
  },
  computed: {
    ...mapState(useUserStore, ['getUserName', 'getSignUpSuccess', 'getSignUpError']),
  },
  methods: {
    ...mapActions(useUserStore, ['userSignUp']),
  }
};
</script>

<style scoped>
.new-movie-view {
  text-align: center;
  padding: 20px;
}

h1 {
  margin-bottom: 30px;
  font-size: 2rem;
}

p {
  color: red;
}

h2 {
  font-size: 1.5rem;
}
</style>
