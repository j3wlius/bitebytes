import React from "react";
import blogOne from "../images/blog-1.jpg";
import blogTwo from "../images/blog-2.jpg";
import blogThree from "../images/blog-3.jpg";
import {
  IoCalendarNumberOutline,
  IoPersonOutline,
  IoArrowForward,
} from "react-icons/io5";

function Blog() {
  const blogList = [
    {
      id: 1,
      image: blogOne,
      title: "What Do You Think About Cheese Pizza Recipes?",
      subtitle: "Pizza",
      date: "Jan 01 2023",
      author: "Jonathan Smith",
      text: "Financial experts support or help you to to find out which way you can raise your funds more...",
      link: "#",
    },
    {
      id: 2,
      image: blogTwo,
      title: "Making Chicken Strips With New Delicious Ingridents.",
      subtitle: "Burger",
      date: "Jan 01 2023",
      author: "Jonathan Smith",
      text: "Financial experts support or help you to to find out which way you can raise your funds more...",
      link: "#",
    },
    {
      id: 3,
      image: blogThree,
      title: "Innovative Hot Chessyraw Pasta Make Creator Fact.",
      subtitle: "Chicken",
      date: "Jan 01 2023",
      author: "Jonathan Smith",
      text: "Financial experts support or help you to to find out which way you can raise your funds more...",
      link: "#",
    },
  ];

  const blogPost = blogList.map((blog) => (
    <li key={blog.id}>
      <div className="blog-card">
        <div className="card-banner">
          <img
            src={blog.image}
            width="600"
            height="390"
            loading="lazy"
            alt={blog.title}
            className="w-100"
          />

          <div className="badge">{blog.subtitle}</div>
        </div>

        <div className="card-content">
          <div className="card-meta-wrapper">
            <a href="#" className="card-meta-link">
              <IoCalendarNumberOutline className="icon" />

              <time className="meta-info" datetime="2023-01-01">
                {blog.date}
              </time>
            </a>

            <a href="#" className="card-meta-link">
              <IoPersonOutline className="icon" />

              <p className="meta-info">{blog.author}</p>
            </a>
          </div>

          <h3 className="h3">
            <a href="#" className="card-title">
              {blog.title}
            </a>
          </h3>

          <p className="card-text">{blog.text}</p>

          <a href="#" className="btn-link">
            <span>Read More</span>

            <IoArrowForward className="icon" />
          </a>
        </div>
      </div>
    </li>
  ));

  return (
    <section className="section section-divider white blog" id="blog">
      <div className="container">
        <p className="section-subtitle">Latest Blog Posts</p>

        <h2 className="h2 section-title">
          This Is All About <span class="span">Foods</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>

        <ul className="blog-list">{blogPost}</ul>
      </div>
    </section>
  );
}

export default Blog;
