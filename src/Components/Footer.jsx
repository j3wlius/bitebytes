import React from 'react';
import footerIllustration from '../images/footer-illustration.png';
import {
  IoLogoPinterest,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
} from 'react-icons/io5';

function Footer() {
  const currentDate = new Date();
  return (
    <footer className="footer">
      <div
        className="footer-top"
        style={{ backgroundImage: { footerIllustration } }}
      >
        <div className="container">
          <div className="footer-brand">
            <a href="" className="logo">
              BiteBytes<span className="span">.</span>
            </a>

            <p className="footer-text">
              Financial experts support or help you to to find out which way you
              can raise your funds more.
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <IoLogoFacebook className="icon" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter className="icon" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoInstagram className="icon" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoPinterest className="icon" />
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Info</p>
            </li>

            <li>
              <p className="footer-list-item">+256 71029-9222</p>
            </li>

            <li>
              <p className="footer-list-item">Info@bitebytes.com</p>
            </li>

            <li>
              <address className="footer-list-item">
                Williamson Plaza, Kampala, Uganda
              </address>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Opening Hours</p>
            </li>

            <li>
              <p className="footer-list-item">Monday-Friday: 08:00-22:00</p>
            </li>

            <li>
              <p className="footer-list-item">Tuesday 4PM: Till Mid Night</p>
            </li>

            <li>
              <p className="footer-list-item">Saturday: 10:00-16:00</p>
            </li>
          </ul>

          <form action="" className="footer-form">
            <p className="footer-list-title">Book a Table</p>

            <div className="input-wrapper">
              <input
                type="text"
                name="full_name"
                required
                placeholder="Your Name"
                aria-label="Your Name"
                className="input-field"
              />

              <input
                type="email"
                name="email_address"
                required
                placeholder="Email"
                aria-label="Email"
                className="input-field"
              />
            </div>

            <div className="input-wrapper">
              <select
                name="total_person"
                aria-label="Total person"
                className="input-field"
              >
                <option value="person">Person</option>
                <option value="2 person">2 Person</option>
                <option value="3 person">3 Person</option>
                <option value="4 person">4 Person</option>
                <option value="5 person">5 Person</option>
              </select>

              <input
                type="date"
                name="booking_date"
                aria-label="Reservation date"
                className="input-field"
              />
            </div>

            <textarea
              name="message"
              required
              placeholder="Message"
              aria-label="Message"
              className="input-field"
            ></textarea>

            <button type="submit" className="btn">
              Book a Table
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright-text">
            &copy; {currentDate.getFullYear()}{' '}
            <a href="https://jewlius.me" class="copyright-link">
              Tamale
            </a>{' '}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
