<template>
  <div class="container">
    <div class="block" :class="{animate: animatedBlock}"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition 
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraIsVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="paraVisible">Toggle paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-btn" mode="out-in">
      <button @click="toggleVisUsers" v-if="!usersAreVisible">Show users</button>
      <button @click="toggleVisUsers" v-else>Hide users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,  
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter()');
      // console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter()');
      // console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('afterEnter()');
      console.log(el);
      
    },
    enterCancelled() {
      clearInterval(this.enterInterval)
    },
    // ***********
    beforeLeave(el) {
      console.log('beforeLeave()');
      // console.log(el);
      el.style.opacity = 1;      
    },
    leave(el, done) {
      console.log('leave()');
      // console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 10)
      // let round = 100;
      // this.leaveInterval = setInterval(() => {
      //   el.style.opacity = round * 0.07;
      //   round-=1;
      //   if (round < 1) {
      //     clearInterval(this.leaveInterval);
      //     done();
      //   }
      // }, 15)
    },
    afterLeave(el) {
      console.log('afterLeave()');
      console.log(el);
      // el.style.opacity = 0;
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval)
    },
    toggleVisUsers() {this.usersAreVisible = !this.usersAreVisible},
    paraVisible() {this.paraIsVisible = !this.paraIsVisible},
    animateBlock() {this.animatedBlock = !this.animatedBlock},
    showDialog() {this.dialogIsVisible = true},
    hideDialog() {this.dialogIsVisible = false},
  },
};
</script>

<style>
  * { box-sizing: border-box; }
  html { font-family: sans-serif; }
  body { margin: 0; }
  button {
    font: inherit;
    padding: 0.5rem 2rem;
    border: 1px solid #810032;
    border-radius: 30px;
    background-color: #810032;
    color: white;
    cursor: pointer;
  }
  button:hover, button:active {
    background-color: #a80b48;
    border-color: #a80b48;
  }
  .block {
    width: 8rem;
    height: 8rem;
    background-color: #290033;
    margin-bottom: 2rem;
  }
  .container {
    max-width: 40rem;
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 2px solid #ccc;
    border-radius: 12px;
  }

  .fade-btn-enter-from,
  .fade-btn-leave-to {
    opacity: 0;
  }
  .fade-btn-enter-active {
    transition: opacity .3s ease-out;
  }
  .fade-btn-leave-active {
    transition: opacity .3s ease-in;
  }
  .fade-btn-enter-to,
  .fade-btn-leave-from {
    opacity: 1;
  }
</style>