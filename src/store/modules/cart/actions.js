export default {
  addProductToCart(context, newItem) {
    context.commit('setProdToCart', newItem.data);
  },
  removeProductFromCart(context, itemId) {
    context.commit('delCartItem', itemId.data)
  }
}