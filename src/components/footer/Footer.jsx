import React from "react"
import "./Footer.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section logo">
            <h2>Flone</h2>
            <p>© 2024 Flone. All Rights Reserved</p>
          </div>
          <div className="footer-section about-us">
            <h3>ABOUT US</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/location">Store Location</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/tracking">Order tracking</a>
              </li>
            </ul>
          </div>

          <div className="footer-section useful-links">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li>
                <a href="/returns">Returns</a>
              </li>
              <li>
                <a href="/support-policy">Support Policy</a>
              </li>
              <li>
                <a href="/size-guide">Size guide</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="footer-section follow-us">
            <h3>FOLLOW US</h3>
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://youtube.com">Youtube</a>
              </li>
            </ul>
          </div>

          <div className="footer-section subscribe">
            <h3>SUBSCRIBE</h3>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <input type="email" placeholder="Enter your email address..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
