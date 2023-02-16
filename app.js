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
      if (this.monsterHealth <= 0) {
        return {width: '0%'}
      }
      return {width: this.monsterHealth + '%'}
    },

    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: '0%'}
      }
      return {width: this.playerHealth + '%'}
    },

    specAttackActive() {
      return this.chargeSpecAttack % 3 ? true : false;
    }
  },

  methods: {
    newGame() {
      this.monsterHealth =100;
      this.playerHealth = 100;
      this.chargeSpecAttack = 0;
      this.winner = 0; 
    },

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
    },

    addHeal() {
      const playerCure = getRandomValue(5, 30);

      this.chargeSpecAttack += 1;
      this.playerHealth + playerCure <= 100 ? this.playerHealth += playerCure : this.playerHealth = 100;
      this.attackPlayer();
    },

    surrender() { this.winner = 'monster' }
  }
})

app.mount('#game')