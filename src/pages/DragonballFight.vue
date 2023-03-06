<template>
  <div class="main-section">
    <p class="main-title">Dragonball Fights</p>
    <FighterList :fighters="fighters" />
    <WinnerDisplay v-if="showWinner" :message="fightWinner.name" />
    <div class="battle-section">
      <FighterCard
        :title="selectedFighter ? selectedFighter.name : 'Player'"
        :fighter="
          selectedFighter != undefined ? selectedFighter : defaultFighter
        "
      />
      <v-btn
        class="start-battle-button"
        :disabled="!selectedFighterId"
        :class="[{ inactive: !selectedFighterId }]"
        @click="startFight"
      >
        <p id="btn-content">Start Fight</p>
      </v-btn>
      <FighterCard title="Computer" :fighter="computerFighter" />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import FighterList from '@/components/FighterList.vue'
import FighterCard from '@/components/FighterCard.vue'
import WinnerDisplay from '@/components/WinnerDisplay.vue'

export default {
  name: "DragonballFight",
  data() {
    return {
      defaultFighter: {
        name: "Player", 
        attack: 0, 
        defense: 0,
        hp: 0,
        speed: 0,
      },
    };
  },
  components: {
    FighterCard,
    FighterList,
    WinnerDisplay
  },
  computed: {
    ...mapState([
      "fighters",
      "selectedFighterId",
      "selectedFighter",
      "fightWinner"
    ]),
    ...mapGetters([
      "getFighters"
    ]),
    fighters() {
      return this.getFighters;
    },
    showWinner() {
      return this.fightWinner !== undefined;
    },
    computerFighter() {
      // to generate computer monster randomly
      const availableFighters = this.fighters.filter(
        (fighter) => fighter.id !== this.selectedFighterId
      );

      const computerFighter =
        availableFighters[Math.floor(Math.random() * availableFighters.length)];

      return computerFighter;
    },
  },
  methods: {
    ...mapActions([
      "updateFightWinner"
    ]),
    async startFight() {
      const fighter1Id = this.selectedFighter.id;
      const fighter2Id = this.computerFighter.id;

      const fighter1 = this.fighters.find((fighter) => fighter.id === fighter1Id);
      const fighter2 = this.fighters.find((fighter) => fighter.id === fighter2Id);

      const fighter1Sum =
        fighter1.attack + fighter1.defense + fighter1.hp + fighter1.speed;
      const fighter2Sum =
        fighter2.attack + fighter2.defense + fighter2.hp + fighter2.speed;

      if (fighter1Sum > fighter2Sum) {
        let data = { winner: fighter1, tie: false };
        this.$store.dispatch('updateFightWinner', data.winner)
        return data;
      }

      if (fighter2Sum > fighter1Sum) {
        let data = { winner: fighter2, tie: false };
        this.$store.dispatch('updateFightWinner', data.winner)
        return data;
      }

      if (fighter1Sum === fighter2Sum) {
        let data = { winner: null, tie: true };
        this.$store.dispatch('updateFightWinner', data.winner)
        return data;
      }
    },
  },
};
</script>

<style scoped>

.main-section {
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin: 0 auto;
  max-width: 100%;
}

.main-title {
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
}

.battle-section {
  display: grid;
  align-items: center;
  gap: 25px;
  grid-template-columns: 1fr 150px 1fr;
}

.start-battle-button {
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  box-shadow: 0px 2px 2px whitesmoke;
  pointer-events: visible;
  background-color: #23a0a0;;
  height: 20px;
}

.v-btn--disabled.start-battle-button.inactive {
  background-color: darkslategray;
  color: white;
}
</style>
