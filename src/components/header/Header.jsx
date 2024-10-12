import React, { useState } from "react"
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"
import "./Header.scss"
import MenuDropdown from "./MenuDropdown"
import Search from "./Serach"
const Header = () => {
  const menuItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Shop",
      link: "/shop",
    },
    {
      label: "Collection",
      link: "/collection",
    },
    {
      label: "Pages",
      link: "/pages",
    },
    {
      label: "Blog",
      link: "/blog",
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
  ]

  const [isDropdownVisible, setDropdownVisible] = useState(false)
  const [seachVisible, setSeachVisible] = useState(false)
  const handleMouseEnter = () => {
    setDropdownVisible(true)
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false)
  }

  const handleSeach = () => {
    setSeachVisible(!seachVisible)
  }

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Flone</h1>
          </div>
          <nav className="navbar">
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-icons">
            <FaSearch className="icon" title="Search" onClick={handleSeach}/>
            <FaHeart className="icon" title="Favorites" />
            <FaUser className="icon" title="User Account" />
            <FaShoppingCart className="icon" title="Shopping Cart" />
          </div>
        </div>
      </header>
      {isDropdownVisible && <MenuDropdown />}
      {seachVisible && <Search />}
    </div>
  )
}

export default Header
