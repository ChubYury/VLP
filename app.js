function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + 5;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      chargeSpecAttack: 0,
      winner: null,
    }
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) { this.winner = 'draw' }
      else if (value <= 0) { this.winner = 'monster' };
    },

    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) { this.winner = 'draw' }
      else if (value <= 0 ) { this.winner = 'player' };
    }
  },

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
      
      this.monsterHealth -= damage;
      this.attackPlayer();
    },

    attackPlayer() {
      const damage = getRandomValue(10, 20);
      
      this.playerHealth -= damage;
      this.chargeSpecAttack += 1;
    },

    specAttackMonster() {
      const bigDamage = getRandomValue(15, 30);

      this.monsterHealth -= bigDamage;
      this.attackPlayer();
      this.chargeSpecAttack = 0;
    },

    addHeal() {
      const playerCure = getRandomValue(5, 30);

      this.chargeSpecAttack += 1;
      this.playerHealth + playerCure <= 100 ? this.playerHealth += playerCure : this.playerHealth = 100;
      this.attackPlayer();
    }
  }
})

app.mount('#game')