export default {
  async registerCoach(context, payload) {
    const response = await fetch('http://localhost:3020/api/setCoache', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON;charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const result = await response.json();
    console.log('Result: ', result);
    
    context.commit('addAuthUserId', result._id , { root: true });
    context.commit('addNewCoach', result);

  },

  async getCoaches(context, payload) {
    if (!payload.forceRefresh && !context.getters.shouldUpdate) return;
    
    const response = await fetch('http://localhost:3020/api/getCoaches');
    const result = await response.json();
    
    if (!response.ok) {
      const error = new Error(result.message || 'Failed to featch!');
      console.error(error);
      throw error;
    }
    
    context.commit('setCoaches', result);
    context.commit('setFetchTimestamp');
  }
}