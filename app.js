function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + 5;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      chargeSpecAttack: 0,
    }
  },

  watch: {},

  computed: {
    monsterBarStyles() {
      return {width: this.monsterHealth + '%'}
    },

    playerBarStyles() {
      return {width: this.playerHealth + '%'}
    },

    specAttackActive() {
      return this.chargeSpecAttack >= 3 ? false : true;
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
      this.chargeSpecAttack += 1;
    },

    specAttackMonster() {
      const bigDamage = getRandomValue(15, 30);

      this.monsterHealth >= bigDamage ? this.monsterHealth -= bigDamage : this.monsterHealth = 0;
      this.attackPlayer();
      this.chargeSpecAttack = 0;
    },

    // addHeal() {
    //   const monsterCure = getRandomValue(5, 30);
    //   const playerCure = getRandomValue(5, 30);

    //   this.monsterHealth + monsterCure <= 100 ? this.monsterHealth += monsterCure : this.monsterHealth = 100;
    //   this.playerHealth + playerCure <= 100 ? this.playerHealth += playerCure : this.playerHealth = 100;
    // }
  }
})

app.mount('#game')