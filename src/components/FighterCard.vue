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
      return (this.fighter.attack / 100) * 100;
    },
    defenseFillwidth() {
      return (this.fighter.defense / 100) * 100;
    },
    hpFillwidth() {
      return (this.fighter.hp / 100) * 100;
    },
    speedFillwidth() {
      return (this.fighter.speed / 100) * 100;
    },
  }
}
</script>

<template>
  <div>
    <v-card class="fighter-card-player">
      <img class="fighter-image centralized" :src="fighter.imageUrl" />
      <div class="fight-details">
        <p class="title">{{ title }}</p>
        <p>Attack</p>
        <div class="gauge-bar">
          <div
            class="gauge-bar-fill"
            :style="{ width: attackFillwidth + '%' }"
          ></div>
        </div>
        <p>Defense</p>
        <div class="gauge-bar">
          <div
            class="gauge-bar-fill"
            :style="{ width: defenseFillwidth + '%' }"
          ></div>
        </div>
        <p>HP</p>
        <div class="gauge-bar">
          <div
            class="gauge-bar-fill"
            :style="{ width: hpFillwidth + '%' }"
          ></div>
        </div>
        <p>Speed</p>
        <div class="gauge-bar">
          <div
            class="gauge-bar-fill"
            :style="{ width: speedFillwidth + '%' }"
          ></div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.battle-card-player {
  padding: 13px 11px;
  height: 415px;
  flex-direction: column;
  border-radius: 7px;
/*  box-shadow: $box-shadow;*/
}

.centralized {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
}

.monster-image {
  width: 360px;
}

.monster-details {
  font-size: 14px;
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

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
