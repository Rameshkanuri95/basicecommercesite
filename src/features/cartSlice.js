import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload)
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((items) => items.id !== action.payload)
    },
  },
})

export const { addItemToCart,removeItemFromCart} = cartSlice.actions
export default cartSlice.reducer
