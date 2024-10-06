import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import ProductList from "./pages/ProductList"
import Cart from "./pages/Cart"

import { fetchProducts } from "./features/productSlice"
const App = () => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/products" Component={ProductList}></Route>
          <Route path="/products/:id" Component={ProductDetails}></Route>
          <Route path="/cart" Component={Cart}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
