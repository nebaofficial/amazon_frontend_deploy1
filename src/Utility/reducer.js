import {Type} from './action.type'
export const initialState = {
  cart: [],
  user:null

}
export const reducer = (state, action) => {
  switch(action.type){
    case Type.ADD_TO_CART: {
      // check if the item is already in the cart
      const existingItem = state.cart.find(item => item.id === action.items.id)

      if (existingItem) {
        // if it is, increment the quantity
        const updatedCart = state.cart.map(item =>
          item.id === action.items.id ? {...item, quantity: item.quantity + 1} : item
        )
        return {
          ...state,
          cart: updatedCart
        }
      } else {
        // if not, add it to the cart with a quantity of 1
        return {
          ...state,
          cart: [...state.cart, {...action.items, quantity: 1}]
        }
      }
    }
    case Type.REMOVE_FROM_CART: {
      const index = state.cart.findIndex(item => item.id === action.id)
      let newCart = [...state.cart]

      if (index >= 0) {
        if (newCart[index].quantity > 1) {
          newCart[index] = {...newCart[index], quantity: newCart[index].quantity - 1}
        } else {
          newCart.splice(index, 1)
        }
      }
      return {
        ...state,
        cart: newCart
      }
    }
    case Type.SET_USER:
      return {
        ...state,
        user: action.user
      };
    
    default:
      return state;
  }
}
