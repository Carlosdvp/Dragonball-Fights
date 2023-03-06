<script>
import { mapActions } from "vuex";

export default {
  name: "FighterList",
  props: {
    fighters: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      selectedFighterId: null,
    }
  },
  methods: {
    ...mapActions([
      "selectedFighterById",
      "selectedFighter",
      "resetGame",
    ]),
    handleFighterClick(fighter) {
      const correctFighter =
        this.selectedFighterId !== fighter.id ? fighter : null;
      this.selectedFighterId = correctFighter?.id ?? null;
      this.selectedFighterById(correctFighter?.id ?? null);
      this.selectedFighter(correctFighter ?? null);
      this.resetGame();
    }
  }
}
</script>

<template>
  <div>
    <h3 class="title-select-fighter">
      {{
        fighters.length > 0 ? "Select your fighter" : "No fighters available"
      }}
    </h3>
    <div class="list-fighters">
      <v-card
        v-for="fighter in fighters"
        :key="fighter.id"
        :data-testid="fighter.id"
        class="card-fighter"
        :ripple="false"
        :style="{
          border: fighter.id === selectedFighterId ? '1px solid black' : 'none',
        }"
        @click="handleFighterClick(fighter)"
      >
        <v-img :src="fighter.imageUrl" class="image"></v-img>
        <p>{{ fighter.name }}</p>
      </v-card>
    </div>
  </div>
</template>

<style scoped>

.list-fighters {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.title-select-fighter {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}

.image {
  width: 136px;
  height: 99px;
  border-radius: 7px;
}

.card-fighter {
  width: 150px;
  height: 139px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 7px !important;
/*  box-shadow: $box-shadow;*/
  transition: all 0.2s ease-in-out;
}

.card-fighter p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 7px;
}

</style>