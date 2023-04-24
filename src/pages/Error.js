import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <div className="section error-container">
        <h1>404</h1>
        <p>page not found</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
