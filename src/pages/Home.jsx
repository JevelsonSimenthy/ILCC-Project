import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.css";

// components imports
import ImageGallery from "../components/ImageGallery";
import UpcomingEvents from "../components/UpcomingEvents";

// data imports
import sermonsData from "../data/sermons-data.json";
import Masonary from "@/components/Masonary";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const targetElement = document.getElementById(location.state.scrollTo);
      targetElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <main className="home_section">
      <section className="dashboard bg_img">
        <div className="dashboard_screen"></div>
        <div className="dashboard_buttons">
          <Link to={"/about"} className="button">
            About Us
          </Link>
          <Link to={"/contact"} className="button">
            Contact Us
          </Link>
        </div>
      </section>

      <section className="kreupasanam_event">
        <picture>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScprJuIuPJZL6E6YNdz1s1Jm6M7vr6AjSV3OJ2gwRZjPUTW9Q/viewform"
            target="_blank"
          >
            <img
              src="https://github.com/AnilKumar3494/ILCC-images/blob/main/events/updatedKru.jpeg?raw=true"
              alt=""
            />
          </a>
        </picture>
        <button className="button">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScprJuIuPJZL6E6YNdz1s1Jm6M7vr6AjSV3OJ2gwRZjPUTW9Q/viewform"
            target="_blank"
          >
            Register Here
          </a>
        </button>
      </section>

      {/* <section className="sermons" id="sermons">
        <div className="seromns_content">
         
          <h2>Picked Sermons</h2>
          <h4>Our lives in the word of God</h4>
        </div>
        <ImageGallery sermonsData={sermonsData} />
      </section> */}

      <section className="upcoming_events" id="events">
        <div>
          <h2>Upcoming Events</h2>
          <h4>Immerse Yourself in God's Presence</h4>
        </div>
        <UpcomingEvents />
      </section>

      {/* <section className="image_gallery">
        <div className="seromns_content">
          <h2>IMAGES COLLECTION</h2>
          <h4>Sharing our faith and community stories</h4>
          <Masonary />
        </div>
      </section> */}
    </main>
  );
};

export default Home;
