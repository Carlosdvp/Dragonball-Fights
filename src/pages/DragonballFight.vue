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
        Start Fight
      </v-btn>
      <FighterCard title="Computer" :fighter="computerFighter" />
    </div>
  </div>
</template>

<script>
import FighterList from '@/components/FighterList.vue'
import FighterCard from '@/components/FighterCard.vue'
import WinnerDisplay from '@/components/WinnerDisplay.vue'

export default {
  name: "DragonballFight",
  data() {
    return {
      // defaultFighter: {name: "Player", attack: 0, defense: 0,hp: 0,
      //   speed: 0,},
      fighters: [
        {
          "id": "fighter-1",
          "name": "Goku",
          "attack": 160,
          "defense": 140,
          "hp": 100,
          "speed": 180,
          "type": "Type",
          "imageUrl": "@/images/goku.png"
        },
        {
          "id": "fighter-2",
          "name": "Android 17",
          "attack": 150,
          "defense": 110,
          "hp": 90,
          "speed": 190,
          "type": "Type",
          "imageUrl": "@/images/android17_2.png"
        },
      ]
    };
  },
  components: {
    FighterCard,
    FighterList,
    WinnerDisplay
  },
  computed: {
    // ...mapState("monster", [
    //   "selectedMonsterId",
    //   "selectedMonster",
    //   "battleWinner",
    // ]),
    // ...mapGetters("fighter", ["getFighters"]),
    fighters() {
      return this.fighters;
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
    // ...mapActions("monster", ["loadMonsters", "updateBattleWinner"]),
    // async startFight() {
    //   try {
    //     const response = await fetch(`${API_URL}/battle`, {
    //       method: "POST",
    //       body: JSON.stringify({
    //         monster1Id: this.selectedMonster.id,
    //         monster2Id: this.computerMonster.id,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     const data = await response.json();

    //     this.$store.dispatch("monster/updateBattleWinner", data.winner);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
  created() {
    // this.loadFighters();
  },
};
</script>

<style scoped>

.main-section {
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin: 0 auto;
  max-width: 814px;
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
/*  font-family: $font-family-root;*/
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-transform: capitalize;
  padding: 12px 30px;
/*  box-shadow: $box-shadow-button;*/
  pointer-events: visible;
  height: 45px;
/*  background-color: $active-button;*/
}

.v-btn--disabled.start-battle-button.inactive {
/*  background-color: $inactive-button;*/
  color: white;
}
</style>
