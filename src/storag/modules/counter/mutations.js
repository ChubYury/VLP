export default {
  increment(state) {
    state.counter++;
    // console.log(state);
  },
  increase(state, payload) {
    state.counter += payload.value;
  },
}