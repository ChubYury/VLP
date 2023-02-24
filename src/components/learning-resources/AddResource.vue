<template>
  <section>
    <base-dialog 
      v-if="inputIsInvalid"
      title="Invalid input"
      @close="confirmError"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>Please check all inputs and make sure you enter at least a few characters intro each input field.</p>
      </template>
      <template #actions>
        <base-btn @click="confirmError">Ok</base-btn>
      </template>
    </base-dialog>
    <base-card>
      <form action="" @submit.prevent>
        <div class="form-control">
          <label for="nameInp">Title resorce</label>
          <input id="nameInp" type="text" ref="titleInpValue">
        </div>
        <div class="form-control">
          <label for="descrInp"> Description resorce</label>
          <textarea id="" cols="30" rows="3" ref="descrInpValue"></textarea>
        </div>
        <div class="form-control">
          <label for="linkInp"> Link resorce</label>
          <input id="linkInp" type="url" ref="linkInpValue">
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
          inputIsInvalid: false,
        }
      },
      methods: {
        getNewResource() {
          if (
            this.$refs.titleInpValue.value.trim() === '' || 
            this.$refs.descrInpValue.value.trim() === '' || 
            this.$refs.linkInpValue.value.trim() === ''
          ) {
            this.inputIsInvalid = true;
            return
          }
          const newResource =  {
            id: 'res'+ this.$refs.titleInpValue.value + new Date().toISOString(),
            title: this.$refs.titleInpValue.value,
            description: this.$refs.descrInpValue.value,
            link: this.$refs.linkInpValue.value
          }

          this.$refs.titleInpValue.value = '';
          this.$refs.descrInpValue.value = '';
          this.$refs.linkInpValue.value = '';

          this.getResource(newResource)
        },

        confirmError() {this.inputIsInvalid = false},
      },

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