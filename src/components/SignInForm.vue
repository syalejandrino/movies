<template>
    <div class="sign-in-form">
      <h2>Sign In</h2>
      <div>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="signInEmail"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="signInPassword"
          placeholder="Enter your password"
        />
      </div>
      <p v-show="!signInStatus" class="error-message">Missing Email or Password</p>
      <button :disabled="!signInStatus" @click="signIn">Sign In</button>
    </div>
  </template>
  
  <script>
  export default {
    emits: ['SignIn'],
    data() {
      return {
        signInEmail: '',
        signInPassword: '',
      };
    },
    computed: {
      signInStatus() {
        return this.signInEmail !== '' && this.signInPassword !== '';
      },
    },
    methods: {
      signIn() {
        if (this.signInEmail && this.signInPassword) {
          this.$emit('SignIn', {
            email: this.signInEmail,
            password: this.signInPassword,
          });
        }
      },
    },
  };
  </script>
  
<style scoped>
.sign-in-form {
  max-width: 400px;
  margin: auto;
  margin-top: 100px;
  padding-top: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px 0;
  padding-left: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: inline-block;
  font-size: 14px;
}
.error-message {
    color: red;
    text-align: center;
}

div {
  margin-bottom: 20px;
}
</style>
