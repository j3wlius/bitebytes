import React from "react";
import { IoStarOutline } from "react-icons/io5";
import avatarOne from "../images/avatar-1.jpg";
import avatarTwo from "../images/avatar-2.jpg";
import avatarThree from "../images/avatar-3.jpg";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: avatarOne,
      title: "CEO Kingfisher",
      text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product."',
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      image: avatarTwo,
      title: "CEO Getforce",
      text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product."',
      rating: 4,
    },
    {
      id: 3,
      name: "Robert William",
      image: avatarThree,
      title: "CEO Kingfisher",
      text: '"I would be lost without restaurant. I would like to personally thank you for your outstanding product."',
      rating: 5,
    },
  ];

  const testimonialPost = testimonials.map((testimonial) => (
    <li className="testi-item">
      <div className="testi-card">
        <div className="profile-wrapper">
          <figure className="avatar">
            <img
              src={testimonial.image}
              width="80"
              height="80"
              loading="lazy"
              alt={testimonial.name}
            />
          </figure>

          <div>
            <h3 className="h4 testi-name">{testimonial.name}</h3>

            <p className="testi-title">{testimonial.title}</p>
          </div>
        </div>

        <blockquote className="testi-text">{testimonial.text}</blockquote>

        <div className="rating-wrapper">
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <IoStarOutline key={index} className="icon" />
          ))}
        </div>
      </div>
    </li>
  ));

  return (
    <section className="section section-divider white testi">
      <div className="container">
        <p className="section-subtitle">Testimonials</p>

        <h2 className="h2 section-title">
          Our Customers <span className="span">Reviews</span>
        </h2>

        <p className="section-text">
          Food is any substance consumed to provide nutritional support for an
          organism.
        </p>

        <ul className="testi-list has-scrollbar">{testimonialPost}</ul>
      </div>
    </section>
  );
}

export default Testimonials;
