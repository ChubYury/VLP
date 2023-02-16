function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + 5;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    }
  },

  watch: {},

  computed: {},

  methods: {
    attackMonster() {
      const damage = getRandomValue(5, 12);
      this.monsterHealth >= damage ? this.monsterHealth -= damage : this.monsterHealth = 0;
      this.attackPlayer();
    },

    attackPlayer() {
      const damage = getRandomValue(8, 15);
      this.playerHealth >= damage ? this.playerHealth -= damage : this.playerHealth = 0;
    }
  }
})

app.mount('#game')