export default {
  namespaced: true,
  state() {
    return{
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ],
    }
  },
  mutations: {
    addNewCoach(state, payload) {
      state.coaches.push(payload)
    }
  },
  actions: {
    registerCoach(context, payload) {
      const idCoach = `c${context.getters.setCoaches.length + 1}`;
      const newCoach = payload;
      
      newCoach.id = idCoach;
      context.commit('addAuthUserId', newCoach.id , { root: true })
      context.commit('addNewCoach',newCoach)
    }
  },
  getters: {
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
}
