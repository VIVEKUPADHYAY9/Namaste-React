// src/components/ErrorPage.js

import React from "react";
import { Link } from "react-router-dom"; // Assumes you're using React Router for navigation
// Optional: If you want to add custom styles

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops! Something Went Wrong.</h1>
      <p>We can't find the page you're looking for.</p>
      <img
        src="https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg" // Replace with your custom error image
        alt="Error 404"
        className="error-image"
      />
      <p>
        Try going back to the <Link to="/">homepage</Link> or explore other
        delicious dishes!
      </p>
    </div>
  );
};

export default ErrorPage;
