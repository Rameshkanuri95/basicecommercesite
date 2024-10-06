import React from "react"
import "./ServiceList.scss" 

const ServicesList = () => {
  return (
    <div className="shipping-and-returns">
      <div className="shipping-info">
        <img src="path/to/free-shipping-icon.png" alt="Free Shipping" />
        <h3 className="shipping-title">Free Shipping</h3>
        <p className="shipping-description">Free shipping on all orders</p>
      </div>
      <div className="support-info">
        <img src="path/to/support-24-7-icon.png" alt="Support 24/7" />
        <h3 className="support-title">Support 24/7</h3>
        <p className="support-description">Free shipping on all orders</p>
      </div>
      <div className="money-return-info">
        <img src="path/to/money-return-icon.png" alt="Money Return" />
        <h3 className="money-return-title">Money Return</h3>
        <p className="money-return-description">Free shipping on all orders</p>
      </div>
      <div className="order-discount-info">
        <img src="path/to/order-discount-icon.png" alt="Order Discount" />
        <h3 className="order-discount-title">Order Discount</h3>
        <p className="order-discount-description">
          Free shipping on all orders
        </p>
      </div>
    </div>
  )
}

export default ServicesList
