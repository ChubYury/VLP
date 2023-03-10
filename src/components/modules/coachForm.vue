<template>
  <form action="" @submit.prevent>
    <div class="form-control" :class="{invalid: !isValid.firstNameValid}">
      <label for="user-name">First name:</label>
      <input
        type="text"
        id="firstNameInp"
        v-model.trim="firstNameVal"
        @blur="validatorInp('firstNameVal')"
      />
    </div>
    <div class="form-control" :class="{invalid: !isValid.lastNameValid}">
      <label for="lastNameInp">Last name:</label>
      <input
        type="text"
        id="lastNameInp"
        v-model.trim="lastNameVal"
        @blur="validatorInp('lastNameVal')"
        />
    </div>
    <div class="form-control" :class="{invalid: !isValid.rateValid}">
      <label for="rateInp">What rate:</label>
      <input
        type="number"
        id="rateInp"
        v-model.trim="rateVal"
        @blur="validatorInp('rateVal')"
        />
    </div>
    <div>
      <h3>Areas of Expertise</h3>
      <p>
        <span>
          <input type="checkbox" id="frontend" value="frontend" v-model="areas">
          <label for="frontend">Frontend</label>
        </span>
        <span>
          <input type="checkbox" id="backend" value="backend" v-model="areas">
          <label for="backend">Backend</label>
        </span>
        <span>
          <input type="checkbox" id="career" value="career" v-model="areas">
          <label for="career">career</label>
        </span>
      </p>
    </div>
    <div class="form-control" :class="{invalid: !isValid.descrValid}">
      <label for="descrInp">Description:</label>
      <textarea
        id="descrInp"
        cols="10"
        rows="5"
        v-model.trim="descrVal"
        @blur="validatorInp('descrVal')"
        ></textarea>
    </div>
    <base-button mode="outline" @click="setNewCoach">Send</base-button>
  </form>
</template>

<script>
  export default {
    emits:['set-data'],
    data() {
      return {
        userNameInp: '',
        firstNameVal: '',
        lastNameVal: '',
        rateVal: null,
        areas: [],
        descrVal: '',
        isValid: {
          firstNameValid: true,
          lastNameValid: true,
          rateValid: true,
          descrValid: true,
        },
      };
    },
    computed: {
      
    },
    methods: {
      validatorInp(keyValue) {
        if (keyValue === 'firstNameVal') {
          this.isValid.firstNameValid = this.firstNameVal === '' ? false : true;
        } else if (keyValue === 'lastNameVal') {
          this.isValid.lastNameValid = this.lastNameVal === '' ? false : true;
        } else if (keyValue === 'rateVal') {
          this.isValid.rateValid = this.rateVal === null ? false : true;
        } else if (keyValue === 'descrVal') {
          this.isValid.descrValid = this.descrVal === '' ? false : true;
        }
      },
      setNewCoach() {
        this.isValid.firstNameValid = this.firstNameVal === '' ? false : true;
        this.isValid.lastNameValid = this.lastNameVal === '' ? false : true;
        this.isValid.rateValid = this.rateVal === null ? false : true;
        this.isValid.descrValid = this.descrVal === '' ? false : true;
        
        const validForm = Object.values(this.isValid).find((i) => i !== true)
        if (validForm === undefined) {
          const newCoach = {
            firstName: this.firstNameVal,
            lastName: this.lastNameVal,
            areas: this.areas,
            description: this.descrVal,
            hourlyRate: this.rateVal
          }
          
          this.$emit('set-data', newCoach)
        }
        
        this.firstNameVal = '';
        this.lastNameVal = '';
        this.rateVal = '';
        this.descrVal = '';
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