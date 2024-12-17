// import User from "./User";

// const About = () => {
//   return (
//     <div>
//       <h1>About us </h1>
//       <User />
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[70vh] w-[50%] text-white"
      style={{
        backgroundImage:
          'url("https://cdn.stocksnap.io/img-thumbs/280h/hamburger-dinner_7QH4K6AESO.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-5xl font-bold mb-4 text-center">
          Welcome to Foodgy
        </h1>
        <p className="text-lg max-w-2xl text-center mb-6">
          At Foodgy, we serve delicious recipes and food reviews that satisfy
          your cravings. Follow us on social media to stay updated!
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 text-2xl"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
