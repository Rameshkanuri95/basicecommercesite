import React from "react"
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"
import "./Header.scss"
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Flone</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/collection">Collection</a>
            </li>
            <li>
              <a href="/pages">Pages</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="header-icons">
          <FaSearch className="icon" title="Search" />
          <FaHeart className="icon" title="Favorites" />
          <FaUser className="icon" title="User Account" />
          <FaShoppingCart className="icon" title="Shopping Cart" />
        </div>
      </div>
    </header>
  )
}

export default Header
