import productReducer, { fetchProducts } from "../features/productSlice"
import { configureStore } from "@reduxjs/toolkit"

test("should handle fetch products", async () => {
  const store = configureStore({ reducer: { product: productReducer } })
  await store.dispatch(fetchProducts())

  const state = store.getState().product
  expect(state.items.length).toBe(true)
})
