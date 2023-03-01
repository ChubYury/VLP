export default {
  increment(context) {
    setTimeout(() => {
      context.commit('increment')
    },2000)
  },
  increase(context, payload) {
    console.log('Context',context)
    context.commit({
      type: 'increase',
      value: payload.value
    })
  },
}