import { defineStore } from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/init.js';

export const useUserStore = defineStore('user-store', {
  state: () => {
    return {
      userName: '',
      signUpSuccess: false,
      signUpError: '',
      signInSuccess: false,
      signInError: ''
    };
  },
  getters: {
    getUserName: (state) => state.userName,
    getSignUpSuccess: (state) => state.signUpSuccess,
    getSignUpError: (state) => state.signUpError,
    getSignInSuccess: (state) => state.signInSuccess,
    getSignInError: (state) => state.signInError
  },
  actions: {
    async userSignUp(signUpObj) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          signUpObj.email,
          signUpObj.password
        );
        this.userName = userCredential.user.email;
        this.signUpSuccess = true;
        this.signUpError = '';
        alert(`Successful sign up for ${this.userName}`);
      } catch (error) {
        this.userName = '';
        this.signUpError = error.message;
        this.signUpSuccess = false;
      }
    },
    async userSignIn(signInObj) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          signInObj.email,
          signInObj.password
        );
        const user = userCredential.user;
        this.signInSuccess = true;
        this.signInError = '';
        alert(`Successful sign in for ${user.email}`);
      } catch (error) {
        console.error('Sign In Error: ', error.code, error.message);
        this.signInError = error.message;
        this.signInSuccess = false;
      }
    }
  }
});