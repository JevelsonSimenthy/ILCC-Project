import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section class="newsletter section_p1">
      <div class="content">
        <h3>Sign Up for Our Newsletter</h3>
        <p>
          Join for event updates and uplifting
          <span> spiritual reflections.</span>
        </p>
      </div>

      <div class="email">
        <input type="text" placeholder="email: jondoe@email.com" />
        <button className="button">Sign Up</button>
      </div>
    </section>
  );
};

export default NewsLetter;
