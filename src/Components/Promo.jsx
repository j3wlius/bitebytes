import React from "react";
import promoOne from "../images/promo-1.png";
import promoTwo from "../images/promo-2.png";
import promoThree from "../images/promo-3.png";
import promoFour from "../images/promo-4.png";
import promoFive from "../images/promo-5.png";

function Promo() {
  const promoList = [
    {
      id: 1,
      title: "Mexican Pizza",
      image: promoOne,
      description:
        "Food is any substance consumed to provide nutritional support for an organism.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
        ></svg>
      ),
    },
    {
      id: 2,
      title: "Soft Drinks",
      image: promoTwo,
      description:
        "Food is any substance consumed to provide nutritional support for an organism.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
        ></svg>
      ),
    },
    {
      id: 3,
      title: "Soft Drinks",
      image: promoTwo,
      description:
        "Food is any substance consumed to provide nutritional support for an organism.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
        ></svg>
      ),
    },
    {
      id: 4,
      title: "Soft Drinks",
      image: promoTwo,
      description:
        "Food is any substance consumed to provide nutritional support for an organism.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="none"
        ></svg>
      ),
    },
  ];

  const promoPost = promoList.map((promo) => (
    <li className="promo-item">
      <div className="promo-card">
        <div className="card-icon">{promo.icon}</div>

        <h3 className="h3 card-title">{promo.title}</h3>

        <p className="card-text">{promo.description}</p>

        <img
          src={promo.image}
          width="300"
          height="300"
          loading="lazy"
          alt={promo.title}
          className="w-100 card-banner"
        />
      </div>
    </li>
  ));
  return (
    <section className="section section-divider white promo">
      <div className="container">
        <ul className="promo-list has-scrollbar">{promoPost}</ul>
      </div>
    </section>
  );
}

export default Promo;
