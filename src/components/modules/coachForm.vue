<template>
  <form action="" @submit.prevent>
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="user-name">First name:</label>
      <input
        type="text"
        id="firstNameInp"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
        />
      </div>
    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastNameInp">Last name:</label>
      <input
        type="text"
        id="lastNameInp"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
    </div>
    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rateInp">What rate:</label>
      <input
        type="number"
        id="rateInp"
        v-model.trim="rate.val"
        @blur="clearValidity('rate')"
        />
    </div>
    <div class="form-control" :class="{invalid: !areas.isValid}">
      <h3>Areas of Expertise</h3>
      <p>
        <span >
          <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')">
          <label for="frontend">Frontend</label>
        </span>
        <span >
          <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')">
          <label for="backend">Backend</label>
        </span>
        <span >
          <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')">
          <label for="career">career</label>
        </span>
      </p>
    </div>
    <div class="form-control" :class="{invalid: !descr.isValid}">
      <label for="descrInp">Description:</label>
      <textarea
        id="descrInp"
        cols="10"
        rows="5"
        v-model.trim="descr.val"
        @blur="clearValidity('descr')"
        ></textarea>
    </div>
    <p v-if="!formIsValid">Please fix the above errors and submit againe.</p>
    <base-button mode="outline" @click="setNewCoach">Send</base-button>
  </form>
</template>

<script>
  export default {
    emits:['set-data'],
    data() {
      return {
        firstName: {
          val: '',
          isValid: true
        },
        lastName: {
          val: '',
          isValid: true
        },
        rate: {
          val: null,
          isValid: true
        },
        areas: {
          val: [],
          isValid: true
        },
        descr: {
          val: '',
          isValid: true
        },
        formIsValid: true,
        // isValid: {
        //   firstNameValid: true,
        //   lastNameValid: true,
        //   rateValid: true,
        //   descrValid: true,
        // },
      };
    },
    computed: {
      
    },
    methods: {
      clearValidity(input) {
        this[input].isValid = true;
      },
      validateForm() {
        this.formIsValid = true;
        if (this.firstName.val === '') {
          this.firstName.isValid = false;
          this.formIsValid = false;
        }
        if (this.lastName.val === '') {
          this.lastName.isValid = false;
          this.formIsValid = false;
        }
        if (this.rate.val === null || this.rate.val < 0) {
          this.rate.isValid = false;
          this.formIsValid = false;
        }
        if (this.areas.val.length === 0) {
          this.areas.isValid = false;
          this.formIsValid = false;
        }
        if (this.descr.val === '') {
          this.descr.isValid = false;
          this.formIsValid = false;
        }
      },
      
      setNewCoach() {
        this.validateForm();
        
        if (!this.formIsValid) return;

        const newCoach = {
          firstName: this.firstName.val,
          lastName: this.lastName.val,
          areas: this.areas.val,
          description: this.descr.val,
          hourlyRate: this.rate.val
        }
        
        this.$emit('set-data', newCoach)
        
        this.firstName.val = '';
        this.lastName.val = '';
        this.rate.val = null;
        this.descr.val = '';
      }
    }
  };
</script>

<style scoped>
  .form-control {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type="checkbox"] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
  }

  input:focus,
  textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
  }

  input[type="checkbox"] {
    display: inline;
    width: auto;
    border: none;
  }

  input[type="checkbox"]:focus {
    outline: #3d008d solid 1px;
  }

  h3 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }

  .invalid label {
    color: red;
  }

  .invalid input,
  .invalid textarea {
    border: 1px solid red;
  }
</style>