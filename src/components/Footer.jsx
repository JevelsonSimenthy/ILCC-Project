import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import NewsLetter from "./NewsLetter";

import SocialLinks from "./SocialIcons";
import ContactDetails from "./ContactDetails";
import navLinks from "../data/nav-links.json";
import RandomVerse from "./RandomVerse";

const Footer = () => {
  const lastID = navLinks.navlinks[navLinks.navlinks.length - 1].id;

  return (
    <main>
      <footer className="footer">
        <section>
          <NewsLetter />
        </section>

        <section className="logo_container">
          <img
            src="https://github.com/AnilKumar3494/ILCC-images/blob/main/logo/ILCC%20Logo%20no%20bg.png?raw=true"
            alt="ILCC"
            className="logo"
            style={{ width: "110px" }}
          />
          <RandomVerse />
        </section>

        <section className="footer_links">
          <div className="footer_contactDetails">
            <h3>Contact Us</h3>
            <ContactDetails maxId={3} />
          </div>

          <div className="footer_socialLinks">
            <p>Follow Us:</p>
            {/* <SocialLinks /> */}
          </div>
        </section>
      </footer>
    </main>
  );
};

export default Footer;
