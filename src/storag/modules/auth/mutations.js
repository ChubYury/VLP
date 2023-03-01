export default {
  setAuth(state, payload) {
    state.userAuthValid = payload.isAuth;
  },
}