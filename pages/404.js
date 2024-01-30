import React from "react";

const NotFound = ({ statusCode }) => {
  return (
    <div>
      <h1>{statusCode} - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
