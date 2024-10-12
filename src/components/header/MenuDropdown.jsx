import React from 'react';
import './MenuDropdown.scss';

const menuData = {
  homeGroups: [
    {
      title: "HOME GROUP ONE",
      items: [
        "Home Fashion", "Home Fashion Two", "Home Fashion Three", "Home Fashion Four",
        "Home Fashion Five", "Home Fashion Six", "Home Fashion Seven", "Home Fashion Eight",
        "Home Kids Fashion", "Home Cosmetics", "Home Furniture", "Home Furniture Two", "Home Furniture Three"
      ]
    },
    {
      title: "HOME GROUP TWO",
      items: [
        "Home Furniture Five", "Home Furniture Six", "Home Furniture Seven",
        "Home Electronics", "Home Electronics Two", "Home Electronics Three",
        "Home Book Store", "Home Book Store Two", "Home Plants", "Home Flower Shop",
        "Home Flower Shop Two", "Home Organic Food", "Home Organic Food Two"
      ]
    },
    {
      title: "HOME GROUP THREE",
      items: [
        "Home Grid Banner", "Home Auto Parts", "Home Cake Shop", "Home Handmade",
        "Home Pet Food", "Home Medical Equipment", "Home Christmas", "Home Black Friday",
        "Home Black Friday Two", "Home Valentines Day"
      ]
    }
  ]
};

const MenuDropdownMenu = ({menuItems}) => {
  return (
    <div className="dropdown-menu">
      {menuData.homeGroups.map((group, index) => (
        <div className="menu-group" key={index}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item, idx) => (
              <li key={idx}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuDropdownMenu;
