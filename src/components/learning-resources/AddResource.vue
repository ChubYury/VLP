<template>
  <section>
    <base-card>
      <form action="" @submit.prevent>
        <div class="form-control">
          <label for="nameInp">Title resorce</label>
          <input id="nameInp" type="text" v-model="titleInpValue">
        </div>
        <div class="form-control">
          <label for="descrInp"> Description resorce</label>
          <textarea id="" cols="30" rows="3" v-model="descrInpValue"></textarea>
        </div>
        <div class="form-control">
          <label for="linkInp"> Link resorce</label>
          <input id="linkInp" type="url" v-model="linkInpValue">
        </div>
        <base-btn type="submit" @click="getNewResource">Set new resource</base-btn>
      </form>
    </base-card>
  </section>
</template>

<script>
    export default {
      inject: ['getResource'],
      data() {
        return {
          titleInpValue: '',
          descrInpValue: '',
          linkInpValue: ''
        }
      },
      methods: {
        getNewResource() {
          const newResource =  {
            id: 'res'+ this.titleInpValue,
            title: this.titleInpValue,
            description: this.descrInpValue,
            link: this.linkInpValue
          }
          this.getResource(newResource)
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