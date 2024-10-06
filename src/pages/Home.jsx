import React from "react"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import ServicesList from "../components/serviceslist/ServicesList"
import BlogSection from "../components/blog/BlogSection"
import DailyDealsSection from "../components/dailysection/DailyDealsSection"
import Carousel from "../components/Carousal/Carousal"

const Home = () => {
  const images = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    "https://example.com/image5.jpg",
  ]
  return (
    <>
      <Header />
      <Carousel images={images}/>
      <ServicesList />
      <DailyDealsSection />
      <BlogSection />
      <Footer />
    </>
  )
}

export default Home
