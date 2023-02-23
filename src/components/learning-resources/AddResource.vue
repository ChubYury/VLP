<template>
  <section>
    <base-card>
      <form action="" @submit.prevent>
        <div>
          <label for="nameInp"> Name resorce</label>
          <input id="nameInp" type="text" v-model="nameInpValue">
        </div>
        <div>
          <label for="descrInp"> Description resorce</label>
          <textarea id="" cols="30" rows="10" v-model="descrInpValue"></textarea>
        </div>
        <div>
          <label for="linkInp"> Link resorce</label>
          <input id="linkInp" type="text" v-model="linkInpValue">
        </div>
        <base-btn>Set new resource</base-btn>
      </form>
    </base-card>
  </section>
</template>

<script>
    export default {
      data() {
        return {
          nameInpValue: '',
          descrInpValue: '',
          linkInpValue: ''
        }
      }
    }
</script>

<style scoped>
  form  div {
    margin: 0.5rem 0;
  }
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
  }

  .form-control {
    margin: 1rem 0;
  }
</style>