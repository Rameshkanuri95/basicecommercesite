import React from "react"
import "./BlogSection.scss"

const BlogPostCard = ({ title, description, author, image }) => {
  return (
    <article className="blog-post-card">
      <img src={image} alt={title} className="blog-post-image" />
      <h2 className="blog-post-title">{title}</h2>
      <p className="blog-post-description">{description}</p>
      <div className="blog-post-author">By {author}</div>
    </article>
  )
}

const BlogSection = () => {
  const blogPosts = [
    {
      title: "A Guide to Latest Trends",
      description:
        "Discover the hottest trends in fashion, technology, and more.",
      author: "Admin",
      image: "path/to/image1.jpg",
    },
    {
      title: "A Guide to Latest Trends",
      description:
        "Discover the hottest trends in fashion, technology, and more.",
      author: "Admin",
      image: "path/to/image1.jpg",
    },
    {
      title: "A Guide to Latest Trends",
      description:
        "Discover the hottest trends in fashion, technology, and more.",
      author: "Admin",
      image: "path/to/image1.jpg",
    }
    // ... other blog posts
  ]

  return (
    <section className="blog-section">
      <h1 className="blog-section-title">Our Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </div>
    </section>
  )
}

export default BlogSection
