import React from "react"
import "./DailyDealsSection.scss"

const ProductCard = ({ image, title, price, discount, rating }) => {
  return (
    <article className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <div className="product-price">
        {discount ? <span className="product-old-price">{price}</span> : null}
        <span className="product-new-price">{price}</span>
      </div>
      <div className="product-rating">
        {[...Array(rating)].map((_, i) => (
          <i key={i} className="fa fa-star" />
        ))}
      </div>
    </article>
  )
}

const DailyDealsSection = () => {
  const products = [
    {
      title: "Lorem Ipsum Fashion Female Top",
      price: "€35.6",
      discount: "€26.87",
      rating: 4,
      image: "path/to/image1.jpg",
    },
    {
      title: "Lorem Ipsum Fashion Female Top",
      price: "€35.6",
      discount: "€26.87",
      rating: 4,
      image: "path/to/image1.jpg",
    },
    {
      title: "Lorem Ipsum Fashion Female Top",
      price: "€35.6",
      discount: "€26.87",
      rating: 4,
      image: "path/to/image1.jpg",
    }
    // ... other products
  ]

  return (
    <section className="daily-deals-section">
      <h1 className="daily-deals-section-title">Daily Deals!</h1>
      <div className="product-cards">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  )
}

export default DailyDealsSection
