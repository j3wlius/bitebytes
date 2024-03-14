import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Header() {
  const [isScroll, setIscroll] = useState(false);

  function windowScroll() {
    setIscroll(window.scrollY >= 150);
  }

  useEffect(() => {
    window.addEventListener("scroll", windowScroll);
    return () => window.removeEventListener("scroll", windowScroll);
  }, []);

  const navItems = [
    {
      id: 1,
      name: "Home",
      href: "#",
    },
    {
      id: 2,
      name: "About Us",
      href: "#",
    },
    {
      id: 3,
      name: "Food Menu",
      href: "#",
    },
    {
      id: 4,
      name: "Blog",
      href: "#",
    },
    {
      id: 5,
      name: "Contact Us",
      href: "#",
    },
  ];

  const navLinks = navItems.map((navItem) => (
    <li key={navItem.id} className="nav-item">
      <a href={navItem.href} className="navbar-link">
        {navItem.name}
      </a>
    </li>
  ));

  return (
    <header className={`header ${isScroll ? "active" : ""}`}>
      <div class="container">
        <h1>
          <a href="#" className="logo">
            BiteBytes<span className="span">.</span>
          </a>
        </h1>

        <nav className="navbar">
          <ul className="navbar-list">{navLinks}</ul>
        </nav>

        <div className="header-btn-group">
          <button className="search-btn" aria-label="Search">
            <IoSearchOutline className="icon" />
          </button>

          <button className="btn btn-hover">Reservation</button>

          <button className="nav-toggle-btn" aria-label="Toggle Menu">
            <span className="line top"></span>
            <span className="line middle"></span>
            <span className="line bottom"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
