<template>
    <div class="sign-up-form">
      <h2>Please Sign Up to Add a Movie</h2>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="signUpEmail"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <div class="password-wrapper">
          <input
            :type="passwordFieldType"
            id="password"
            v-model="signUpPassword"
            placeholder="Enter your password"
          />
          <button @click="togglePasswordVisibility" class="toggle-password">
            <span v-if="passwordFieldType === 'password'">👁️</span>
            <span v-else>🙈</span>
          </button>
        </div>
      </div>
  
      <p v-show="!signUpStatus" class="error-message">Missing Email or Password</p>
      <button :disabled="!signUpStatus" @click="signUp" class="sign-up">Sign Up</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['SignUp'],
    data() {
      return {
        signUpEmail: '',
        signUpPassword: '',
        showPassword: false,
      };
    },
    computed: {
      signUpStatus() {
        return this.signUpEmail !== '' && this.signUpPassword !== '';
      },
      passwordFieldType() {
        return this.showPassword ? 'text' : 'password';
      },
    },
    methods: {
      signUp() {
        if (this.signUpEmail && this.signUpPassword) {
          this.$emit('SignUp', {
            email: this.signUpEmail,
            password: this.signUpPassword,
          });
        }
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
  
  <style scoped>
  .sign-up-form {
    max-width: 400px;
    margin: auto;
    margin-top: 100px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
  }
  
  input {
    width: 100%;
    padding: 10px 0;
    padding-left: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .password-wrapper {
    display: flex;
    align-items: center;
  }
  
  .sign-up {
    background-color: #4CAF50;
    color: white;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .error-message {
    color: red;
    text-align: center;
  }
  
  .toggle-password {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    margin-left: 10px;
  }
  </style>
  