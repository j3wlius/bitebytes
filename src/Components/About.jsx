import React from 'react';
import { IoCheckmarkOutline } from 'react-icons/io5';
import aboutBanner from '../images/about-banner.png';
import saleShapeRed from '../images/sale-shape-red.png';

function About() {
  return (
    <section className="section section-divider gray about" id="about">
      <div className="container">
        <div className="about-banner">
          <img
            src={aboutBanner}
            width="509"
            height="459"
            loading="lazy"
            alt="Burger with Drinks"
            className="w-100 about-img"
          />

          <img
            src={saleShapeRed}
            width="216"
            height="226"
            alt="get up to 50% off now"
            className="abs-img scale-up-anim"
          />
        </div>

        <div className="about-content">
          <h2 className="h2 section-title">
            Caferio, Burgers, and Best Pizzas{' '}
            <span className="span">in Town!</span>
          </h2>

          <p className="section-text">
            The restaurants in Hangzhou also catered to many northern Chinese
            who had fled south from Kaifeng during the Jurchen invasion of the
            1120s, while it is also known that many restaurants were run by
            families.
          </p>

          <ul className="about-list">
            <li className="about-item">
              <IoCheckmarkOutline className="icon" />

              <span className="span">Delicious & Healthy Foods</span>
            </li>

            <li className="about-item">
              <IoCheckmarkOutline className="icon" />

              <span className="span">Spacific Family And Kids Zone</span>
            </li>

            <li className="about-item">
              <IoCheckmarkOutline className="icon" />

              <span className="span">Music & Other Facilities</span>
            </li>

            <li className="about-item">
              <IoCheckmarkOutline className="icon" />

              <span className="span">Fastest Food Home Delivery</span>
            </li>
          </ul>

          <button className="btn btn-hover">Order Now</button>
        </div>
      </div>
    </section>
  );
}

export default About;
