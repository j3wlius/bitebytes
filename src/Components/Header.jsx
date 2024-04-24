import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

function Header() {
  return (
    <header className="header">
      <div class="container">
        <h1>
          <a href="#" className="logo">
            BiteBytes<span className="span">.</span>
          </a>
        </h1>

        <nav className="navbar">
          <ul className="navbar-list">
            <li className="nav-item">
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="#about" className="navbar-link">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a href="#food-menu" className="navbar-link">
                Shop
              </a>
            </li>

            <li className="nav-item">
              <a href="#blog" className="navbar-link">
                Blog
              </a>
            </li>

            <li className="nav-item">
              <a href="#" className="navbar-link">
                Contact Us
              </a>
            </li>
          </ul>
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
