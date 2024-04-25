import React from 'react';
import heroBg from '../images/hero-bg.jpg';
import ctaBanner from '../images/cta-banner.png';
import saleShape from '../images/sale-shape.png';

function Cta() {
  return (
    <section
      className="section section-divider white cta"
      style={{ backgroundImage: { heroBg } }}
    >
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">
            The BiteBytes Have Excellent{' '}
            <span className="span">Quality Burgers!</span>
          </h2>

          <p className="section-text">
            The restaurants in Hangzhou also catered to many northern Chinese
            who had fled south from Kaifeng during the Jurchen invasion of the
            1120s, while it is also known that many restaurants were run by
            families.
          </p>

          <button className="btn btn-hover">Order Now</button>
        </div>

        <figure className="cta-banner">
          <img
            src={ctaBanner}
            width="700"
            height="637"
            loading="lazy"
            alt="Burger"
            className="w-100 cta-img"
          />

          <img
            src={saleShape}
            width="216"
            height="226"
            loading="lazy"
            alt="get up to 50% off now"
            className="abs-img scale-up-anim"
          />
        </figure>
      </div>
    </section>
  );
}

export default Cta;
