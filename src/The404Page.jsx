import React from "react";
import { NavLink } from "react-router-dom";
import image1 from "./Images/6325257.jpg";

function The404Page() {
  return (
    <section  className="page-404">
      <section>
        <div className="image-404">
          <img src={image1} alt="" />
        </div>

        <div>
          <h3>Page not found</h3>
          <p>
            We're sorry, there seems to be an issue with the page you are
            looking for{" "}<br/>
            Please go back to the home page
          </p>
          <p></p>
        </div>

        <div className="div-404">
          <NavLink className="link-404" to="/">
            Go to home
          </NavLink>
        </div>
      </section>
    </section>
  );
}

export default The404Page;
