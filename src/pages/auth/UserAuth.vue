<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent>
        <div class="form-control">
          <label for="email">E-mail:</label>
          <input type="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password">
        </div>
        <p 
          v-if="!formIsValid"
        >Please enter a valid email and password (must be at least 6 characters long).</p>
        <base-button @click="submitForm">{{ submitBtnCaption }}</base-button>
        <base-button 
          type="button" 
          mode="flat"
          @click="switchAutMode"
        >{{ switchModeBtnCaption }}</base-button>
      </form>
    </base-card>
  </div>
</template>

<script>
/*import { handleError } from 'vue'*/

export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      isLoading: false,
      error: null
    }
  },
  computed: {
    submitBtnCaption() {
      if (this.mode === 'login') return 'Login'
      else return 'Signup'
    },
    switchModeBtnCaption() {
      if (this.mode === 'login') return 'Signup instead'
      else return 'Login instead'
    }
  },
  methods: {
    async submitForm() {
      this.formIsValid = true; 
      
      if (
        this.email === ''|| 
        !this.email.includes('@') || 
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return
      }
      this.isLoading = true;

      const userData = {
        email: this.email, 
        password: this.password
      }

      try {
        if(this.mode === 'signup')  await this.$store.dispatch('signup', userData);
        else await this.$store.dispatch('login', userData);
        
        const redirectURL = `/${this.$route.query.redirect || 'coaches'}`;
        this.$router.replace(redirectURL);
      } catch (err) {this.error = err.message || 'Failed authenticate, try later.'}
      this.isLoading = false;
    },
    switchAutMode() {
      this.mode === 'login' ? this.mode = 'signup' : this.mode = 'login'
    },
    handleError() {
      this.error = null;
    }
  }
}
</script>

<style scoped>
  form {
    margin: 1rem;
    padding: 1rem;
  }

  .form-control {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: 1px solid #ccc;
    padding: 0.15rem;
  }

  input:focus,
  textarea:focus {
    border-color: #3d008d;
    background-color: #faf6ff;
    outline: none;
  }
</style>