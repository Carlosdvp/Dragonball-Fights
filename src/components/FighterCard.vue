<script>
export default {
  name: "FighterCard",
  props: {
    title: {
      type: String,
      required: false
    },
    fighter: {
      type: Object,
      required: true
    }
  },
  computed: {
    attackFillwidth() {
      return (this.fighter.attack);
    },
    defenseFillwidth() {
      return (this.fighter.defense);
    },
    hpFillwidth() {
      return (this.fighter.hp);
    },
    speedFillwidth() {
      return (this.fighter.speed);
    },
  }
}
</script>

<template>
  <div>
    <v-card class="fighter-card-player">
      <img class="fighter-image" :src="fighter.imageUrl" />
      <div class="fighter-details">
        <p class="title">{{ title }}</p>
        <p>Attack</p>
        <div class="gauge-bar">
          <div
            class="gauge-bar-fill"
            :style="{ width: (attackFillwidth/2) + '%' }"
          ></div>
        </div>
        <p>Defense</p>
        <div class="gauge-bar">
          <div
            class="gauge-bar-fill"
            :style="{ width: (defenseFillwidth/2) + '%' }"
          ></div>
        </div>
        <p>HP</p>
        <div class="gauge-bar">
          <div
            class="gauge-bar-fill"
            :style="{ width: (hpFillwidth/2) + '%' }"
          ></div>
        </div>
        <p>Speed</p>
        <div class="gauge-bar">
          <div
            class="gauge-bar-fill"
            :style="{ width: (speedFillwidth/2) + '%' }"
          ></div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.battle-card-player {
  height: 415px;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: -2px 3px 10px lightblue;
}

.title {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
}

.fighter-image {
  width: 100%;
}

.fighter-details {
  font-size: 14px;
  padding: 14px;
}

.gauge-bar {
  width: 100%;
  height: 15px;
  border-radius: 7px;
  background-color: lightgray;
  position: relative;
}

.gauge-bar-fill {
  width: 0%;
  height: 100%;
  border-radius: 7px;
  background-color: orange;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
