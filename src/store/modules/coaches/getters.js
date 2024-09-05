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

    return coaches.some(coach => coach.userId === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    
    if (!lastFetch) return true;
    const currentTimeStamp = new Date.getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
}