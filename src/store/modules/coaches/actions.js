export default {
  async registerCoach(context, payload) {
    const idCoach = `c${context.getters.setCoaches.length + 1 + new Date().toISOString()}`;
    const newCoach = payload;
    newCoach.id = idCoach;
    
    const response = await fetch('http://localhost:3020/coaches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON;charset=utf-8',
      },
      body: JSON.stringify(newCoach)
    });
    const result = await response.json();
    
    context.commit('addAuthUserId', result.id , { root: true });
    context.commit('addNewCoach', result);

  },
  async getCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) return;

    const response = await fetch('http://localhost:3020/coaches')
    const result = await response.json();
    
    if (!response.ok) {
      const error = new Error(result.message || 'Failed to featch!');
      console.error(error)
    }
    
    context.commit('setCoaches', result);
    context.commit('setFetchTimestamp')
  }
}