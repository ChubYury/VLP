export default {
  setProdToCart(state, cartItem) {
    const productInCartIndex = state.items.findIndex(
      (item) => item.productId === cartItem.id
    );

    if (productInCartIndex >= 0) {
      state.items[productInCartIndex].qty++;
    } else {
      const newItem = {
        productId: cartItem.id,
        title: cartItem.title,
        image: cartItem.image,
        price: cartItem.price,
        qty: 1,
      };
      state.items.push(newItem);
    }
    state.qty++;
    state.total += cartItem.price;
  },
  delCartItem(state, cartItemId) {
    const productInCartIndex = state.items.findIndex(
      (cartItem) => cartItem.productId === cartItemId
    );
    const prodData = state.items[productInCartIndex];
    
    state.items.splice(productInCartIndex, 1);
    state.qty -= prodData.qty;
    state.total -= prodData.price * prodData.qty;
  }
}