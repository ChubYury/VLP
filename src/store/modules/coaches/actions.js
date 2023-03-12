export default {
  async registerCoach(context, payload) {
    const idCoach = `c${context.getters.setCoaches.length + 1 + new Date().toISOString()}`;
    const newCoach = payload;
    
    newCoach.id = idCoach;
    console.log(newCoach)
    const response = await fetch('http://localhost:3020/coaches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON;charset=utf-8',
      },
      body: JSON.stringify(newCoach)
    });
    
    const result = await response.json();
    console.log('Response for register coach');
    console.log(result)
    console.log('__________________')
    context.commit('addAuthUserId', result.id , { root: true });
    context.commit('addNewCoach', result);

  },
  async getCoaches(context) {
    const response = await fetch('http://localhost:3020/coaches')
                            
    if (!response.ok) return;
    
    const coaches = [];
    const result = await response.json();
    
    result.forEach(resItem => {
      const coach = {
        id : resItem.id,
        firstName : resItem.firstName,
        lastName : resItem.lastName,
        hourlyRate: resItem.hourlyRate,
        areas: resItem.areas,
        description : resItem.description,
      }
      
      coaches.push(coach)
    });
    
    context.commit('setCoaches', coaches);
  }
}