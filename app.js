function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + 5;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
    }
  },

  watch: {},

  computed: {
    monsterBarStyles() {
      return {width: this.monsterHealth + '%'}
    },

    playerBarStyles() {
      return {width: this.playerHealth + '%'}
    }
  },

  methods: {
    attackMonster() {
      const damage = getRandomValue(5, 12);
      this.monsterHealth >= damage ? this.monsterHealth -= damage : this.monsterHealth = 0;
      this.attackPlayer();
    },

    attackPlayer() {
      const damage = getRandomValue(10, 20);
      this.playerHealth >= damage ? this.playerHealth -= damage : this.playerHealth = 0;
    }
  }
})

app.mount('#game')