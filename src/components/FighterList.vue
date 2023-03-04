<script>

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
      selectedFighterId: null
    }
  },
  methods: {
    handleFighterClick(fighter) {
      const correctFighter =
        this.selectedFighterId !== fighter.id ? fighter : null;
      this.selectedFighterId = correctFighter?.id ?? null;
      this.selectedFighterId(correctFighter?.id ?? null);
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
