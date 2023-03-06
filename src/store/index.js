import { createStore } from 'vuex'

export default createStore({
  state: {
    fighters: [
        {
          id: "fighter-1",
          name: "Goku",
          attack: 160,
          defense: 140,
          hp: 100,
          speed: 180,
          type: "Type",
          imageUrl: "src/images/goku.png"
        },
        {
          id: "fighter-2",
          name: "Android 17",
          attack: 150,
          defense: 110,
          hp: 90,
          speed: 190,
          type: "Type",
          imageUrl: "src/images/android17.png"
        },
        {
          id: "fighter-3",
          name: "Cell",
          attack: 120,
          defense: 120,
          hp: 200,
          speed: 100,
          type: "Type",
          imageUrl: "src/images/cell.jpg"
        },
        {
          id: "fighter-4",
          name: "Freeza",
          attack: 110,
          defense: 90,
          hp: 90,
          speed: 80,
          type: "Type",
          imageUrl: "src/images/freeza.jpg"
        },
        {
          id: "fighter-5",
          name: "Vegeta",
          attack: 170,
          defense: 130,
          hp: 100,
          speed: 170,
          type: "Type",
          imageUrl: "src/images/vegeta.png"
        },
        {
          id: "fighter-6",
          name: "Kefla",
          attack: 120,
          defense: 130,
          hp: 90,
          speed: 130,
          type: "Type",
          imageUrl: "src/images/kefla.jpg"
        },
      ],
    selectedFighterId: undefined,
    selectedFighter: undefined,
    fightWinner: undefined,
  },
  getters: {
    getFighters(state) {
      return state.fighters;
    }
  },
  mutations: {
    SET_FIGHTERS(state, payload) {
      state.fighters = payload;
    },
    SET_SELECTED_FIGHTER_ID(state, id) {
      state.selectedFighterId = id;
    },
    SET_SELECTED_FIGHTER(state, fighter) {
      state.selectedFighter = fighter;
    },
    SET_FIGHT_WINNER(state, winner) {
      state.fightWinner = winner;
    },
    SET_RESET_GAME(state) {
      state.fightWinner = undefined;
    }
  },
  actions: {
    loadFighters({ commit }) {
      // this one will be used when the fighters[] is moved to a stand alone file outside of the store
    },
    selectedFighterById({ commit }, id) {
      commit('SET_SELECTED_FIGHTER_ID', id);
    },
    selectedFighter({ commit }, fighter) {
      commit('SET_SELECTED_FIGHTER', fighter);
    },
    updateFightWinner({ commit }, winner) {
      commit('SET_FIGHT_WINNER', winner);
    },
    resetGame({ commit }) {
      commit('SET_RESET_GAME')
    }
  }
})
