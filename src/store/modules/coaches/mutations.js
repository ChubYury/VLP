export default {
  addNewCoach(state, payload) {
    console.log('New coache: ', payload);
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setFetchTimestamp (state) {
    const newDate = new Date();
    console.log(newDate);
    console.log(newDate.getTime());
    state.lastFetch = newDate.getTime();
  }
}