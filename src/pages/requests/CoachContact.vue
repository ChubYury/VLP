<template>
  <form action="" @submit.prevent>
    <h2>Coach contact</h2>
    <div class="form-control" :class="{errors: emailField.isError}">
      <label for="contactInpEmail">Email:</label>
      <input 
        id="contactInpEmail"  
        type="email"
        v-model.trim="emailField.val"
        @blur="validFields('emailField')"
      >
    </div>
    <div class="form-control" :class="{errors: questField.isError}">
      <label for="contactInpMes">Questions:</label>
      <textarea 
        id="contactInpMes" 
        cols="30" 
        rows="10"
        v-model.trim="questField.val"
        @blur="validFields('questField')"
        ></textarea>
    </div>
    <p class="errors" v-if="!flagValidForm">Please enter a valid email and non-empty message</p>
    <div class="actions">
      <base-button mode="outline" @click="submitForm">Send</base-button>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        emailField: {
          val: '',
          isError: false
        },
        questField: {
          val: '',
          isError: false
        },
        flagValidForm: true,
      }
    },
    methods: {
      validFields(inp) {
        this[inp].val === '' ? this[inp].isError = true : this[inp].isError = false;
      },
      validForm() {
        this.flagValidForm = true;

        if (this.emailField.val === '') {
          
          this.emailField.isError = true;
          this.flagValidForm = false;
          
          console.log('Email value: ',this.emailField.val)
          console.log('tut',this.flagValidForm)
        }
        if (this.questField.val === '') {
          this.questField.isError = true;
          this.flagValidForm = false;
        }
        console.log(this.flagValidForm)
      },
      submitForm() {
        this.validForm();

        if (!this.flagValidForm) {
          console.log('Form not valid')
          return
        }

        console.log('Form valid')
      }
    }  
  }
</script>


<style scoped>
  form {
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 12px;
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

  .errors {
    font-weight: bold;
    color: red;
  }

  .actions {
    text-align: center;
  }
</style>