export default {
  setCoaches(state) {
    return state.coaches
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_state, getters, _rootState, rootGetters) {
    const coaches = getters.setCoaches;
    const userId = rootGetters.showId;

    return !coaches.some(coach => coach.id === userId);
  }
}